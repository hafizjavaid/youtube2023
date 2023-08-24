<template>
  <div
    class="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img src="/logo.png" class="mx-auto w-auto h-12" alt="Logo" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <!-- Auth Form -->
    <AuthForm />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
