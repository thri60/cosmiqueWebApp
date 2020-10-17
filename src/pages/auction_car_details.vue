<template>
  <div>
    <div class="q-pa-md text-center bg-white">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:150px;"
      >
        <div round class="q-pa-md text-primary text-h5 text-bold q-pa-lg">
          <b>| AUCTION Cars For Sale (Bid Online) |</b>
        </div>
      </q-img>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="q-pa-md">
          <q-carousel
            padding
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            autoplay
            v-model="slide"
            thumbnails
            infinite
            arrows
            spinner-color="primary"
            spinner-size="82px"
            class="card1"
          >
            <q-carousel-slide
              v-for="image in view_selected.lot.images"
              :key="image"
              :name="image"
              :img-src="image"
              style="height: 100%"
              transitions="rotate"
              spinner-color="primary"
            >
              <template v-slot:loading>
                <q-spinner-gears color="white" />
              </template>
            </q-carousel-slide>
          </q-carousel>
          <hr />
        </div>
      </div>
      <div class="col-12 col-md-4 q-pa-md">
        <div>
            <b>{{ view_selected.lot.vehicle_name }}</b>
        </div>
        <div>
            <b>Make: {{ view_selected.lot.make }}</b>
        </div>
        <div>
            <b>Model: {{ view_selected.lot.model }}</b>
        </div>
        <div>
            <b>status: {{ view_selected.lot.damage }}</b>
        </div>
        <div>
            <b>start code: {{ view_selected.lot.start_code }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { response } from "@websanova/vue-auth/drivers/auth/bearer";

export default {
  props: ["selected_car"],

  data() {
    return {
      view_selected: {},
      slide: 1
    };
  },

  methods: {
    load_car_details() {
      this.showLoading();
      axios
        .get("https://www.salvagebid.com/rest-api/v2/lots/" + this.selected_car)
        .then(response => {
          this.view_selected = response.data;
        });
    },

    showLoading() {
      this.$q.loading.show({
        message:
          'Some important <b>process</b> is in progress.<br/><span class="text-primary">Hang on...</span>'
      });

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 5000);
    }
  },

  mounted() {
    this.load_car_details();
  },

  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  }
};
</script>
<style lang="sass" scoped>
 .my-card1
    width: 100%
    max-width: 70%
    background-color: white
    padding: 20px

</style>
