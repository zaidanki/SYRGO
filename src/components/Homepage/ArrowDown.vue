<template>
  <div>
    <div
      style="
        margin: 13.949275362318842vw 0 16.507246376811597vw 0;
        height: 6.980676328502415vw;
      "
      align="center"
    >
      <img
        @click="$vuetify.goTo($refs.actions, options)"
        style="height: 6.980676328502415vw"
        :src="bigarrowdown"
        alt=""
      />
      <!-- arrow image with the function to scroll down on click to benegits offered -->
    </div>
    <div>
      <div style="margin: 0 0 10.38647342995169vw 0" ref="actions">
        <titlev
          orangetitle="Benefits"
          link="Learn More"
          title="Offered"
        ></titlev>
        <!-- title -->
      </div>
      <v-card
        style="
          padding: 0 4.830917874396135vw 0 4.328502415458938vw;
          margin: 0 0 12.077294685990339vw 0;
        "
        outlined
        class="d-flex transparent"
      >
        <v-card
          style="margin: 0 2.657004830917874vw 0 0"
          class="transparent"
          outlined
        >
          <!-- the offered benefits -->
          <img style="width: 9.66183574879227vw" :src="img2" />
        </v-card>
        <v-card outlined class="transparent">
          <v-card
            class="transparent"
            outlined
            style="margin: 0 0 1.4492753623188406vw 0"
          >
            <h3 class="benstyle">Trustworthy</h3>
          </v-card>

          <span class="bpstylespaced">
            We work with the best lawyers in Syria,
          </span>
          <span class="bpstyle">
            making our services trustworthy and reliable.
          </span>
        </v-card>
      </v-card>
      <v-card
        style="
          padding: 0 4.830917874396135vw 0 4.328502415458938vw;
          margin: 0 0 12.077294685990339vw 0;
        "
        outlined
        class="d-flex transparent"
      >
        <v-card
          style="margin: 0 2.657004830917874vw 0 0"
          class="transparent"
          outlined
        >
          <img style="width: 9.66183574879227vw" :src="img3" />
        </v-card>
        <v-card outlined class="transparent">
          <v-card
            class="transparent"
            outlined
            style="margin: 0 0 1.4492753623188406vw 0"
          >
            <h3 class="benstyle">Affordable</h3>
          </v-card>

          <span class="bpstylespaced2">
            We offer seamless and affordable services,
          </span>
          <span class="bpstyle2">
            making it easy for you to get the documents you need.
          </span>
        </v-card>
      </v-card>
      <v-card
        style="
          padding: 0 4.830917874396135vw 0 4.328502415458938vw;
          margin: 0 0 17.874396135265698vw 0;
        "
        outlined
        class="d-flex transparent"
      >
        <v-card
          style="margin: 0 2.657004830917874vw 0 0"
          class="transparent"
          outlined
        >
          <img style="width: 9.66183574879227vw" :src="img4" />
        </v-card>
        <v-card outlined class="transparent">
          <v-card
            class="transparent"
            outlined
            style="margin: 0 0 1.4492753623188406vw 0"
          >
            <h3 class="benstyle">Fast & Accessible</h3>
          </v-card>

          <span class="bpstyle2">
            Submit your requests, receive the best offers, and get your
            paperwork wherever you are in the world.
          </span>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
// all imported components that are needed
import bigarrowdown from "../../assets/Assets/bigarrowdown.png";
import Titlev from "../reused/Titlev.vue";
import img2 from "../../assets/Assets/img2.png";
import img3 from "../../assets/Assets/img3.png";
import img4 from "../../assets/Assets/img4.png";

export default {
  components: { Titlev },
  data() {
    // components that are going to be used
    return {
      bigarrowdown,
      img2,
      img3,
      img4,
      options: {
        duration: 1000,
        offset: 70,
        easing: "easeInOutCubic",
      },
    };
  },
};
</script>

<style>
/* Styles */
.link {
  font-family: Lato;
  font-style: normal;
  font-size: 2.898550724637681vw;
  text-decoration-line: underline;
  color: #8f8b86;
}

.link2 {
  font-family: Lato;
  font-style: normal;
  font-size: 2.898550724637681vw;
  text-decoration-line: underline;
  color: #f7931e;
}

.benstyle {
  color: #554f49 !important;
}

.bpstyle {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3.864734299516908vw;
  line-height: 4.5893719806763285vw;
  text-align: justify;
  color: #554f49;
  letter-spacing: -0.12077294685990338vw;
}

.bpstyle2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3.864734299516908vw;
  line-height: 4.5893719806763285vw;
  text-align: justify;
  color: #554f49;
  letter-spacing: 0.02415458937198068vw;
}

.bpstylespaced {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3.864734299516908vw;
  line-height: 4.5893719806763285vw;
  text-align: justify;
  color: #554f49;
  word-spacing: 1.2077294685990339vw;
}

.bpstylespaced2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3.864734299516908vw;
  line-height: 4.5893719806763285vw;
  text-align: justify;
  color: #554f49;
  word-spacing: 0.4830917874396135vw;
}
</style>