<template>
  <div>
    <!-- Toggle Button -->
    <button @click="toggleMenu" class="menu-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="16"
        fill="none"
        viewBox="0 0 47 16"
      >
        <path
          fill="currentColor"
          d="M.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93L.293 7.293ZM47 8V7H1v2h46V8Z"
        />
      </svg>
      <span>Site Navigation</span>
    </button>

    <!-- Overlay -->
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

    <!-- Side Menu -->
    <transition name="slide">
      <div v-if="isOpen" class="side-menu">
        <button class="menu-btn" @click="closeMenu">
          <span>Close</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="16"
            fill="none"
            viewBox="0 0 47 16"
          >
            <path
              fill="currentColor"
              d="M46.707 7.293a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414-1.414L44.586 8l-5.657-5.657A1 1 0 0 1 40.343.93l6.364 6.364ZM0 8V7h46v2H0V8Z"
            />
          </svg>
        </button>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/scorecomposition"
            >Score Composition Project</router-link
          >
          <router-link to="/soundinstallation"
            >Sound Installation Project</router-link
          >
          <router-link to="/improvisation">Improvisation Project</router-link>
          <router-link to="/contributors">Contributors</router-link>
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

.menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #faf6e9;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #f40b0b;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-size: 1rem;
  border: 2px solid #f40b0b;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1001;
  border-radius: 4px;

  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, transform 0.2s ease;
}

.menu-btn:hover {
  color: #faf6e9;
  background: #f40b0b;
  border-color: #f40b0b;

  /* subtle scale effect */
  transform: translateY(-2px);
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

.dark-mode .side-menu {
  background: rgb(32, 32, 32);
}

.dark-mode .side-menu a {
  color: white;
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

@media (max-width: 1225px) {
  .side-menu {
    width: 25vw;
  }
}

@media (max-width: 1000px) {
  .side-menu {
    width: 40vw;
  }
}

@media (max-width: 550px) {
  .side-menu {
    width: 50vw;
  }
}

@media (max-width: 440px) {
  .side-menu {
    width: 92vw;
  }
}

@media (max-width: 400px) {
  .menu-btn {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>
