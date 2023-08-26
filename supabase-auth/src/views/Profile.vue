<template>
  <div class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="supabaseUser?.user_metadata.picture"
        alt=""
      />
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">
          {{ supabaseUser?.user_metadata.full_name }}
        </p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
          {{ supabaseUser?.user_metadata.email }}
        </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <button
        class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabaseClient } from '@/supabase';

import { useSupabaseUser } from '@nuxtbase/auth-ui-vue';

const { supabaseUser } = useSupabaseUser(supabaseClient);

console.log(supabaseUser.value);

const logout = async () => {
  await supabaseClient.auth.signOut();
};
</script>

<style scoped></style>
