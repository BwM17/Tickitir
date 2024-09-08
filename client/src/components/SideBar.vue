<script setup>
import SideBarElement from './SideBarElement.vue'
</script>

<template>
  <div class="py-6 px-10 bg-gray-900 h-full flex flex-col justify-between">
    <div>
      <h1 class="text-white text-5xl font-bold">Tickitr</h1>

      <div class="mt-12 space-y-2">
        <SideBarElement icon="bi bi-ticket-detailed-fill" title="Tickets" />
        <SideBarElement icon="bi bi-inboxes-fill" title="Inbox" />
        <SideBarElement icon="bi bi-clipboard2-data-fill" title="Dashboard" />
        <SideBarElement icon="bi bi-person-lines-fill" title="Team" />
        <SideBarElement icon="bi bi-gear-fill" title="Settings" />
      </div>
    </div>
    <div class="justify-bottom">
      <SideBarElement icon="bi bi-box-arrow-right" title="logout" />
    </div>
  </div>
</template>
