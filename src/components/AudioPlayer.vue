<template>
  <button @click="handlePlay">Play</button>
  <button>Stop</button>
  <button>Mute</button>
  <label for="volume">Volume</label>
  <input name="volume" type="range" min="0" max="100" />
  <!-- track length -->
  <label for="progress">Progress</label>
  <input name="progress" type="range" min="0" max="100" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pathToAudioFile: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      audioContext: new AudioContext() as AudioContext,
    };
  },
  methods: {
    async handlePlay() {
      console.log(this.pathToAudioFile);
      const audio = new Audio(this.pathToAudioFile);
      const source = this.audioContext.createMediaElementSource(audio);
      source.connect(this.audioContext.destination);
      audio.play();
    },
  },
});
</script>
