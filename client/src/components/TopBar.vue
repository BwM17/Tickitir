<script setup>
import IconBtn from './IconBtn.vue'
</script>

<template>
  <div class="flex justify-between y-5 w-full pr-5 pl-12 py-6 items-center">
    <div class="flex">
      <p class="text-gray-600">{{ route }}</p>
    </div>
    <div class="space-x-4 flex items-center">
      <IconBtn class="text-white h-12 w-12" icon="bi bi-bell-fill" />
      <IconBtn class="text-white h-12 w-12" icon="bi bi-envelope-fill" />
      <img class="h-12 w-12 rounded-full" v-bind:src="img" alt="pfp" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    route: String,
    username: String,
    img: String
  }
}
</script>
