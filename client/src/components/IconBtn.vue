<template>
  <button class="bg-gray-900 rounded-xl items-center">
    <i class="text-xl" :class="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>
