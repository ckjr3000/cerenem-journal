<template>
  <div>
    <!-- Toggle Button -->
    <button @click="toggleMenu" class="menu-btn">Site Navigation</button>

    <!-- Overlay -->
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

    <!-- Side Menu -->
    <transition name="slide">
      <nav v-if="isOpen" class="side-menu">
        <button class="close-btn" @click="closeMenu">Close</button>
        <router-link to="/scorecomposition"
          >Score Composition Project</router-link
        >
        <router-link to="/soundinstallation"
          >Sound Installation Project</router-link
        >
        <router-link to="/improvisation">Improvisation Project</router-link>
        <router-link to="/about">About</router-link>
      </nav>
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
.menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1001;
  border-radius: 4px;
}

.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: 100vh;
  background: #222;
  color: white;
  padding: 2rem 1rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  z-index: 1002;
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu li {
  margin: 1rem 0;
}

.side-menu a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
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
