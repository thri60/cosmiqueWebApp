<template>
  <div>
    <div class="text-center bg-white">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:150px;"
      >
        <div round class="q-pa-md text-white text-h5 text-bold q-pa-lg">
          <b>| AUCTION Cars For Sale (Bid Online) |</b>
        </div>
      </q-img>
    </div>
    <div class="q-pa-md row justify-center items-start q-gutter-md">
      <div class="col-12 col-md-8 gt-xs">
        <div class="q-pa-md q-gutter-md">
          <q-card flat class="bg-white relative-position card-example">
            <q-card-section>
              <transition
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <div v-show="showSimulatedReturnData">
                  <q-card
                    class="my-card q-pa-md"
                    bordered
                    v-for="car in data"
                    :key="car.id"
                  >
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
                          <b class="text-h5 text-primary text-bold">
                            {{ car.vehicle_name }}</b
                          >
                        </div>
                        <div class="col-12 col-md-4 q-pa-xs">
                          <i class="fas fa-tachometer-alt"></i> MILEAGE:
                          <b class="text-primary">
                            {{
                              new Intl.NumberFormat().format(car.odometer_value)
                            }}
                            {{ car.odometer_type.toUpperCase() }}
                          </b>
                        </div>
                        <div class="col-12 col-md-4 q-pa-xs">
                          <i class="fa fa-cog"></i> START CODE:
                          <b class="text-primary">{{ car.start_code }}</b>
                        </div>
                        <div class="col-12 col-md-4 q-pa-xs">
                          <i class="fa fa-calendar"></i> SALE DATE:
                          <b class="text-primary">{{ car.sale_date }}</b>
                        </div>
                        <div class="col-12 col-md-4 q-pa-xs">
                          <q-btn
                            color="primary"
                            text-color="white"
                            rounded
                            class="full-width"
                          >
                            CURRENT BID
                            {{
                              new Intl.NumberFormat("us-US", {
                                style: "currency",
                                currency: "USD"
                              }).format(car.current_bid_value)
                            }}
                          </q-btn>
                        </div>
                        <div
                          class="col-12 col-md-4 q-pa-xs"
                          v-if="car.buy_it_now > 0"
                        >
                          <q-btn
                            color="primary"
                            text-color="white"
                            rounded
                            class="full-width"
                          >
                            BUY IT NOW
                            {{
                              new Intl.NumberFormat("us-US", {
                                style: "currency",
                                currency: "USD"
                              }).format(car.buy_it_now)
                            }}
                          </q-btn>
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                  <div class="q-pa-lg flex flex-center">
                    <q-pagination
                      v-model="current"
                      :max="6"
                      @click="pagination"
                      :scroll-offset="150"
                      :offset="[18, 18]"
                    >
                    </q-pagination>
                  </div>
                </div>
              </transition>
            </q-card-section>

            <q-inner-loading :showing="visible">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-card>
        </div>
      </div>
      <div class="lt-md">
        <q-card bordered class="my-card" v-for="car in data" :key="car.id">
          <q-img :src="car.images[0]" @click="selected(car.id)" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="collections"
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
        <div>
          <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="current" :max="5" @click="pagination">
            </q-pagination>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 q-pa-lg text-center">
        <q-card  class="text-center bg-grey-3">
          <b class="q-pa-lg text-h5 text-bold text-primary"> | REFINE YOUR SEARCH |</b>
          <q-card-section>
            <q-select
              rounded
              fill-input
              dense
              outlined
              v-model="form.make"
              :options="makeOptions"
              label="Select a Make"
              class="q-pa-sm"
            />
            <q-select
              rounded
              dense
              outlined
              v-model="form.model"
              :options="makeOptions"
              label="Select a Model"
              class="q-pa-sm"
            />
            <div class="q-pa-md text-primary text-center text-bold">
              YOUR EXPECTED PRICE
              <q-range
                v-model="form.price"
                :left-label-value="'$' + form.price.min"
                :right-label-value="'$' + form.price.max"
                :min="500"
                :max="50000"
                :step="2"
                label
              />
            </div>
            <q-select
              rounded
              outlined
              dense
              v-model="form.status"
              :options="makeOptions"
              label="Vehicle Status"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.type"
              :options="makeOptions"
              label="Vehicle Type"
              class="q-pa-sm"
            />
            <div class="q-pa-md text-primary text-center text-bold">
              VEHICLE MILEAGE RANGE
              <q-range
                v-model="form.mileage"
                :left-label-value="form.mileage.min + ' MI'"
                :right-label-value="form.mileage.max + ' MI'"
                :min="0"
                :max="3000"
                :step="10"
                label
              />
            </div>
            <q-select
              rounded
              outlined
              dense
              v-model="form.max_year"
              :options="makeOptions"
              label="Max Year"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.min_year"
              :options="makeOptions"
              label="Min Year"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.fuel"
              :options="makeOptions"
              label="Fuel Type"
              class="q-pa-sm"
            />
          </q-card-section>
          <q-separator />
          <div class="q-pa-md">
            <q-btn rounded icon-right="send" color="primary" text-color="white" label="Filter Vehicles" />
          </div>


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
      form: {
        make: "",
        model: "",
        type: "",
        status: "",
        max_year: "",
        min_year: "",
        fuel: "",
        price: {
          min: 500,
          max: 50000
        },
        mileage: {
          min: 0,
          max: 3000
        }
      },
      makeOptions: [],
      current: 1
    };
  },

  methods: {
    loading_cars() {
      axios
        .get(
          "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=" +
            this.current +
            "&per_page=26&type=CAR&make=*&model=*&search_id=&search_query=&year_from=1920&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=*&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
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

    selected(id) {
      this.$router.push({
        name: "auction_car_details",
        params: { selected_car: id }
      });
    },

    pagination() {
      this.loading_cars();
      console.log(this.current);
    }
  },

  mounted() {
    this.loading_cars();
    this.showTextLoading();
  }
};
</script>
