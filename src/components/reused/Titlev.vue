<style scoped>
h2 {
  font-style: normal;
  font-weight: 500;
}
</style>

<template>
  <v-card
    style="padding: 0 4.1062801932367154vw"
    outlined
    class="d-flex align-center transparent"
  >
    <h2 v-if="!reverse">
      <span style="color: #f7931e">{{ orangetitle }}</span> {{ title }}
    </h2>
    <h2 v-if="reverse">
      {{ title }} <span style="color: #f7931e">{{ orangetitle }}</span>
    </h2>
    <v-spacer></v-spacer>
    <span
      @click="learntrue = !learntrue"
      v-bind:class="learntrue ? 'link' : 'link2'"
    >
      {{ link }}
    </span>
  </v-card>
</template>

<script>
export default {
  props: ["orangetitle", "title", "link", "reverse"],
  data() {
    return {
      learntrue: true,
    };
  },
};
</script>

<style>
</style>