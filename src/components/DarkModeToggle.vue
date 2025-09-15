<template>
  <div class="toggle-container">
    <span class="emoji sun">🌞</span>
    <button
      class="toggle-switch"
      @click="toggleDarkMode"
      :class="{ dark: isDark }"
    >
      <span class="thumb"></span>
    </button>
    <span class="emoji moon">🌑</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark-mode", isDark.value);
};
</script>

<style scoped>
.toggle-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* Pill switch button */
.toggle-switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* responsive sizing */
  width: 12vw; /* 12% of viewport width */
  max-width: 60px;
  min-width: 40px;

  height: 6vw;
  max-height: 28px;
  min-height: 20px;

  border-radius: 9999px;
  background: #333;
  border: none;
  cursor: pointer;
  padding: 0 4px;
  transition: background 0.3s ease;
}

.toggle-switch.dark {
  background: #f0f0f0;
}

.toggle-switch .emoji {
  font-size: clamp(12px, 3vw, 16px); /* scales with screen size */
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.toggle-switch .sun {
  opacity: 1;
}

.toggle-switch.dark .sun {
  opacity: 0.4;
}

.toggle-switch .moon {
  opacity: 0.4;
}

.toggle-switch.dark .moon {
  opacity: 1;
}

/* Thumb */
.toggle-switch .thumb {
  position: absolute;
  top: 10%;
  left: 8%;
  width: 40%;
  height: 80%;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.toggle-switch.dark .thumb {
  background: black;
  transform: translateX(100%);
}
</style>
