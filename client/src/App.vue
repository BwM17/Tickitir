<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <main class="h-[100vh] flex overflow-hidden">
    <SideBar />
    <div class="w-full h-full">
      <TopBar
        route="Ticket"
        img="https://media.tenor.com/3WzehOPlvHoAAAAM/ambatukam-ambasing.gif"
      />
      <RouterView />
    </div>
  </main>
</template>
