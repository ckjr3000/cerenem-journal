<template>
  <div id="header">
    <DarkModeToggle />
    <button>open nav</button>
  </div>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
