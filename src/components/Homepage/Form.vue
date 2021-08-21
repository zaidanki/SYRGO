<style scoped>
.v-select-list {
  text-align: center;
  border: 1.5px solid #f7931e !important;
}
</style>

<template>
  <v-card class="cardform" light tile>
    <div class="formtitle d-flex">
      <h2>
        Got Inquiries? Our <span style="color: #f7931e">Lawyers</span> are Here
        to
        <span style="color: #f7931e">Support You!</span>
      </h2>
      <v-img
        @click="clickbtn"
        style="top: -30px"
        contain
        width="31px"
        :src="img10"
      ></v-img>
    </div>

    <div class="forminput">
      <form action="">
        <v-card class="formborder d-flex justify-left align-center" flat>
          <input required type="text" v-model="fname" placeholder="Full Name" />
        </v-card>
        <v-card class="formborder d-flex justify-left align-center" flat>
          <input type="text" v-model="fname" placeholder="Email (optional)" />
        </v-card>
        <v-card class="formborder d-flex justify-left align-center" flat>
          <input type="text" v-model="fname" placeholder="Whatsapp Number" />
        </v-card>
        <v-card
          style="padding-right: 2.4154589371980677vw"
          class="formborder d-flex justify-left align-center"
          flat
        >
          <v-select
            :items="items"
            :menu-props="{ offsetY: true, class: 'center' }"
            class="custom"
            placeholder="City"
          >
            <template v-slot:append>
              <v-icon style="color: #8f8b86 !important"
                >mdi-chevron-down</v-icon
              >
            </template>
            City</v-select
          >
        </v-card>
        <v-card
          class="formborder"
          style="height: 33.86231884057971vw !important"
          flat
        >
          <input type="text" v-model="fname" placeholder="Inquiries" />
        </v-card>
        <v-card class="transparent" outlined align="center">
          <v-btn
            @click="btnisclicked = !btnisclicked"
            v-bind:class="btnisclicked ? 'btnnoclick' : 'btnclicked'"
            depressed
            v-bind:color="btnisclicked ? '#f7931e' : ''"
            >Submit</v-btn
          >
        </v-card>
      </form>
    </div>
  </v-card>
</template>

<script>
import img10 from "../../assets/Assets/img10.png";

export default {
  name: "Form",
  props: ["clickbtn"],
  data() {
    return {
      img10,
      btnisclicked: true,
      items: [
        { text: "Damascus", divider: false, value: "Damascus" },
        { divider: true },
        { divider: true },

        { text: "Aleppo", divider: false },
        { divider: true },
        { divider: true },

        { text: "Other", divider: false },
      ],
    };
  },
};
</script>

<style>
.cardform {
  height: 149.5169082125604vw;
  width: 100vw;
  padding: 0 0 24px 0;
}

.formtitle {
  padding: 15px 21px 18px;
}

.forminput {
  padding: 0 18px 0 18px;
}

.formborder {
  border-radius: 1.2077294685990339vw;
  border: 1.5px solid #f7931e !important;
  box-sizing: border-box;
  padding: 0 0 0 2.4154589371980677vw;
  margin: 0 0 3.864734299516908vw 0;
  height: 11.594202898550725vw;
}

input {
  font-size: 3.3816425120772946vw !important;
  font-family: Lato !important;
  font-style: normal !important;
  font-weight: normal !important;
}

.btnnoclick {
  text-transform: none !important;
  letter-spacing: 0.036231884057971016vw !important;
  color: white !important;
  font-size: 3.864734299516908vw !important;
  font-family: Lato !important;
  font-style: normal !important;
  width: 134px !important;
  height: 46px !important;
  border-radius: 100px !important;
}

.btnclicked {
  text-transform: none !important;
  border: 1px solid #554f49 !important;
  box-sizing: border-box !important;
  letter-spacing: 0.036231884057971016vw !important;
  color: #f7931e !important;
  font-size: 3.864734299516908vw !important;
  font-family: Lato !important;
  font-style: normal !important;
  width: 134px !important;
  height: 46px !important;
  border-radius: 100px !important;
}

.custom.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}

.v-list-item__title {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}

.v-text-field > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 0% !important;
}
</style>
