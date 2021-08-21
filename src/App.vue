<template>
  <v-app style="overflow: hidden !important">
    <Toolbar class="hidden-sm-and-up" />
    <v-main class="hidden-sm-and-up">
      <!-- All the components in one -->
      <Landing />
      <ArrowDown />
      <doc-offer></doc-offer>
      <toplawyers></toplawyers>
      <words></words>
      <OurGuide />
      <whysyrgo></whysyrgo>
      <footbar></footbar>
    </v-main>
    <v-card align="center" class="hidden-sm-and-down">
      <h2>Please Check this out on the mobile version!</h2>
    </v-card>
  </v-app>
</template>

<script>
// all imported components
import Landing from "./components/Homepage/Landing.vue";
import Toolbar from "./components/Toolbar";
import ArrowDown from "./components/Homepage/ArrowDown.vue";
import DocOffer from "./components/Homepage/DocOffer.vue";
import Toplawyers from "./components/Homepage/Toplawyers.vue";
import Words from "./components/Homepage/Words.vue";
import OurGuide from "./components/Homepage/OurGuide.vue";
import Whysyrgo from "./components/Homepage/Whysyrgo.vue";
import Footbar from "./components/footbar.vue";

export default {
  name: "App",
  // the components to be used
  components: {
    Toolbar,
    Landing,
    ArrowDown,
    DocOffer,
    Toplawyers,
    Words,
    OurGuide,
    Whysyrgo,
    Footbar,
  },
};
</script>
