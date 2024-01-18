import { PrismaClient } from "@prisma/client";
import { User } from "~/server/types";

const prisma = new PrismaClient();

const DAY_IN_MS = 84_400_000

export default defineEventHandler(async (event ) => {

    await protectRoute(event)

    const user = event.context.user as User 

    const userSubscription = await prisma.userSubscription.findUnique({
        where:{
            userId: user.id
        },
        select: {
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true ,
            stripeSubscriptionId: true 
        }
    })

    if(!userSubscription){
        return false
    }

    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

    return !!isValid 

})