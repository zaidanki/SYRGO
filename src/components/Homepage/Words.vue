<style scoped>
/* Scoped CSS that will only affect the elements in this components*/
.v-virtual-scroll__container {
  background: #f2f2f2 !important;
}

.primaryspan {
  font-family: Lato;
  font-style: normal;
  line-height: 4.5893719806763285vw;
  font-weight: 600;
}

.secondaryspan {
  font-family: Lato-i;
  font-weight: 500;
  font-size: 2.898550724637681vw;
  line-height: 7.487922705314009vw;
  text-align: center;
  color: #f7931e;
}
</style>

<template>
  <div style="margin: 0 0 19.565217391304348vw 0">
    <div style="margin: 0 0 4.3478260869565215vw 0">
      <titlev orangetitle="Words" title="From Clients"> </titlev>
      <!-- title from the reused components -->
    </div>
    <v-card flat tile color="#f2f2f2 ">
      <v-virtual-scroll :items="items" height="250" item-height="178">
        <!-- Virtual Scroller for the vertical scroll of the testomonials -->
        <template v-slot:default="{ item }">
          <v-row :key="item" no-gutters>
            <v-card
              color="#f2f2f2 "
              tile
              width="100%"
              v-if="item.first"
              style="height: 6.763285024154589vw"
            >
              <!-- Card for first element to make sure that there is space before the testomonials to match the design -->
            </v-card>
            <v-card
              class="d-flex text-center"
              style="
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                padding: 4.3478260869565215vw 10.869565217391305vw 0
                  10.869565217391305vw;
                height: 28.019323671497588vw;
              "
              color="white"
              width="100%"
              tile
            >
              <span class="primaryspan">
                {{ item.title }}
                <!-- the testomonial -->
                <br />

                <span class="secondaryspan">
                  {{ item.name }}
                  <!-- name -->
                </span>
              </span>
            </v-card>
          </v-row>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>

<script>
import Titlev from "../reused/Titlev.vue";
export default {
  // Reused component
  components: { Titlev },
  data() {
    return {
      items: [
        // The items used for testomonials
        {
          title:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel egestas etiam orci pulvinar rutrum viverra.”",
          first: true,
          name: "Leslie Alexander",
        },
        {
          title:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit, turpis enim at eget.”",
          name: "Kathryn Murphy",
        },
        {
          title:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel egestas etiam orci pulvinar rutrum viverra.”",
          name: "Courtney Henry",
        },
      ],
    };
  },
};
</script>

<style>
</style>