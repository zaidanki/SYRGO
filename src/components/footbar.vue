<style scoped>
/* Scoped Style */
.dclass {
  font-family: Lato;
  font-style: normal;
  font-size: 2.4154589371980677vw;
  line-height: 2.898550724637681vw;
  color: white;
}
</style>

<template>
  <div>
    <v-card
      style="height: 15.217391304347828vw"
      class="d-flex"
      tile
      color="#F7931E"
    >
      <div
        style="margin: 4.1062801932367154vw 4.830917874396135vw"
        class="dclass"
      >
        <!-- Div Containing the Text -->
        <div>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
        <v-card
          style="height: 0.4830917874396135vw"
          outlined
          class="transparent"
        ></v-card>
        <div>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div
        style="margin: 4.1062801932367154vw 4.1062801932367154vw 0 0px"
        align="center"
      >
        <!-- Div Containing the images -->
        <img
          style="
            height: 7.246376811594203vw;
            width: 7.487922705314009vw;
            margin: 0 4.1062801932367154vw 0 0;
          "
          :src="fbwhite"
        />
        <img
          style="height: 7.246376811594203vw; width: 7.487922705314009vw"
          :src="igwhite"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
// Imported items
import fbwhite from "../assets/Assets/fbwhite.png";
import igwhite from "../assets/Assets/igwhite.png";

export default {
  data() {
    return {
      // imported items to be used
      fbwhite,
      igwhite,
    };
  },
};
</script>

<style>
</style>