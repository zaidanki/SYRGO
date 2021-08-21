
<style scoped>
/* Scoped Style */
h4 {
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: bolder !important;
  color: #2c1c09 !important;
}
</style>

<template>
  <div style="margin: 0 0 19.082125603864732vw 0">
    <div style="margin: 0 0 5.314009661835748vw 0">
      <titlev
        :reverse="true"
        title="Our Top"
        link="View All"
        orangetitle="Lawyers"
      ></titlev>
      <!-- Title -->
    </div>
    <div>
      <v-slide-group v-model="model" class="pl-4" active-class="success">
        <!-- Slider for images -->
        <v-slide-item v-for="item in items" :key="item.name">
          <!-- Looping the items -->
          <div>
            <v-card
              outlined
              class="transparent"
              style="
                margin: 0 4.3478260869565215vw 0 0;
                height: 48.309178743961354vw;
                width: 31.642512077294686vw;
              "
              tile
            >
              <!-- main card -->
              <img style="height: 48.06763285024155vw" :src="item.img" alt="" />
              <!-- image -->
              <v-row align="center" justify="center"> </v-row>
            </v-card>
            <v-card
              outlined
              class="transparent"
              style="margin: 2.898550724637681vw 4.3478260869565215vw 0 0"
              align="center"
            >
              <h4>{{ item.name }}</h4>
              <!-- name -->
            </v-card>
            <div style="margin: 0 4.3478260869565215vw 0 0" align="center">
              <img style="width: 5.072463768115942vw" :src="line" />
            </div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
// All needed impors
import Titlev from "../reused/Titlev.vue";
import img6 from "../../assets/Assets/img6.png";
import img7 from "../../assets/Assets/img7.png";
import line from "../../assets/Assets/line.png";
export default {
  components: { Titlev },
  data() {
    return {
      // all items that will be used in this component
      img6,
      line,
      items: [
        { name: "Ralph Edwards", img: img6 },
        { name: "Jane Cooper", img: img7 },
        { name: "Ralph Edwards", img: img6 },
        { name: "Jane Cooper", img: img7 },
      ],
    };
  },
};
</script>

<style>
</style>