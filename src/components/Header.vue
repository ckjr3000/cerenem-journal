<template>
  <div id="header">
    <DarkModeToggle />
    <NavigationMenu />
  </div>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
import NavigationMenu from "./NavigationMenu.vue";
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
