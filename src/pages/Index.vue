<template>
  <div>
    <div class="q-pa-md">
      <q-carousel
        swipeable
        animated
        autoplay
        v-model="slide"
        thumbnails
        infinite
        class="img-slide"
      >
        <q-carousel-slide :name="1" img-src="~assets/1.jpg" />
        <q-carousel-slide :name="2" img-src="~assets/2.jpg" />
        <q-carousel-slide :name="3" img-src="~assets/3.jpg" />
        <q-carousel-slide :name="4" img-src="~assets/4.jpg" />
      </q-carousel>
    </div>

    <div class="q-pa-md">
      <q-card class="q-pa-md text-center">
        <q-card-section class="bg-primary text-white">
          <span
            ><b>
              | UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE |</b
            ></span
          >
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row justify-center q-pa-md">
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/pickUp.svg" />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/SUV.svg" />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/Coupe.svg" />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/convertable.svg" />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/sedan.svg" />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-2 q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <q-img src="~assets/miniCar.svg" />
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="row justify-center q-pa-md">
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                dense
                v-model="form.vehicleType"
                :options="vehicleTypeOptions"
                label="Any Make"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                dense
                v-model="form.make"
                :options="makeOptions"
                label="Any Model"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                dense
                v-model="form.make"
                :options="makeOptions"
                label="Vehicle Status"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                dense
                v-model="form.make"
                :options="makeOptions"
                label="Min Year"
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              <q-select
                rounded
                outlined
                dense
                v-model="form.make"
                :options="makeOptions"
                label="Max Year"
              />
            </div>
          </div>

          <div class="row justify-center q-pa-md">
            <div class="col-12 col-md-2 q-pa-md">
              Price Range
              <q-range
                :left-label-value="'$' + price.min"
                :right-label-value="'$' + price.max"
                v-model="price"
                :min="0"
                :max="10000"
                :step="2"
                label
              />
            </div>
            <div class="col-12 col-md-2 q-pa-md">
              Vehicle Mileage Range
              <q-range
                :left-label-value="mileage.min + ' MI'"
                :right-label-value="mileage.max + ' MI'"
                v-model="mileage"
                :min="0"
                :max="3000"
                :step="10"
                label
              />
            </div>
            <div class="col-12 col-md-4 q-pa-md">
              <q-btn
                v-ripple:primary
                style="width:60%"
                rounded
                color="yellow-10"
                text-color="white"
                label="SEARCH"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div>
      <div class="text-center q-pa-md">
        <q-chip square color="primary" text-color="white">
          <b class="text-h4 text-bold shadow-3">| FEATURED VEHICLES |</b>
        </q-chip>
      </div>

      <q-scroll-area
        :thumb-style="thumbStyle"
        style="height: 550px; max-width: 1000px; margin: auto;"
        class="q-pa-md bg-white"
        rounded-borders
      >
        <div class="row q-col-gutter-x-xs q-col-gutter-y q-pa-xs">
          <div
            class="col-12 col-md-4 q-pa-md"
            v-for="car in data"
            :key="car.id"
          >
            <q-card class="my-card">
              <q-img
                :src="car.images[0]"
                @click="selected(car.id)"
                v-ripple
                class="cursor-pointer relative-position"
              >
                <q-tooltip content-class="bg-primary text-white text-bold "
                  >Click to Preview</q-tooltip
                >
                <template v-slot:loading>
                  <div class="text-primary">
                    <q-spinner />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
                <div class="absolute-bottom text-subtitle2 text-center">
                  <strong class="text-h6"> {{ car.vehicle_name }} </strong>
                </div>
              </q-img>

              <q-card-section>
                <div class="row">
                  <q-rating
                    v-model="car.id"
                    max="1"
                    size="2em"
                    color="primary"
                    color-selected="primary"
                    icon="favorite_border"
                    icon-selected="favorite"
                    icon-half="favorite"
                    no-dimming
                  />
                  <q-space />

                  <q-btn flat round color="primary" icon="share" />
                </div>
              </q-card-section>
              <q-card-section>
                <div>
                  <input type="hidden" v-model="car.id" />
                  <i class="fas fa-tachometer-alt"></i> MILEAGE:
                  <b>
                    {{ new Intl.NumberFormat().format(car.odometer_value) }}
                    {{ car.odometer_type.toUpperCase() }}
                  </b>
                </div>
                <div>
                  <i class="fab fa-keycdn"></i> START CODE:
                  <b>{{ car.start_code.toUpperCase() }}</b>
                </div>

                <hr />
                <div class="q-mb-xs">
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
                    @click="view_selected_cars(car.id)"
                  >
                    <b>Bid Now</b>
                  </q-btn>
                </div>

                <q-separator inset />

                <div class="q-mb-xs" v-if="car.buy_it_now > 0">
                  <br />
                  <q-btn
                    class="full-width"
                    rounded
                    color="yellow-10"
                    icon-right="shopping_cart"
                    size="sm"
                    @click="view_selected_cars(car.id)"
                    text-color="white"
                  >
                    Buy it Now
                    <strong>
                      &nbsp;
                      {{
                        new Intl.NumberFormat("us-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(car.buy_it_now)
                      }}
                      &nbsp;
                    </strong>
                  </q-btn>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>
    <br />
    <br />
    <br />
    <div class="q-pa-md logo text-center">
      <q-chip square color="primary" text-color="white" class=" gt-sm">
        <strong class="text-h4 text-bold text-white shadow-3">
          | MOST RESEARCHED MAKES |
        </strong>
      </q-chip>
      <strong class="text-h4 text-bold text-primary lt-md">
        | MOST RESEARCHED MAKES |
      </strong>

      <div class="row justify-center">
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/audi.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img v-ripple:primary src="~assets/bmw.png" spinner-color="white" />
        </div>

        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/chevrolet.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/dodge.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/ford.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/honda.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/jeep.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/nissan.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/subaru.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/tesla.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2">
          <q-img
            v-ripple:primary
            src="~assets/toyota.png"
            spinner-color="white"
          />
        </div>
        <div class="col-6 col-md-2 q-pa-md">
          <q-img
            v-ripple:primary
            src="~assets/volkswagen.png"
            spinner-color="white"
          />
        </div>
        <q-btn
          to="auction"
          style="width:60%"
          rounded
          color="yellow-10"
          text-color="white"
          label="View all Makes"
          v-ripple:primary
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />

    <div class="q-pa-md row bg-primary text-white gt-sm">
      <div class="col-12 col-md-2">
        <div class="bg-white q-pa-md box">
          <q-card v-ripple class="shadow-box">
            <q-card-section class="text-center">
              <q-icon
                class="text-black"
                name="fas fa-gavel"
                style="font-size: 2em;"
              />
              <br />
              <q-icon
                class="text-black"
                name="fas fa-car"
                style="font-size: 3em;"
              />
            </q-card-section>
          </q-card>
          <div class="text-center">
            <strong class="text-primary text-h6 text-bold">AUCTION CARS</strong>
          </div>
        </div>
        <br />
        <br />
        <div class="bg-white q-pa-md box">
          <q-card v-ripple class="shadow-box">
            <q-card-section class="text-center">
              <div>
                <q-img src="~assets/autopart.svg" />
              </div>
            </q-card-section>
          </q-card>
          <div class="text-center">
            <strong class="text-primary text-h6 text-bold">AUTO PARTS</strong>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div>
          <div class="text-center">
            <strong class="text-h6 text-white">WORLD LEADING CAR DEALER</strong>
            <p>
              <strong class="text-h4 text-bold text-white"
                >WELCOME TO COSMIQUE AUTOS</strong
              >
            </p>
          </div>
          <p>
            Curabitur libero. Donec facilisis velit eudsl est. Phasellus
            consequat. Aenean vita quam. Vivamus et nunc. Nunc consequat sem
            velde metus imperdiet lacinia. Dui estter neque molestie necd
            dignissim ac hendrerit quis purus. Etiam sit amet vec convallis
            massa scelerisque mattis. Sed placerat leo nec.
          </p>
          <p>
            Ipsum midne ultrices magn eu tempor quam dolor eustrl sem. Donec
            quis dolel Donec pede quam placerat alterl tristique faucibus
            posuere lobortis.
          </p>
          <ul>
            <p>
              <span class="fa fa-check"></span>Donec facilisis velit eu est
              phasellus consequat
            </p>
            <p>
              <span class="fa fa-check"></span>Aenean vitae quam. Vivamus et
              nunc nunc consequat
            </p>
            <p>
              <span class="fa fa-check"></span>Sem vel metus imperdiet lacinia
              enean
            </p>
            <p>
              <span class="fa fa-check"></span>Dapibus aliquam augue fusce
              eleifend quisque tels
            </p>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="bg-white box q-pa-md">
          <q-card v-ripple class="shadow-box">
            <q-card-section class="text-center">
              <div>
                <q-img src="~assets/usedCar.svg" />
              </div>
            </q-card-section>
          </q-card>
          <div class="text-center">
            <strong class="text-primary text-h6 text-bold">USED DEALERSHIP CARS</strong>
          </div>
        </div>
        <br />
        <br />
        <div class="bg-white box q-pa-md c">
          <q-card v-ripple class="shadow-box">
            <q-card-section class="text-center">
              <div>
                <q-img src="~assets/hot-deal.svg" />
              </div>
            </q-card-section>
          </q-card>
          <div class="text-center">
            <strong class="text-primary text-h6 text-bold">HOT DEALS</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-10 text-white">
      <div class="row q-pa-md">
        <div class="col-md-4 self-center">
          <div class="text-center text-bold">
            <b class="q-pa-md text-primary">LATEST NEWS &amp; DEALS</b>
            <p class="text-h5"><strong>| NEWSLETTER SIGNUP |</strong></p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="q-pa-md">
            WE SEND GREAT DEALS AND LATEST AUTO NEWS TO OUR SUBSCRIBED USERS
            EVERY WEEK. ITS FREE SO SUBSCRIBE TODAY!
            <form @submit.prevent.stop="onSubmit" class="row">
              <div class="col-12 col-md-5 q-pa-xs">
                <q-input
                  ref="name"
                  hint="Name and surname"
                  standout
                  outlined
                  rounded
                  dark
                  dense
                  v-model="name"
                  label="Your Name"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Your Fullname Please'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-5 q-pa-xs">
                <q-input
                  ref="email"
                  type="email"
                  hint="Your Email Address"
                  outlined
                  standout
                  rounded
                  dark
                  dense
                  v-model="email"
                  label="Your Email"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Your Email Please'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
              </div>
              <div class="q-pa-xs">
                <q-btn type="submit" round color="primary" icon="send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <q-dialog
      v-model="view_details_modal"
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <div class="my-card1">
        <div class="row ">
          <strong class="text-primary text-h4 text-bold">Quick Preview</strong>
          <q-space />
          <q-btn color="primary" dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-primary text-white">Close</q-tooltip>
          </q-btn>
        </div>

        <div>
          <q-img
            :src="image"
            class="lt-md"
            v-for="image in view_selected.images"
            :key="image"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>

        <div class="q-pa-md">
          <q-carousel
            padding
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            autoplay
            v-model="slide1"
            thumbnails
            infinite
            arrows
            spinner-color="primary"
            spinner-size="82px"
            class="card1 gt-sm"
          >
            <q-carousel-slide
              v-for="image in view_selected.images"
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
          <div class="bg-white">
            <div class="text-h6">
              <i class="far fa-calendar-alt"></i> &nbsp; SALE DATE: &nbsp;
            </div>

            <div>
              <b>{{ view_selected.vehicle_name }}</b>
            </div>
            <div>
              <b>Make: {{ view_selected.make }}</b>
            </div>
            <div>
              <b>Model: {{ view_selected.model }}</b>
            </div>
            <div>
              <b>status: {{ view_selected.damage }}</b>
            </div>
            <div>
              <b>start code: {{ view_selected.start_code }}</b>
            </div>
          </div>

          <hr />
          <q-btn
            color="primary"
            text-color="white"
            label="View more"
            icon="info"
            class="full-width"
            @click="picked_car(view_selected.id)"
          />
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: null,
      email: null,
      slide: 1,
      slide1: 1,
      slide_1: 1,
      form: {},
      data: [],
      view_selected: {},
      autoplay: true,
      makeOptions: [],
      view_details_modal: false,
      price: {
        min: 0,
        max: 10000
      },
      mileage: {
        min: 0,
        max: 3000
      },
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#de483d",
        width: "5px",
        opacity: 0.75
      },
      vehicleTypeOptions: [
        "All Vehicles",
        "Cars",
        "Trucks",
        "Motorcycles",
        "Trailers",
        "Buses"
      ],
      makeOptions: ["All"]
    };
  },

  methods: {
    loading_cars() {
      this.axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://www.salvagebid.com/rest-api/v1.0/lots/search?page=1&per_page=26&type=car&make=*&model=*&search_id=&search_query=&year_from=2008&year_to=2021&sort_field=&sort_order=&sales_type=*&distance=*&destination_zip=&location_state=*&location_city=*&primary_damage=normal+wear+%26+tear&loss_type=*&title_name=*&exterior_color=*&odometer_min=*&odometer_max=*"
        )
        .then(response => {
          this.data = response.data.lots;
        });
    },

    view_selected_cars(id) {
      this.$router.push({
        name: "auction_car_details",
        params: { selected_car: id }
      });
    },

    selected(id) {
      // console.log(id);
      this.axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://www.salvagebid.com/rest-api/v2/lots/" +
            id
        )
        .then(response => {
          this.view_selected = response.data.lot;
          this.view_details_modal = true;
        });
    },

    picked_car(id) {
      this.$router.push({
        name: "auction_car_details",
        params: { selected_car: id }
      });
    },

    onSubmit() {
      this.$refs.name.validate();
      this.$refs.email.validate();

      if (this.$refs.name.hasError || this.$refs.email.hasError) {
        this.formHasError = true;
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted"
        });
      }
    }
  },

  mounted() {
    this.loading_cars();
  }
};
</script>

<style lang="sass" scoped>
.img-slide
  width: 100%
  height: 450px

.my-content > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem

.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px

.my-card1
  width: 100%
  max-width: 70%
  background-color: white
  padding: 20px


.center
  margin: auto

.logo
  margin: auto;
  width: 90%;
  padding: 10px;
.box
  height: auto
  width: 180px

.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px
</style>
