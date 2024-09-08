<template>
  <button class="flex py-2 px-3 w-full rounded-xl justify-start text-gray-600">
    <div class="flex space-x-3 items-center">
      <i class="text-2xl" v-bind:class="icon"></i>
      <p>{{ title }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  }
}
</script>
