<style scoped>
/* Scoped Style */
h3 {
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 4.830917874396135vw !important;
  line-height: 5.797101449275362vw !important;
}

.newspanz {
  font-family: Lato-b;
  font-weight: 500;
  font-size: 2.898550724637681vw;
  line-height: 4.3478260869565215vw !important;
  text-align: justify;
}
</style>

<template>
  <div style="margin: 0 0 17.632850241545896vw 0">
    <div style="margin: 0 0 5.314009661835748vw 0">
      <titlev title="Our" orangetitle="Guide" :reverse="true" link="View all">
      </titlev>
      <!-- Title to show -->
    </div>
    <div>
      <v-slide-group
        style="height: 91.30434782608695vw"
        v-model="model"
        active-class="success"
      >
        <!-- Slider Group for the two cards -->
        <v-slide-item v-for="item in items" :key="item.name">
          <div style="margin: 0 0 0 4.1062801932367154vw">
            <v-card
              style="
                margin: 0 0.24154589371980675vw 0 0;
                padding: 4.1062801932367154vw 1.4492753623188406vw;
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3) !important;
                border-radius: 5px !important;
                height: 89.61352657004831vw;
                width: 67.3913043478261vw;
              "
              tile
            >
              <img
                style="padding: 0 0 6.038647342995169vw 0"
                width="100%"
                :src="item.img"
                alt=""
              />
              <!-- Card Main Image -->
              <v-row align="center" justify="center"> </v-row>
              <!-- alignment purposes -->
              <v-card
                outlined
                class="transparent"
                style="
                  padding: 0 1.932367149758454vw 1.2077294685990339vw
                    1.932367149758454vw;
                "
              >
                <!-- text card -->
                <h3 style="color: #f7931e !important">{{ item.title }}</h3>
                <!-- title -->
              </v-card>
              <v-card
                style="padding: 0 0px 0px 1.932367149758454vw"
                outlined
                class="transparent"
              >
                <div class="newspanz">
                  <span>
                    {{ item.subtext }}
                    <!-- sub title -->
                  </span>
                </div>
                <v-card outlined class="transparent" align="right">
                  <span
                    @click="clickcard = !clickcard"
                    :class="clickcard ? 'link' : 'link2'"
                  >
                    <!-- click event to turn the color orange-->
                    Read More</span
                  >
                </v-card>
              </v-card>
            </v-card>

            <div
              style="margin: 0 4.3478260869565215vw 0 0"
              align="center"
            ></div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import Titlev from "../reused/Titlev.vue";
import img8 from "../../assets/Assets/img8.png";
import img9 from "../../assets/Assets/img9.png";
export default {
  components: { Titlev },
  data() {
    return {
      clickcard: true,
      items: [
        {
          img: img8,
          title: "This is the title of the first blog article",
          subtext:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vulputate ac egestas nibh neque tristique hendrerit vitae. Cursus etiam vulputate leo suspendisse tellus risus suspendisse vitae integer. Vitae nisi mi iaculis vel risus elementum lorem aliquam.",
        },
        {
          img: img9,
          title: "This is the title of the second blog article",
          subtext:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vulputate ac egestas nibh neque tristique hendrerit vitae. Cursus etiam vulputate leo suspendisse tellus risus suspendisse vitae integer. Vitae nisi mi iaculis vel risus elementum lorem aliquam.",
        },
      ],
    };
  },
};
</script>

<style>
</style>