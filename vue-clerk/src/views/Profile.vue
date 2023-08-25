<script setup lang="ts">
import { UserProfile, useAuth } from 'vue-clerk'
import { useMiddleware } from '../composables/middleware'
const { isSignedIn } = useAuth()


useMiddleware(isSignedIn.value)
</script>

<template>
  <UserProfile  />
</template>