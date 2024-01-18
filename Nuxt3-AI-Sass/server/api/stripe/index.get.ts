import { PrismaClient } from "@prisma/client";
import { User } from "~/server/types";

const prisma = new PrismaClient();

const returnUrl = absoluteUrl('/settings');


export default defineEventHandler(async (event) => {

    await protectRoute(event)
    const user = event.context.user as User

    const userSubscription = await prisma.userSubscription.findUnique({
        where: {
            userId: user.id
        }
    })

    // Cancel or Upgrade Subscription
    if (userSubscription && userSubscription.stripeCustomerId) {

        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: returnUrl
        })

        return {
            url: stripeSession.url
        }

    }

    // New Subscription

    const stripeSession = await stripe.checkout.sessions.create({
        success_url: returnUrl,
        cancel_url: returnUrl,
        payment_method_types: ['card'],
        mode: 'subscription',
        billing_address_collection: 'auto',
        customer_email: user.email,
        line_items: [

            {

                price_data: {
                    currency: 'USD',
                    product_data: {
                        name: 'MultiGenix Pro',
                        description: 'AI Sass using Nuxt 3'
                    },
                    unit_amount: 2000, // $20
                    recurring: {
                        interval: 'month'
                    }
                },
                quantity: 1

            }

        ],
        metadata: {
            userId: user.id
        }
    })

    return {
        url: stripeSession.url 
    }

})



