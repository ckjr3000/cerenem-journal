<template>
  <div>
    <!-- Toggle Button -->
    <button @click="toggleMenu" class="menu-btn">
      <img
        src="../assets/vectors/left-arrow.svg"
        alt="menu icon"
        class="icon"
      />
      <span>Site Navigation</span>
    </button>

    <!-- Overlay -->
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

    <!-- Side Menu -->
    <transition name="slide">
      <div v-if="isOpen" class="side-menu">
        <button class="close-btn" @click="closeMenu">
          <span>Close</span
          ><img
            src="../assets/vectors/right-arrow.svg"
            alt="menu icon"
            class="icon"
          />
        </button>
        <nav>
          <router-link to="/scorecomposition"
            >Score Composition Project</router-link
          >
          <router-link to="/soundinstallation"
            >Sound Installation Project</router-link
          >
          <router-link to="/improvisation">Improvisation Project</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RightSideNav",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Atkinson Hyperlegible";
  font-style: normal;
  font-weight: 400;
  src: url(@assets/fonts/AtkinsonHyperlegible-Regular.ttf);
}

.menu-btn,
.close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #faf6e9;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* space between icon and text */
  color: #f40b0b;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 1rem;
  border: 2px solid #f40b0b;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1001;
  border-radius: 4px;
}

.dark-mode .menu-btn {
  background-color: black;
  color: #faf6e9;
}

.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100vh;
  background: #faf6e9;
  padding: 2rem 1rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  z-index: 1002;
}

nav {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  gap: 5vh;
}

.side-menu a {
  color: #f40b0b;
  text-decoration: none;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
