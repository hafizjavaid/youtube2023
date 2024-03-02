<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { RouterLink, useRouter } from 'vue-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useAuthStore } from '@/stores/authStore';
// import useCurrentUser from '@/composables/useCurrentUser';
// const { currentUser } = useCurrentUser();
const currentUser = computed(() => store.user);
const router = useRouter();
const store = useAuthStore();
const logout = () => {
  store.user = null;
  window.localStorage.removeItem('currentUserContent');
  router.push({ name: 'auth-login' });
};
</script>

<template>
  <div class="border-b">
    <div class="flex h-16 items-center px-4">
      <!-- Logo -->
      <!-- Nav -->
      <div class="ml-auto">
        <nav class="flex items-center space-x-4 lg:space-x-6">
          <template v-if="!currentUser">
            <RouterLink
              to="/auth/login"
              class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/auth/register"
              class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Register
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink
              to="/"
              class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/category"
              class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Categories
            </RouterLink>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                  <Avatar class="h-8 w-8">
                    <AvatarImage
                      :src="currentUser.avatar.url"
                      :alt="currentUser.username"
                    />
                    <AvatarFallback>
                      {{ currentUser.username.charAt(0) }}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56" align="end">
                <DropdownMenuLabel class="font-normal flex">
                  <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">
                      {{ currentUser.username }}
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                      {{ currentUser.email }}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="logout"> Log out </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </template>
        </nav>
      </div>
    </div>
  </div>
</template>
