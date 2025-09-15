<template>
  <div class="player">
    <button @click="togglePlay">
      <span v-if="!isPlaying">▶️</span>
      <span v-else>⏸️</span>
    </button>

    <input
      type="range"
      min="0"
      max="100"
      v-model="progress"
      @input="seekAudio"
    />

    <span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  src: { type: String, required: true },
});

const audio = new Audio(props.src);
const isPlaying = ref(false);
const progress = ref(0);
const currentTime = ref(0);
const duration = ref(0);

const togglePlay = () => {
  if (audio.paused) {
    audio.play();
    isPlaying.value = true;
  } else {
    audio.pause();
    isPlaying.value = false;
  }
};

const seekAudio = () => {
  audio.currentTime = (progress.value / 100) * duration.value;
};

const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const updateTime = () => {
  currentTime.value = audio.currentTime;
  progress.value = (audio.currentTime / duration.value) * 100 || 0;
};

onMounted(() => {
  audio.addEventListener("loadedmetadata", () => {
    duration.value = audio.duration;
  });
  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("ended", () => {
    isPlaying.value = false;
    progress.value = 0;
    currentTime.value = 0;
  });
});

onUnmounted(() => {
  audio.pause();
  audio.src = "";
});
</script>

<style scoped>
.player {
  display: flex;
  align-items: center;
  gap: 1rem;
}

button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

input[type="range"] {
  flex: 1;
}
</style>
