
import { H3Event } from 'h3'
import { serverSupabaseUser } from '#supabase/server'
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient()
export const MAX_COUNT = 5
export const protectRoute = async (event: H3Event) => {

    const user = await serverSupabaseUser(event);

    if (!user) {
        throw createError({
            statusMessage: 'Unauthorized',
            statusCode: 401
        })
    }

    event.context.user = user



}

export const incrementApiLimit = async (userId: string) => {
    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    })

    if (userApiLimit) {
        await prisma.userApiLimit.update({
            where: {
                userId
            },
            data: {
                count: userApiLimit.count + 1
            }
        })
    } else {
        await prisma.userApiLimit.create({
            data: {
                userId,
                count: 1
            }
        })
    }

}

export const checkApiLimit = async (userId: string) => {

    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    })
    if (!userApiLimit || userApiLimit.count < MAX_COUNT) {
        return true
    } else {
        return false
    }


}


export const getApiLimitCount = async (userId: string) => {

    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    })
    if (!userApiLimit) {
        return 0
    }

    return userApiLimit.count


}

const config = useRuntimeConfig();

export const stripe = new Stripe(config.stripeSecret, {
    apiVersion: '2023-08-16',
    typescript: true
})

export const absoluteUrl = (path: string) => {
    console.log(path);
    console.log('ERROR', `${config.appUrl}${path}`);


    return `${config.appUrl}${path}`
}

const DAY_IN_MS = 84_400_000


export const isUserPro = async (userId: string) => {

    const userSubscription = await prisma.userSubscription.findUnique({
        where: {
            userId,
        },
        select: {
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true,
            stripeSubscriptionId: true
        }
    })

    if (!userSubscription) {
        return false
    }

    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

    return !!isValid

}