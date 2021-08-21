<style scoped>
/* The scoped styles */
h1 {
  font-weight: 300 !important;
}

p {
  font-family: Lato;
}
</style>
<template>
  <div class="startmargin">
    <img :src="img1" class="img1" />
    <div style="margin: 0 0 4.6vw 0">
      <h1>
        <!-- title -->
        Syrgo helps Syrians to receive their
        <span class="orangec">essential documents.</span>
      </h1>
    </div>
    <div style="margin: 5.5vw 33.01642512077295vw 9.176328502415458vw 0">
      <p>
        <!-- text -->
        Let us know what you're looking for and our trusted network of
        experienced lawyers will serve you for the best fees available.
      </p>
    </div>
    <div style="margin: 0 0 9.178743961352657vw 0">
      <v-card
        class="d-flex"
        flat
        style="
          border: 0.36231884057971014vw solid #f7931e;
          box-sizing: border-box;
          border-radius: 24.154589371980677vw;
          height: 11.594202898550725vw;
          padding: 3.3816425120772946vw 4.4685990338164245vw;
          z-index: 8;
        "
      >
        <img style="margin: 0 3.140096618357488vw 0 0" :src="search" />
        <p class="menustyle">{{ selected }}</p>
        <v-spacer></v-spacer>
        <img
          @click="
            (showlist = !showlist),
              showlist
                ? (selected = 'Categories')
                : (selected = 'Documents / Papers')
          "
          style="
            height: 2.898550724637681vw;
            margin: 0.6038647342995169vw 0.4830917874396135vw 0 0;
          "
          :src="!showlist ? downarrow : uparrow"
        />
      </v-card>
      <!-- this card is for the document/papers  -->
      <v-card
        v-if="showlist"
        flat
        z-index="5"
        style="
          animation: conditionalOpen 0.2s;
          top: -4.830917874396135vw;
          padding: 4.830917874396135vw 0 0 0;
          border: 0.36231884057971014vw solid #f7931e;
          box-sizing: border-box;
          border-radius: 0 0 2.4154589371980677vw 2.4154589371980677vw;
        "
      >
        <v-virtual-scroll :items="items" :item-height="65" height="240">
          <!-- Virtual Scroller for the items in the documents -->
          <template v-slot:default="{ item }">
            <v-card v-if="item.showdiv" height="0.24154589371980675vw"></v-card>
            <v-card
              v-bind:color="item.btncolor ? '' : '#f7931e'"
              flat
              tile
              @click="(selected = item.title), (item.btncolor = !item.btncolor)"
              style="height: 14.492753623188406vw"
            >
              <v-list-item
                style="
                  margin: 1.2077294685990339vw 0 1.2077294685990339vw
                    2.4154589371980677vw !important;
                "
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-bind:class="item.btncolor ? 'btnnormal' : 'whitec'"
                    style="
                      font-family: Lato;
                      font-style: normal;
                      font-weight: 600;
                      font-size: 3.864734299516908vw;
                      line-height: 4.5893719806763285vw;
                    "
                    >{{ item.title }}</v-list-item-title
                  >
                </v-list-item-content>

                <v-list-item-action>
                  <img
                    v-bind:src="item.btncolor ? arrowright : arrowrightwhite"
                    style="height: 4.5893719806763285vw"
                  />
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </template>
        </v-virtual-scroll>
      </v-card>
    </div>
    <div>
      <v-card
        style="margin: 0 0 0 0.4830917874396135vw"
        outlined
        class="transparent d-flex align-center"
      >
        <h4>Documents:</h4>
        <v-spacer></v-spacer>
        <v-btn depressed class="newbtnstyle">Birth Certificate</v-btn>
        <v-spacer></v-spacer>
        <v-btn depressed class="newbtnstyle">Lorem Ipsum</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
// importing components
import img1 from "../../assets/Assets/img1.png";
import search from "../../assets/Assets/search.png";
import downarrow from "../../assets/Assets/downarrow.png";
import uparrow from "../../assets/Assets/uparrow.png";
import arrowright from "../../assets/Assets/arrow-right.png";
import arrowrightwhite from "../../assets/Assets/arrow-right-white.png";

export default {
  data() {
    // components that are going to be used
    return {
      downarrow,
      uparrow,
      arrowrightwhite,
      arrowright,
      showlist: false,
      img1,
      search,
      selected: "Document / Papers",
      items: [
        { title: "Birth Certificate", showdiv: false, btncolor: true },
        { title: "Document 2", showdiv: true, btncolor: true },
        { title: "Document 3", showdiv: true, btncolor: true },
        { title: "Document 4", showdiv: true, btncolor: true },
        { title: "Document 5", showdiv: true, btncolor: true },
      ],
    };
  },
};
</script>

<style>
/* Styles to be used */
.startmargin {
  margin: 0 4.3478260869565215vw 0 4.1062801932367154vw;
}

.orangec {
  color: #f7931e !important;
}
.whitec {
  color: white !important;
}

.img1 {
  position: absolute !important;
  left: 73.44127047vw;
  top: 22.35vw;
  height: 23.57004830917874vw;
  width: 22.27294685990338vw;
}

.menustyle {
  font-family: Lato;
  font-style: normal;
  font-weight: 200 !important;
  font-size: 3.864734299516908vw;
  color: #554f49;
}

.newbtnstyle {
  text-transform: none !important;
  width: 31.642512077294686vw !important;
  height: 7.729468599033816vw !important;
  background: #f7931e !important;
  border-radius: 24.154589371980677vw !important;
  padding: 1.932367149758454vw !important;
  letter-spacing: 0.036231884057971016vw !important;
  font-family: Lato !important;
  font-style: normal !important;
  font-size: 2.898550724637681vw !important;
  color: white !important;
}

@keyframes conditionalOpen {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>