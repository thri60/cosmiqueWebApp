<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-card class="q-pa-md text-center bg-grey-9">
        <q-card-section class="bg-primary text-white">
          <span><b>Cosmique Autos (Cars For Sale - Bid Online)</b></span>
        </q-card-section>
        <q-separator />
      </q-card>
    </div>
    <div class="q-pa-md row justify-center items-start q-gutter-md">
      <div class="col-12 col-md-8 gt-sm">
        <q-inner-loading :showing="visible">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData" >
            <q-card
              class="my-card q-pa-md"
              flat
              bordered
              v-for="car in data"
              :key="car.id">
              <q-card-section horizontal>
                <q-img
                  :src="car.images[0]"
                  @click="selected(car.id)"
                  v-ripple
                  spinner-color="primary"
                  transitions="rotate"
                  style="height: 200px; width: 300px"
                  class="cursor-pointer relative-position"
                >
                  <template v-slot:loading>
                    <q-spinner-gears color="white" />
                  </template>
                </q-img>
                <q-card-section>
                  <div class="col-12 col-md-5 q-pa-xs">
                    <b class="text-h4">{{ car.vehicle_name }}</b>
                  </div>
                  <div class="col-12 col-md-4 q-pa-xs">
                    <i class="fas fa-tachometer-alt"></i> MILEAGE:
                    <b>
                      {{ new Intl.NumberFormat().format(car.odometer_value) }}
                      {{ car.odometer_type.toUpperCase() }}
                    </b>
                  </div>
                  <div class="col-12 col-md-4 q-pa-xs">
                    <i class="fa fa-cog"></i> DAMAGE:
                    <b>
                      {{ car.damage.toUpperCase() }}
                    </b>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </transition>
      </div>
      <div class="lt-md">
        <br />
        <q-card bordered class="my-card" v-for="car in data" :key="car.id">
          <q-img :src="car.images[0]" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col ellipsis">
                <b> {{ car.vehicle_name }}</b>
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              <i class="fas fa-tachometer-alt"></i> MILEAGE:
              <b>
                {{ new Intl.NumberFormat().format(car.odometer_value) }}
                {{ car.odometer_type.toUpperCase() }}
              </b>
            </div>
            <div class="text-subtitle1">
              <i class="fa fa-cog"></i> DAMAGE:
              <b>
                {{ car.damage.toUpperCase() }}
              </b>
            </div>
            <div class="text-subtitle1">
              <i class="fab fa-keycdn"></i> START CODE:
              <b>{{ car.start_code.toUpperCase() }}</b>
            </div>
            <div class="text-subtitle1">
              <i class="fa fa-calendar"></i> SALE DATE:
              <b>{{ car.sale_date }}</b>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="bookmark" />
            Current Bid:
            <strong>
              {{
                new Intl.NumberFormat("us-US", {
                  style: "currency",
                  currency: "USD"
                }).format(car.current_bid_value)
              }}</strong
            >
            <q-btn
              class="full-width"
              rounded
              color="yellow-10"
              text-color="white"
              size="sm"
            >
              <b>Bid Now</b>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div>
        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="current"
            :max="5"
            @click="pagination"
          >
          </q-pagination>
        </div>
      </div>
      <div class="col-12 col-md-3 q-pa-md">
        <q-card class="q-pa-md text-center bg-grey-5">
          <q-card-section class="bg-white text-primary">
            <q-select
              rounded
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Any Make"
              class="q-pa-md"
            />
            <q-select
              rounded
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Any Model"
              class="q-pa-md"
            />
            <q-select
              rounded
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Vehicle Status"
              class="q-pa-md"
            />
            <q-select
              rounded
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Min Year"
              class="q-pa-md"
            />
            <q-select
              rounded
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Max Year"
              class="q-pa-md"
            />
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      visible: false,
      showSimulatedReturnData: false,
      form: {},
      makeOptions: [],
      current: 1
    };
  },

  methods: {
    loading_cars() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page="+ this.current + "&per_page=10&type=car&make=*&model=*&search_id=&search_query=&year_from=2008&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=normal+wear+%26+tear&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
        )
        .then(response => {
          this.data = response.data.lots;
        });
    },

    showTextLoading() {
      this.visible = true;
      this.showSimulatedReturnData = false;
      setTimeout(() => {
        this.visible = false;
        this.showSimulatedReturnData = true;
      }, 3000);
    },

    selected(id) {},

    pagination(){
      this.loading_cars();
    }
  },

  mounted() {
    this.loading_cars();
    this.showTextLoading();
  }
};
</script>
