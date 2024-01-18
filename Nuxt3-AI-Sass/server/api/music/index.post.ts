import Replicate from "replicate";
import { protectRoute } from '~/server/utils';

import { User } from '~/server/types'

const config = useRuntimeConfig();

const replicate = new Replicate({
    auth: config.replicateKey,
});

export default defineEventHandler(async (event) => {



    await protectRoute(event);
    const user = event.context.user as User

    const { prompt } = await readBody(event)

    if (!replicate.auth) {
        throw createError({
            statusCode: 500,
            statusMessage: 'replicate key is not configured'
        })
    }
    if (!prompt) {
        throw createError({
            statusCode: 400,
            statusMessage: 'prompt is required'
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
    const model = "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05"

    const response = await replicate.run(
        model,
        {
            input: {
                prompt_a: prompt
            }
        }
    );
    await incrementApiLimit(user.id)
    return response

})