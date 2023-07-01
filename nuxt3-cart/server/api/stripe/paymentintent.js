import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const stripe = new Stripe(secret.key);

    return await stripe.paymentIntents.create({
      amount: Number(body.amount),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });
})
