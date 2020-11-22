<template>
  <div>
     <div class="q-pt-none">
      <q-img
        dim
        src="~assets/auction.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:250px"
      >
        <div round class="q-pa-md text-primary text-h5 text-bold ">
          <b>| AUCTION Cars For Sale (Bid Online) |</b>
        </div>
      </q-img>
    </div>
    <div class="q-pa-md row justify-center items-start q-gutter-md">
      <div class="col-12 col-md-8 gt-sm">
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
                            @click="selected(car.id)"
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
                            @click="selected(car.id)"
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
                      :max="100"
                      color="primary"
                      :max-pages="6"
                      :boundary-numbers="false"
                      @click="pagination"
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
              @click="selected(car.id)"
            >
              <b>Bid Now</b>
            </q-btn>
          </q-card-actions>
        </q-card>
        <div>
          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="current"
              @click="pagination"
              :max="100"
              color="primary"
              :max-pages="6"
              :boundary-numbers="false"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 q-pa-lg text-center">
        <q-card class="text-center bg-grey-3">
          <b class="q-pa-lg text-h6 text-bold text-primary">
            | REFINE YOUR SEARCH |</b
          >
          <q-card-section>
            <q-select
              rounded
              fill-input
              dense
              outlined
              v-model="form.make"
              :options="vehicleTypeOptions"
              @filter="loadingMakeOptions"
              label="Select a Make"
              class="q-pa-sm"
            />
            <q-select
              rounded
              dense
              outlined
              v-model="form.model"
              :options="modelOptions"
              @filter="loadingMakeOptions"
              label="Select a Model"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.max_year"
              :options="yearOptionMax"
              label="Max Year"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.min_year"
              :options="yearOptionMin"
              label="Min Year"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.salesTypes"
              :options="salesTypeOptions"
              label="Sales type"
              class="q-pa-sm"
            />
            <q-select
              rounded
              outlined
              dense
              v-model="form.odometer"
              :options="odometerOptions"
              label="Odometer"
              class="q-pa-sm"
            />
          </q-card-section>
          <q-separator />
          <div class="q-pa-md">
            <q-btn
              rounded
              icon-right="send"
              color="primary"
              text-color="white"
              @click="filterSearch"
              label="Filter Vehicles"
            />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      visible: false,
      showSimulatedReturnData: false,
      form: {
        make: "",
        model: "",
        max_year: "",
        min_year: "",
        salesTypes: "",
        salesTypes: "",
        odometer: ""
      },
      odometerOptions: [
        "All",
        "Under 10,000 Miles",
        "Under 25,000 Miles",
        "Under 50,000 Miles",
        "Under 100,000 Miles",
        "Over 100,000 Miles"
      ],
      current: 1,
      modelOptions: [],
      vehicleTypeOptions: [
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "Changzhou",
        "Cherokee",
        "Chevrolet",
        "Chrysler",
        "BMW",
        "Buick",
        "Cadillac",
        "Datsun",
        "Ferrari",
        "Fiat",
        "Ford",
        "GMC",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Isuzu",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lexus",
        "Mazda",
        "Mercedes",
        "Mercedes Benz",
        "Mitsubishi",
        "Nissan",
        "Opel",
        "Suzuki",
        "Subaru",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
      ],
      yearOptionMax: [
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006"
      ],
      yearOptionMin: [
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006"
      ],
      salesTypeOptions: ["Auction Only", "Buy It Now"]
    };
  },

  methods: {
    loading_cars() {
      this.axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "http://184.72.35.251/rest-api/v1.0/lots/search?page=" +
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

    loadingMakeOptions(val, update) {
      if (val === "") {
        update(() => {
          this.axios
            .get(
              "https://cors-anywhere.herokuapp.com/" +
                "http://184.72.35.251/rest-api/v1.0/vehicles/models?types=CAR&makes=" +
                this.form.make +
                "&query="
            )
            .then(response => {
              this.axios
                .post("cosmique/make_options", { data: response.data })
                .then(response => {
                  this.modelOptions = response.data;
                });
            });
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.axios
          .get(
            "https://cors-anywhere.herokuapp.com/" +
              "http://184.72.35.251/rest-api/v1.0/vehicles/models?types=CAR&makes=" +
              this.form.make +
              "&query="
          )
          .then(response => {
            this.axios
              .post("cosmique/make_options", { data: response.data })
              .then(response => {
                this.modelOptions = response.data;
                this.modelOptions = modelOptions.filter(
                  v => v.toLowerCase().indexOf(needle) > -1
                );
              });
          });
      });
    },

    selected(id) {
      this.$router.push({
        name: "auction_car_details",
        params: { selected_car: id }
      });
    },

    pagination() {
      this.loading_cars();
      window.scrollTop(0);
    },

    filterSearch() {
      if (this.form.make === "") {
        this.form.make = "*";
      }
      if (this.form.model === "") {
        this.form.model = "*";
      }
      if (this.form.salesType === "") {
        this.form.salesType = "*";
      }
      if (this.form.odometer === "") {
        this.form.odometer = "*";
      } else if (this.form.odometer === "Under 10,000 Miles") {
        this.form.odometer = 10000;
      } else if (this.form.odometer === "Under 25,000 Miles") {
        this.form.odometer = 25000;
      } else if (this.form.odometer === "Under 50,000 Miles") {
        this.form.odometer = 50000;
      } else if (this.form.odometer === "Under 100,000 Miles") {
        this.form.odometer = 100000;
      } else {
        this.form.odometer = 100000;
      }
      this.axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
          "http://184.72.35.251/rest-api/v1.0/lots/search?page=1&per_page=26&type=CAR&make=" +
            this.form.make +
            "&model=" +
            this.form.model +
            "&search_id=&search_query=&year_from=" +
            this.form.yearOptionMin +
            "&year_to=" +
            this.form.yearOptionMax +
            "&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=*&loss_type=collision&title_name=*&exterior_color=*&odometer_min=*&odometer_max=" +
            this.form.odometer
        )
        .then(response => {
          this.visible = true;
          this.showSimulatedReturnData = false;
          setTimeout(() => {
            this.visible = false;
            this.showSimulatedReturnData = true;
            this.data = response.data.lots;
          }, 3000);
        });
    }
  },

  mounted() {
    this.loading_cars();
    this.showTextLoading();
  }
};
</script>
