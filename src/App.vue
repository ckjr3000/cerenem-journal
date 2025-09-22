<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style scoped>
body::before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  width: 400px; /* adjust size */
  height: 400px; /* adjust size */
  background: url("../assets/vectors/page-accent.svg") no-repeat top right;
  background-size: contain;

  pointer-events: none; /* so it doesn’t block clicks */
  z-index: 0; /* baseline layer */
}
</style>
