<template>
  <div>
    <v-toolbar
      style="
        margin: 0 0 7.246376811594203vw 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 1vw 4.3478260869565215vw 0 0;
        position: fixed;
        z-index: 10;
        height: 15.458937198067632vw;
      "
      width="100vw"
    >
      <!-- Toolbar Element with options that suit the design -->
      <div align="left">
        <v-img
          contain
          style="
            height: 16.666666666666664vw;
            width: 37.92270531400966vw !important;
            margin: 0 10.144927536231885vw 0 0;
          "
          :src="imgs.logo"
        >
        </v-img>
      </div>
      <div class="">
        <v-btn
          depressed
          @mousedown="truefalse.style = !truefalse.style"
          v-bind:class="truefalse.style ? styles.btnstyle : styles.btnclick"
          style="
            top: 0.4830917874396135vw;
            height: 6.038647342995169vw !important;
            width: 24.879227053140095vw !important;
            min-width: 0 !important;
          "
          >Talk to a Lawyer</v-btn
        >
        <button
          @mousedown="truefalse.arstyle = !truefalse.arstyle"
          style="height: 6.038647342995169vw; width: 10.869565217391305vw"
          v-bind:class="truefalse.arstyle ? styles.arbtn : styles.arbtnclick"
        >
          عربي
        </button>
      </div>
      <img
        @click="truefalse.drawer = !truefalse.drawer"
        style="
          top: 0.4830917874396135vw;
          height: 4.5893719806763285vw;
          margin: 1.2077294685990339vw 0 0 0 !important;
        "
        :src="imgs.imgtb"
      />
    </v-toolbar>
    <div style="margin: 22.705314009661837vw 0 0 0"></div>
    <v-navigation-drawer
      v-bind:height="
        truefalse.menuheight ? '115.70048309178745vw' : '198.55072463768116vw'
      "
      style="width: 100vw; z-index: 11"
      v-model="truefalse.drawer"
      right
      fixed
      temporary
    >
      <v-list-item style="padding: 0; margin: 0 0 2.898550724637681vw 0">
        <v-toolbar
          class="pt-1"
          style="
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 0 4.3478260869565215vw 0 0;
            height: 15.458937198067632vw;
          "
          width="100vw"
          tile
        >
          <div align="left">
            <v-img
              contain
              style="
                height: 16.666666666666664vw;
                width: 37.92270531400966vw !important;
                margin: 0 10.144927536231885vw 0 0;
              "
              :src="imgs.logo"
            >
            </v-img>
          </div>
          <v-spacer></v-spacer>
          <img
            @click="truefalse.drawer = !truefalse.drawer"
            :src="imgs.img10"
            style="
              width: 5.859vw;
              margin: 1.2077294685990339vw 0.7246376811594203vw 0 0;
            "
          />
        </v-toolbar>
      </v-list-item>
      <v-list-group
        @click="truefalse.menuheight = !truefalse.menuheight"
        :value="false"
      >
        <template v-slot:activator>
          <v-list-item-title style="margin: 0 0 0 1.570048309178744vw"
            ><h3>Get a Document</h3></v-list-item-title
          >
        </template>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <div style="margin: 0" v-for="item in documentitems" :key="item.title">
          <v-card
            @click="item.style = !item.style"
            flat
            v-bind:class="item.style ? styles.menustyle : styles.menustyleclick"
            tile
            style="
              padding: 3.5024154589371985vw 3.140096618357488vw
                3.5024154589371985vw 5.314009661835748vw;
            "
          >
            <v-card outlined class="ml-3 transparent">
              <h4
                v-bind:class="item.style ? styles.menustyle : styles.fontcolor"
              >
                {{ item.title }}
              </h4>
            </v-card>
            <v-spacer></v-spacer
            ><img
              class="mr-3"
              style="width: 3.6231884057971016vw; height: 4.5893719806763285vw"
              v-bind:src="item.style ? imgs.arrowright : imgs.arrowrightwhite"
          /></v-card>
        </div>
      </v-list-group>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <div style="width: 100vh; margin: 0 -4.830917874396135vw">
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-list-item-content
              style="
                margin: 0 4.830917874396135vw;
                padding: 4.4vw 3vw 4.4vw 2vw;
              "
            >
              <v-list-item-title
                ><h3>{{ item.title }}</h3></v-list-item-title
              >
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list>
      <v-card
        outlined
        class="d-flex transparent"
        style="margin: 5vw 0 6.038647342995169vw 0"
      >
        <v-card
          width="9.9vw"
          outlined
          class="transparent"
          style="margin: 0 5.555555555555555vw 0 5.314009661835748vw"
        >
          <v-img contain height="9.66183574879227vw" :src="imgs.fb"></v-img>
        </v-card>
        <v-card outlined class="transparent" width="9.9vw">
          <v-img contain height="9.66183574879227vw" :src="imgs.ig"></v-img>
        </v-card>
      </v-card>
    </v-navigation-drawer>
    <v-overlay z-index="15" :value="!truefalse.style">
      <Form :clickbtn="btnclick" />
    </v-overlay>
  </div>
</template>

<script>
import Form from "./Homepage/Form.vue";
import logo from "../assets/logo.png";
import fb from "../assets/Assets/fb.png";
import ig from "../assets/Assets/IG.png";
import imgtb from "../assets/Assets/img-tb.png";
import img10 from "../assets/Assets/img10.png";
import arrowright from "../assets/Assets/arrow-right.png";
import arrowrightwhite from "../assets/Assets/arrow-right-white.png";

export default {
  name: "Toolbar",
  components: {
    Form, //This is activated once the "Talk to a Lawyer button is pressed"
  },
  data() {
    return {
      //This Contains Images that are going to be used through out the Toolbar element
      imgs: {
        logo, // Logo Img
        imgtb, // toolbar (hamburger menu img)
        arrowrightwhite, // White Arrow
        arrowright, // Orange Arrow
        img10, // X Img
        fb, // fb image black
        ig, // instagram pic black
      },
      truefalse: {
        // For true/false Statements
        drawer: false,
        style: true,
        arstyle: false,
        menuheight: true,
        overlay: false,
      },
      styles: {
        // For Styling
        btnstyle: "btnstyle ",
        btnclick: "btnclick ",
        arbtn: "ar arbtnclick",
        arbtnclick: "arbtn ar",
        menustyle: "d-flex menunormal",
        menustyleclick: "d-flex menuclick",
        fontcolor: "fcolor",
      },

      items: [
        // Repeated Items for looping
        { title: "Our Trusted Lawyers" },
        { title: "Why SyrGo" },
        { title: "Our Guide" },
        { title: "FAQ" },
      ],
      documentitems: [
        // Repeated Items for looping
        { title: "Birth Certificate", style: true },
        { title: "Lorem Ipsum", style: true },
        { title: "Lorem Ipsum", style: true },
        { title: "Lorem Ipsum", style: true },
        { title: "Lorem Ipsum", style: true },
        { title: "Lorem Ipsum", style: true },
        { title: "Lorem Ipsum", style: true },
      ],
    };
  },
  methods: {
    btnclick() {
      this.truefalse.style = true;
    },
  },
};
</script>

<style>
.v-toolbar__content {
  padding: 0.966183574879227vw 0vw !important;
}

.btnstyle {
  font-family: Lato !important;
  color: white !important;
  text-transform: none !important;
  font-size: 2.956vw !important;
  letter-spacing: 0.036231884057971016vw !important;
  border-radius: 24.154589371980677vw !important;
  padding: 0 0 0.4830917874396135vw 0 !important;
  background-color: #f7931e !important;
}

.btnclick {
  font-family: Lato !important;
  color: black !important;
  text-transform: none !important;
  font-size: 2.9468599033816423vw !important;
  letter-spacing: 0.036231884057971016vw !important;
  border-radius: 24.154589371980677vw !important;
  padding: 0 0 0.4830917874396135vw 0 !important;
  background-color: white !important;
  border: 0.24154589371980675vw solid #f7931e !important;
  box-sizing: border-box !important;
}

.arbtn {
  border-radius: 24.154589371980677vw !important;
  width: 10.869565217391305vw !important;
  height: 6.038647342995169vw;
  font-size: 3.3816425120772946vw;
  justify-items: center;
  border: 0.24154589371980675vw solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin: 1.2077294685990339vw 2.898550724637681vw 0 1.4492753623188406vw;
  color: #f7931e;
  padding: 0 0 0.4830917874396135vw 0;
}

.arbtnclick {
  border-radius: 24.154589371980677vw !important;
  width: 10.869565217391305vw !important;
  height: 6.038647342995169vw;
  font-size: 3.3816425120772946vw;
  justify-items: center;
  border: 0.24154589371980675vw solid #ffe7ca;
  box-sizing: border-box;
  margin: 1.2077294685990339vw 2.898550724637681vw 0 1.4492753623188406vw;
  color: white;
  background-color: #f7931e;
  padding: 0 0 0.4830917874396135vw 0;
}

.mdi-chevron-down {
  font-size: 9.66183574879227vw !important;
  color: black !important;
}

.menuclick {
  background: #554f49 !important;
  color: white !important;
}

.fcolor {
  color: white !important;
}

.menunormal {
  color: #554f49 !important;
}
</style>