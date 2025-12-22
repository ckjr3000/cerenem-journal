<template>
  <div class="player">
    <button @click="togglePlay">
      <img
        v-if="!isPlaying"
        src="../assets/vectors/play-btn.svg"
        alt="play audio"
        class="icon"
      />
      <img
        v-else
        src="../assets/vectors/pause-btn.svg"
        alt="pause audio"
        class="icon"
      />
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
  width: 100%;
}

button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.icon {
  width: 40px;
  height: 40px;
}

input[type="range"] {
  flex: 1;
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: black; /* Black progress bar */
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

/* Webkit browsers */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #f40b0b; /* Red thumb */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -5px; /* Center thumb vertically */
}

/* Firefox */
input[type="range"]::-moz-range-thumb {
  width: 1.5rem;
  height: 1.5rem;
  background: #f40b0b;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

/* Firefox track */
input[type="range"]::-moz-range-track {
  background: black;
  height: 6px;
  border-radius: 3px;
}

.dark-mode input[type="range"] {
  background: white;
}

.dark-mode input[type="range"]::-moz-range-track {
  background: white;
}

@media (max-width: 560px) {
  .player {
    gap: 0.5rem;
  }

  button {
    font-size: 1rem;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  /* Webkit browsers */
  input[type="range"]::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
  }

  /* Firefox */
  input[type="range"]::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
  }
}
</style>
