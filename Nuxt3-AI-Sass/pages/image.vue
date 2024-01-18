<template>
  <div>
    <!-- Heading -->
    <Heading
      title="Image Generation"
      description="Turn your prompt into an image."
      icon="lucide:image"
      iconColor="text-pink-700"
      bgColor="bg-pink-700/10"
    ></Heading>
    <div class="px-4 lg:px-8">
      <div>
        <form
          @submit.prevent="submitForm"
          class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div class="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div class="m-0 p-0">
              <input
                type="text"
                v-model="prompt"
                placeholder="How do I calculate the radius of a circle?"
                class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full"
              />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-2">
            <Select v-model="resolution">
              <SelectTrigger>
                <SelectValue placeholder="Select your resolution" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(res, i) in resolutionOptions"
                    :key="i"
                    :value="res.value"
                  >
                    {{ res.text }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="col-span-12 lg:col-span-2">
            <Select v-model="amount">
              <SelectTrigger>
                <SelectValue placeholder="Select your resolution" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(res, i) in amountOptions"
                    :key="i"
                    :value="res.value"
                  >
                    {{ res.text }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            class="col-span-12 lg:col-span-2"
            type="submit"
            :disabled="!prompt || isLoading"
          >
            Generate
          </Button>
        </form>
      </div>
      <div class="space-y-4 mt-4">
        <div
          v-if="isLoading"
          class="p-8 rounded-lg w-full flex items-center justify-center bg-muted"
        >
          <Loader />
        </div>
        <Empty v-if="!photos.length && !isLoading" label="No conversation started." />

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
        >
          <div
            class="rounded-lg overflow-hidden border border-black/5"
            v-for="photo in photos"
            :key="photo"
          >
            <div class="relative aspect-square flex justify-center items-center">
              <img :src="photo" alt="Image" />
            </div>
            <div class="-2">
              <NuxtLink
                target="_blank"
                :to="photo"
                download
                class="w-full bg-slate-200 flex justify-center px-1 py-2 items-center"
              >
                Download
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Loader -->
    <!-- Empty -->
    <!-- BotAvatar -->
    <!-- UserAvatar -->
  </div>
</template>

<script setup lang="ts">
import { useProModal } from '~/store/useProModal';
const store = useProModal();
const prompt = ref('');
const amount = ref('1');
const resolution = ref('256x256');

const isLoading = ref(false);
const photos = ref<string[]>([]);

const submitForm = async () => {
  isLoading.value = true;

  const { data, error } = await useFetch('/api/image', {
    method: 'POST',
    body: {
      prompt: prompt.value,
      amount: amount.value,
      resolution: resolution.value,
    },
  });

  if (data.value) {
    photos.value = data.value.map((img) => {
      if (img.url) {
        return img.url;
      }
      return '';
    });
    await refreshNuxtData('userData');
  }
  if (error.value) {
    console.log('[Image_Error]', error.value.statusMessage);
    if (error.value.statusCode === 403) {
      store.onOpen();
    }
  }
  prompt.value = '';
  isLoading.value = false;
};
</script>

<style scoped></style>
