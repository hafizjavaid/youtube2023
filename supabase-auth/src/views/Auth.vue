<template>
  <div class="relative lg:mx-auto w-full md:max-w-[500px] bg-white rounded-2xl">
    <div class="rounded-2xl w-full md:max-w-[500px]">
      <div
        class="border-neutral-400 bg-neutral-50 relative rounded-xl px-8 py-12 drop-shadow-sm"
      >
        <div class="mb-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h1 class="text-primary text-2xl">Vue3 & Supabase</h1>
          </div>
          <p class="text-neutral-400 text-auth-widget-test">
            Authenticate the vue 3 app using supabase
          </p>
        </div>
        <Auth
          :supabaseClient="supabaseClient"
          :appearance="{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#6c47ff',
                },
              },
            },
          }"
          :providers="['google', 'github']"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabaseClient } from '@/supabase';

import { Auth } from '@nuxtbase/auth-ui-vue';
</script>

<style scoped></style>
