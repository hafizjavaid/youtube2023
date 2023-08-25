<template>
  <div class="border p-5 rounded w-[500px]">
    <h1 class="text-2xl mb-4">Register</h1>

    <form
      v-if="!pendingVerification"
      @submit.prevent="handleSubmit"
      class="space-y-4 md:space-y-6"
    >
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
          Email Address
        </label>
        <input
          type="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
          placeholder="name@company.com"
          v-model="email"
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Create an account
      </button>
    </form>

    <div v-else>
      <form class="space-y-4 md:space-y-6">
        <input
          v-model="code"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Verification Code..."
        />
        <button
          type="submit"
          @click="onPressVerify"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Verify Email
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useSignUp } from 'vue-clerk';
import { useRouter } from 'vue-router';

const { isLoaded, signUp, setActive } = useSignUp();
const email = ref('');
const password = ref('');
const pendingVerification = ref(false);
const code = ref('');
const router = useRouter();

const handleSubmit = async () => {
  if (!isLoaded.value) {
    return;
  }

  try {
    await signUp.value?.create({
      emailAddress: email.value,
      password: password.value,
    });
    await signUp.value?.prepareEmailAddressVerification({
      strategy: 'email_code',
    });
    pendingVerification.value = true;
  } catch (error) {
    console.log(error);
  }
};
const onPressVerify = async () => {
  console.log('VERIFY');
  if (!isLoaded.value) {
    return;
  }

  try {
    const completeSignup = await signUp.value?.attemptEmailAddressVerification({
      code: code.value,
    });
    if (completeSignup?.status === 'complete') {
      // @ts-ignore
      setActive({ session: completeSignup.createdSessionId });
      router.push('/');
    }
    if (completeSignup?.status !== 'complete') {
      console.log(JSON.stringify(completeSignup, null, 2));
    }
    pendingVerification.value = true;
  } catch (error) {
    console.log(error);
  }
};
</script>
