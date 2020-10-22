<template>
  <div>
    <div class="text-center bg-white">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:100px;"
      >
        <div round class="q-pa-md text-white text-h5 text-bold q-pa-lg">
          <b>| {{ view_selected.lot.vehicle_name }} (Details) |</b><br />
          <b>| VIN:: {{ view_selected.lot.vin }} |</b>
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
        <div class="q-pa-md">
          <q-card flat bordered class="bg-grey-3">
            <q-card-section>
              <div class="text-h4 q-mb-xs">
                <strong> VEHICLE DETAILS</strong>
                <q-space />
              </div>
              <div class="text-h5 q-mb-xs text-primary">
                <strong> {{ view_selected.lot.vehicle_name }} </strong>
                <q-space />
              </div>
                   <div class="text-h6">
                 VIN: <b>
                  {{ view_selected.lot.vin }}</b
                >
              </div>
                          <div class="text-h6">
                <i class="fas fa-tachometer-alt"></i> MILEAGE 
                <b>
                  {{ view_selected.lot.odometer_value
                  }}{{ view_selected.lot.odometer_type.toUpperCase() }}</b
                >
              </div>
              <div class="text-h6">
                <i class="fab fa-keycdn"></i>
                START CODE 
                <b>{{ view_selected.lot.start_code.toUpperCase() }}</b>
              </div>
              <div class="text-h6">
                <i class="fas fa-car-crash"> </i> DAMAGE: <b> 
                  {{ view_selected.lot.damage }}</b
                >
              </div>

            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md-4 q-pa-md">
        <q-card bordered class="bg-grey-2 text-primary my-card">
          <q-card-section>
            <div class="text-h6">BID INFORMATION</div>
            <div class="text-h7">
              CURRENT BID
              <span class="text-h6">
                {{
                  new Intl.NumberFormat("us-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(view_selected.lot.current_bid_value)
                }}
              </span>
            </div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <q-card-section>
              <div class="col-12 col-md-4 q-pa-xs">
                Enter Your Maximum Possible Bid: <br />
                <q-input
                  v-model="view_selected.lot.current_bid_value"
                  type="number"
                  align="right"
                  standout
                  prefix="$"
                  suffix="USD"
                />
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["selected_car"],

  data() {
    return {
      view_selected: {},
      slide: 1,
      possible_bid: ""
    };
  },

  methods: {
    load_car_details() {
      this.showLoading();
      this.axios
        .get("https://www.salvagebid.com/rest-api/v2/lots/" + this.selected_car)
        .then(response => {
          this.view_selected = response.data;
        });
    },

    showLoading() {
      this.$q.loading.show({
        message:
          'Getting car details <b>process</b> is in progress...<br/><span class="text-primary">Hang on...</span>'
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
