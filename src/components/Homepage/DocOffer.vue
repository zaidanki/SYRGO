<style scoped>
/* The scoped styles */
.h4class {
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 3.6231884057971016vw !important;
  line-height: 4.3478260869565215vw !important;
  color: #554f49 !important;
}

.h4class2 {
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 3.6231884057971016vw !important;
  line-height: 4.3478260869565215vw !important;
  color: white !important;
}

.normalcard {
  padding: 0 5.314009661835748vw 0 2.4154589371980677vw;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2) !important;
  border-radius: 5px !important;
}

.clickedcard {
  padding: 0 5.314009661835748vw 0 2.4154589371980677vw;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2) !important;
  border-radius: 5px !important;
  background-color: #f7931e;
}
</style>

<template>
  <div style="margin: 0 0 18.115942028985508vw 0">
    <div style="margin: 0 0 6.763285024154589vw 0">
      <titlev orangetitle="Documents" link="View All" title="Offered"> </titlev>
      <!-- scoped style -->
    </div>
    <div>
      <v-row style="padding: 0 4.3478260869565215vw" align="center">
        <!-- row for the documents that are offered -->
        <v-col
          style="
            padding: 1.2077294685990339vw 2.898550724637681vw
              1.2077294685990339vw 2.898550724637681vw;
          "
          cols="6"
          align="center"
          v-for="item in items"
          :key="item.title"
        >
          <!-- Looping the documents -->
          <v-card
            @click="item.clicked = !item.clicked"
            style="height: 13.526570048309178vw"
            v-bind:class="
              item.clicked
                ? 'd-flex align-center normalcard'
                : 'd-flex align-center clickedcard'
            "
          >
            <v-card class="transparent" outlined align="left" height="35">
              <h4
                v-bind:class="item.clicked ? 'h4class' : 'h4class2'"
                v-html="item.title"
              ></h4>
              <!-- based on click action, the document color is going to change -->
            </v-card>
            <v-spacer></v-spacer>

            <img
              style="height: 3.2077294685990334vw"
              v-bind:src="item.clicked ? arrowright : arrowrightwhite"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// imported docs
import Titlev from "../reused/Titlev.vue";
import arrowright from "../../assets/Assets/arrow-right.png";
import arrowrightwhite from "../../assets/Assets/arrow-right-white.png";

export default {
  // components
  name: "DocOffer",
  components: { Titlev },
  data() {
    return {
      arrowright,
      arrowrightwhite,
      items: [
        { title: "Family <br/> Statement", clicked: true },
        { title: "Marriage <br/> Certificate", clicked: true },
        { title: "Family <br/> Record Book", clicked: true },
        { title: "Non-Criminal <br/> Record", clicked: true },
        { title: "Birth <br/> Certificate", clicked: true },
        { title: "Renew Driving <br/> Licence", clicked: true },
      ],
    };
  },
};
</script>

<style>
</style>