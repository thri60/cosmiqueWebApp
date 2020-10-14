<template>
  <div class="q-pa-md">
    <div class="q-pa-md row justify-center items-start q-gutter-md">
      <div class="col-12 col-md-8">
        <q-card class="my-card q-pa-md" flat bordered v-for="car in data" :key="car.id">
          <q-card-section horizontal>
              <q-img
                :src="car.images[0]"
                @click="selected(car.id)"
                v-ripple
                spinner-color="primary"
                transitions= 'rotate'
                style="height: 250px; width: 300px"
                class="cursor-pointer relative-position">
                <template v-slot:loading>
                  <q-spinner-gears color="white" />
                </template>
              </q-img>
              <q-card-section>
                <div class="text-subtitle2">
                  <strong class="text-h6"> {{ car.vehicle_name }} </strong>
                </div>
              </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
          <q-input square outlined  label="Square outlined" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { QSpinnerGears } from 'quasar'


export default {
  data() {
    return {
      data: [],
    }
  },

  methods: {
    loading_cars() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=1&per_page=26&type=car&make=*&model=*&search_id=&search_query=&year_from=2008&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=normal+wear+%26+tear&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
        )
        .then(response => {
          this.data = response.data.lots;
        });
    },

    showLoading () {
      this.$q.loading.show({
        message: 'First message. Gonna change it in 3 seconds...'
      })

      this.timer = setTimeout(() => {
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          messageColor: 'black',
          backgroundColor: 'yellow',
          message: 'Updated message'
        })

        this.timer = setTimeout(() => {
          this.$q.loading.hide()
          this.timer = void 0
        }, 2000)
      }, 2000)
    }
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },

  mounted() {
    this.loading_cars();
    this.showLoading();
  }
}
</script>
