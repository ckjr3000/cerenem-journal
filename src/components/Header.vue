<template>
  <button @click="toggleDarkMode">dark mode toggle</button>
  <button>open nav</button>
</template>

<script setup>
const toggleDarkMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let links = document.activeElement;
  links.classList.toggle("dark-mode");
};
</script>
