<style scoped>
/*  Scoped Style for this component */
p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3.864734299516908vw;
  line-height: 4.5893719806763285vw;
  text-align: justify;
}

h1 {
  line-height: 9.420289855072465vw !important;
  color: #ffffff !important;
}
</style>

<template>
  <div style="margin: 0 0 11.352657004830919vw 0">
    <div style="margin: 0 0 7.729468599033816vw 0">
      <titlev link="Learn More" orangetitle="SyrGo" title="Why" :reverse="true">
        <!-- Title from reuses components -->
      </titlev>
    </div>
    <div
      style="
        margin: 0 4.2270531400966185vw 7.729468599033816vw 4.2270531400966185vw;
      "
    >
      <p>
        <!-- Text -->
        SyrGo.com is an online marketplace of trusted and certified lawyers in
        Syria who have a history of getting and issuing civil and official
        Syrian documents. The platform aims to facilitate the process of
        accessing legal and civil documentation for Syrians, anywhere they are
        in the world.
      </p>
    </div>
    <div>
      <v-img
        style="
          padding: 6.038647342995169vw 4.3478260869565215vw 0
            4.5893719806763285vw;
          height: 40.33816425120773vw;
        "
        :src="img11"
      >
        <!-- img -->
        <v-card outlined class="transparent">
          <h1>Choose From A Large Network of Certified Lawyers</h1>
          <!-- Text inside image -->
        </v-card>
      </v-img>
      <v-card
        color="#F7931E"
        flat
        tile
        style="height: 1.932367149758454vw"
      ></v-card>
    </div>
  </div>
</template>

<script>
import Titlev from "../reused/Titlev.vue";
import img11 from "../../assets/Assets/img11.png";
export default {
  components: { Titlev },

  data() {
    return {
      img11,
    };
  },
};
</script>

<style>
</style>