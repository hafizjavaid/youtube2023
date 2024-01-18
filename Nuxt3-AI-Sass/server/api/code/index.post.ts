import OpenAI from 'openai'
import { checkApiLimit, incrementApiLimit, isUserPro, protectRoute } from '~/server/utils';
import { User } from '~/server/types'

const config = useRuntimeConfig();

const openai = new OpenAI({
    apiKey: config.openaiKey
})

const instruction = {
    role: 'system',
    content: 'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.'

}
export default defineEventHandler(async (event) => {



    await protectRoute(event);
    const user = event.context.user as User

    const { messages } = await readBody(event)

    if (!openai.apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'OpenAI key not configured'
        })
    }
    if (!messages) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Messages are required'
        })
    }

    const freeTrial = await checkApiLimit(user.id)
    const isPro = await isUserPro(user.id)

    if (!freeTrial && !isPro) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Free trial has expired. Please upgrade to pro.'
        })
    }

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [instruction, ...messages]
    })

    await incrementApiLimit(user.id)
    return response.choices[0].message

})