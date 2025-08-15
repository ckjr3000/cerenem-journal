<template>
  <div class="audio-player">
    <div class="controls">
      <button @click="togglePlay">{{ isPlaying ? "Stop" : "Play" }}</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model.number="volume"
        @input="updateVolume"
      />
      <button @click="toggleMute">{{ isMuted ? "Unmute" : "Mute" }}</button>
    </div>

    <div class="progress">
      <input
        type="range"
        min="0"
        :max="duration"
        step="0.1"
        v-model.number="currentTime"
        @input="seek"
      />
      <span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebAudioPlayer",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      audioCtx: null,
      audioBuffer: null,
      sourceNode: null,
      gainNode: null,
      isPlaying: false,
      startTime: 0,
      pausedAt: 0,
      volume: 1,
      isMuted: false,
      duration: 0,
      currentTime: 0,
      progressInterval: null,
    };
  },
  methods: {
    async loadAudio() {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext ||
          window.webkitAudioContext)();
      }
      const response = await fetch(this.src);
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
      this.duration = this.audioBuffer.duration;
    },
    createSource() {
      this.sourceNode = this.audioCtx.createBufferSource();
      this.sourceNode.buffer = this.audioBuffer;
      this.gainNode = this.audioCtx.createGain();
      this.sourceNode.connect(this.gainNode).connect(this.audioCtx.destination);
      this.sourceNode.onended = () => {
        if (this.currentTime >= this.duration) {
          this.stop(true);
        } else {
          this.isPlaying = false;
        }
      };
    },
    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },
    play() {
      if (!this.audioBuffer) return;
      this.createSource();
      this.startTime = this.audioCtx.currentTime - this.pausedAt;
      this.sourceNode.start(0, this.pausedAt);
      this.isPlaying = true;
      this.startProgressUpdater();
    },
    pause() {
      if (this.sourceNode) {
        this.sourceNode.stop();
        this.pausedAt = this.audioCtx.currentTime - this.startTime;
        this.isPlaying = false;
        this.stopProgressUpdater();
      }
    },
    stop(reset = false) {
      this.isPlaying = false;
      this.pausedAt = reset ? 0 : this.pausedAt;
      this.stopProgressUpdater();
    },
    updateVolume() {
      if (this.gainNode) {
        this.gainNode.gain.value = this.isMuted ? 0 : this.volume;
      }
    },
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.updateVolume();
    },
    startProgressUpdater() {
      this.stopProgressUpdater();
      this.progressInterval = setInterval(() => {
        this.currentTime = this.audioCtx.currentTime - this.startTime;
        if (this.currentTime >= this.duration) {
          this.stop(true);
        }
      }, 100);
    },
    stopProgressUpdater() {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    },
    seek() {
      this.pause();
      this.pausedAt = this.currentTime;
      this.play();
    },
    formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s.toString().padStart(2, "0")}`;
    },
  },
  async mounted() {
    await this.loadAudio();
  },
  beforeUnmount() {
    this.stopProgressUpdater();
    if (this.audioCtx) {
      this.audioCtx.close();
    }
  },
};
</script>

<style scoped>
.audio-player {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}
.controls {
  display: flex;
  gap: 6px;
  align-items: center;
}
.progress {
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>
