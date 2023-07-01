<template>
  <div>
    <form @submit.prevent="submitPayment">
      <div ref="cardElement"></div>
      <button type="submit">支払う</button>
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';

export default {
  data() {
    return {
      stripePromise: null,
      cardElement: null,
      clientSecret: null
    };
  },
  mounted() {
    this.initializeStripeElements();
  },
  methods: {
    async initializeStripeElements() {
      this.stripePromise = loadStripe(public.key);
      const stripe = await this.stripePromise;

      let res = await $fetch('/api/stripe/paymentintent', {
          method: 'POST',
          body: {
            amount: 1000,
          }
      })
      this.clientSecret = res.client_secret;

      const elements = stripe.elements();
      this.cardElement = elements.create('card');
      this.cardElement.mount(this.$refs.cardElement);
    },
    async submitPayment() {
      const stripe = await this.stripePromise;

      if (!stripe) {
        console.error('Stripeオブジェクトが未定義です。');
        return;
      }

      const { error, paymentMethod } = await stripe.confirmCardPayment(
        this.clientSecret,
        {
          payment_method: {
            card: this.cardElement,
          },
        }
      );

      if (error) {
        console.error(error.message);
      } else {
        // 成功した場合の処理を追加します
        // ページの遷移などを行うコードを追加してください
      }
    }
  }
};
</script>
