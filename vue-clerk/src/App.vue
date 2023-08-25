<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAuth, UserButton, ClerkLoaded } from 'vue-clerk';

const { userId } = useAuth();
</script>

<template>
  <header class="bg-[#6c47ff]">
    <div class="container flex justify-between items-center h-20">
      <div
        @click="$router.push('/')"
        class="text-2xl font-extrabold text-white cursor-pointer"
      >
        ClerkVueAuth
      </div>
      <nav v-if="!userId" class="flex items-center">
        <RouterLink to="/sign-in" class="text-white mx-4 font-semibold"
          >SignIn</RouterLink
        >
        <RouterLink to="/sign-up" class="text-white mx-4 font-semibold"
          >Signup</RouterLink
        >
        <RouterLink to="/register" class="text-white mx-4 font-semibold"
          >Custom Register</RouterLink
        >
      </nav>
      <nav v-else class="flex items-center">
        <RouterLink to="/profile" class="text-white mx-4 font-semibold"
          >Profile</RouterLink
        >
        <UserButton after-sign-out-url="/sign-in" />
      </nav>
    </div>
  </header>
  <main class="container mx-auto">
    <div class="flex items-center justify-center min-h-[calc(100dvh-80px)]">
      <div class="">
        <ClerkLoaded>
          <RouterView />
        </ClerkLoaded>
      </div>
    </div>
  </main>
</template>
