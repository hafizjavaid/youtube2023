import OpenAI from 'openai'
import { checkApiLimit, incrementApiLimit, protectRoute } from '~/server/utils';
import { User } from '~/server/types'


const config = useRuntimeConfig();

const openai = new OpenAI({
    apiKey: config.openaiKey
})

export default defineEventHandler(async (event) => {



    await protectRoute(event);
    const user = event.context.user as User


    const { prompt, amount = 1, resolution = '512x512' } = await readBody(event)

    if (!openai.apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'OpenAI key not configured'
        })
    }
    if (!prompt) {
        throw createError({
            statusCode: 400,
            statusMessage: 'prompt is required'
        })
    }
    if (!amount) {
        throw createError({
            statusCode: 400,
            statusMessage: 'amount is required'
        })
    }
    if (!resolution) {
        throw createError({
            statusCode: 400,
            statusMessage: 'resolution is required'
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
    const response = await openai.images.generate({
        prompt,
        n: parseInt(amount, 10),
        size: resolution
    })
    await incrementApiLimit(user.id)
    return response.data

})