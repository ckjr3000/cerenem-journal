<template>
  <Header />
  <img src="../assets/vectors/page-accent.svg" alt="" class="page-decoration" />
  <main>
    <div id="left">
      <h1>CeReNeM Journal #10</h1>
      <h2>Introduction</h2>
      <p class="subheading">x minute read</p>
      <img src="../assets/vectors/landmark-down.svg" alt="" class="landmark" />
      <AudioPlayer src="jingle-jangles.mp3" />
      <p>
        Research is often a solitary endeavor, requiring focused study and
        individual reflection. Yet the communities that form within universities
        play a vital role in shaping this process, offering support, dialogue,
        and shared experience that enrich the researcher’s journey. Our time at
        the Centre for Research in New Music (CeReNeM) at the University of
        Huddersfield has profoundly shaped our perspectives and music-making,
        inspiring us to co-edit this edition of the CeReNeM Journal to document
        and energize this vibrant community.
      </p>
      <p>
        For Issue Nine, our vision was to approach research as a communal act.
        Given CeReNeM’s wide-ranging interests and specialisms (from composers
        and improvisers, to sound artists, to creative coders and software
        developers), the challenge lay in uniting these varied voices without
        asking anyone to stray from their unique research paths. To do this, we
        adopted the metaphor of 'islands' as our guiding framework. In the
        course of our early conversations, three islands emerged: score
        composition, sound installation, and improvisation.
      </p>
      <p>
        As diverse as these areas can be, through our collaborations they
        converged into a shared exploration—an invitation to consider and
        reconsider the key questions that motivated our intentions: How do
        individual insights contribute to a collective narrative? What does it
        mean to navigate the boundaries between individual experimentation and
        communal engagement? 
      </p>
      <p>
        As you consider these questions, we invite you to explore the projects
        that reflect and celebrate our community of researchers at CeReNeM in
        2024.
      </p>
    </div>
    <div id="right">
      <img src="../assets/vectors/landmark-right.svg" alt="" class="landmark" />
      <nav>
        <router-link to="/scorecomposition"
          >Score Composition Project</router-link
        >
        <router-link to="/soundinstallation"
          >Sound Installation Project</router-link
        >
        <router-link to="/improvisation">Improvisation Project</router-link>
      </nav>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ts-ignore
import AudioPlayer from "@/components/AudioPlayer.vue";
// @ts-ignore
import Header from "@/components/Header.vue";

export default defineComponent({
  components: { AudioPlayer, Header },
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

#left {
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#right {
  display: flex;
  flex-direction: row;
  gap: 5vw;
}

nav {
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media (max-width: 1060px) {
  main {
    flex-direction: column;
  }

  #left,
  #right {
    width: 80%;
  }

  #right > nav {
    margin: 0;
  }
}
</style>
