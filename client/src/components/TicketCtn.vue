<template>
  <div class="w-full h-full bg-blue-300"></div>
</template>

<script>
export default {
  data() {},
  methods: {
    getTickets() {
      try {
        const res = fetch('http://localhost:3000/ticket')

        if (!res.ok) {
          throw new Error(res.status)
        }

        let result = res.json
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
