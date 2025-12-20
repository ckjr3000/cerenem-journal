<template>
  <Header />
  <img src="../assets/vectors/page-accent.svg" alt="" class="page-decoration" />
  <main>
    <h1>Journal Contributors</h1>
    <div class="contributor">
      <h2>Jo Christman</h2>
      <p>
        - Explorations of hybridity and boundary through noisy electronics.
        Their practice encompasses improvisation and live performance,
        installation, and composition. Currently studying an MA by research they
        are hoping to expand understandings of creative and technical practice,
        moving toward a more blended approach to music making as well as sound
        engineering.
      </p>
      <br />
      <a href="https://flow.page/joechristman"
        >https://flow.page/joechristman</a
      >
    </div>
    <div class="contributor">
      <h2>Tom Hawkins</h2>
      <p>
        is a cellist, composer and workshop leader based in Huddersfield. In
        January 2025, he submitted his Masters in composition, which explores
        fragility and instability with a specific focus on instrument
        modification and alternative methods of notation. Tom has a passion for
        making contemporary music more accessible, and teaches workshops to a
        range of ages from primary school children, to adults suffering with
        dementia.
      </p>
    </div>
    <div class="contributor">
      <h2>Freya Shaw</h2>
      <p>
        is a visually impaired musician, software developer, and founder of
        Immersion Sound Studio (ISS), a young company supported by Innovate UK.
        ISS is dedicated to developing accessible software for blind and
        visually impaired (BVI) users. During her Master’s Research in Music
        Technology at the University of Huddersfield, Freya researched and
        developed a prototype for the Hodr Engine, a BVI-accessible audio game
        engine. ISS is developing a commercial version of the Hodr Engine,
        scheduled for release in mid-2025. Freya is also a guitarist, composing
        scores and sound design for video games. Her pieces often centre around
        the classical guitar. However, she has composed in a multitude of genres
        for commissions.
      </p>
    </div>
    <div class="contributor">
      <h2>Anthony J. Stillabower</h2>
      <p>
        Anthony J. Stillabower is a composer and improviser. As an improviser he
        performs live and records albums using his voice and feedback
        percussion, in mostly duo and trio settings. As a composer he creates
        scores, with various approaches to notation, for instrumental chamber
        ensembles and electronics.
      </p>
    </div>
    <div class="contributor">
      <h2>Sophie Cooper</h2>
      <p>
        Sophie Cooper is a sound artist who Huddersfield Contemporary Music
        Festival (hcmf//) refer to as “A crucial member of Yorkshire’s
        far-reaching experimental music scene”. Sophie’s practice pivots around
        new presentations of acoustic instrumentation (primarily the trombone)
        with electronics, challenging conventions around composition, text
        placement and performance. In recent years, Sophie has been particularly
        interested in publicly engaged, site specific, audio work, often in
        collaboration with visual artists. She has had work exhibited at The
        John Rylands Research Institute and Library, Wordsworth Grasmere Museum,
        Bury Art Gallery, Hereford Courtyard Art Centre and Gallery Frank as
        well as music venues including Cafe Oto and hcmf//. Sophie is currently
        studying a part-time MRes Music at the University of Huddersfield and
        her supervisor is Monty Adkins
      </p>
    </div>
    <div class="contributor">
      <h2>Charlotte Roe</h2>
      <p>
        Charlotte Roe is an interdisciplinary digital artist based in
        Huddersfield, United Kingdom. Stemming from a curiosity and love of
        technology, she makes work with and ‘in collaboration with’ computers
        exploring the human relationships we cultivate with technology. Roe has
        previously worked with sculpture, illustration, painting, sound and
        programming to explore these themes.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// @ts-ignore
import Header from "@/components/Header.vue";

export default defineComponent({
  components: { Header },
});
</script>

<style>
.contributor {
  width: 60vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contributor h2 {
  font-size: 1rem;
  font-weight: bold;
}

.contributor h2,
p {
  display: inline;
}
</style>
