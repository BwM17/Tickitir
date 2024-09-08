<script setup>
import iconBtn from '../components/IconBtn.vue'
</script>

<template>
  <div class="flex-grow mx-12 mt-5 overflow-hidden">
    <h2 class="text-white font-semibold text-3xl">All Tickets</h2>
    <div class="flex justify-between w-full mt-4">
      <div class="bg-gray-800 px-3 py-2 text-l font-semibold rounded-xl items-center">
        <label><i class="text-white mr-2 bi bi-search"></i></label>
        <input class="bg-gray-800 focus:outline-none text-white" type="text" placeholder="search" />
      </div>
      <div>
        <icon-btn class="text-white h-12 w-12" icon="bi bi-three-dots" />
      </div>
    </div>
    <table class="mt-5 text-white table-auto">
      <thead>
        <tr>
          <td>Client</td>
          <td>Title</td>
          <td>Status</td>
        </tr>
      </thead>
      <tr class="bg-cyan-300" v-for="ticket in tickets" :key="ticket.id">
        <td>John Wordington</td>
        <td>{{ ticket.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickets: null
    }
  },
  created() {
    this.GetTickets()
  },
  methods: {
    async GetTickets() {
      try {
        const response = await fetch('http://localhost:3000/tickets')
        if (!response.ok) throw new Error(response.status)

        const result = await response.json()
        console.log(result)

        this.tickets = result
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
