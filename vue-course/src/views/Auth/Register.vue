<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuthStore } from '@/stores/authStore'
type PAYLOAD = {
  email: string;
  password: string;
  username: string;
  role: 'ADMIN' | 'USER';
};
const form = ref<PAYLOAD>({
  password: 'password',
  username: 'hafiz',
  email: 'hafizjaidi786@gmail.com',
  role: 'ADMIN',
});
const router = useRouter();
const store = useAuthStore();
const onSubmit = async () => {
  try {

    await store.registerUser(form.value)
    router.push('/');
  } catch (error) {
    console.log(error);
  } finally {
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="mx-auto w-full max-w-md">
      <form @submit.prevent="onSubmit">
        <Card class="overflow-y-auto">
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl"> Create an account </CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="text" placeholder="email" v-model="form.email" />
            </div>
            <div class="grid gap-2">
              <Label for="username">Username</Label>
              <Input id="username" type="text" placeholder="username" v-model="form.username" />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" v-model="form.password" />
            </div>
            <div class="grid gap-1">
              <Label for="role">Role</Label>
              <Select v-model="form.role" id="role">
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="USER"> USER </SelectItem>
                    <SelectItem value="ADMIN"> ADMIN </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter class="flex-col space-y-2">
            <Button class="w-full" type="submit"> Register </Button>
            <p>
              Already have an account?
              <RouterLink to="/auth/login" class="border-b border-gray-500 text-muted-foreground hover:text-primary">
                Login
              </RouterLink>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  </div>
</template>
