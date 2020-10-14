<template>
  <div>
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
                    <b class="text-h5 text-primary">{{ car.vehicle_name }}</b>
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

        <!--  footer -->
    <div class="bg-accent text-white">
      <div>
        <div class="row">
          <div class="bg-grey-10 col-12 col-md">
            <q-card class="my-card q-pa-md bg-grey-10">
            <q-card-section class="q-pa-md">
             <strong>|| <b class="text-primary"> OPENING HOURS </b>  ||</strong>
                <div class="b-info__aside-article-item">
                  <b>Sales Department</b>
                  <p class="text-body2 text-weight-light">
                    Mon-Sat : 8:00am - 5:00pm<br />
                    Sunday is closed
                  </p>
                </div>
                <div>
                  <b>Service Department</b>
                  <p class="text-body2 text-weight-light">
                    Mon-Sat : 8:00am - 5:00pm<br />
                    Sunday is closed
                  </p>
                </div>
            </q-card-section>
               <hr>
            <q-card-section>
              <strong>|| <b class="text-primary"> About Us </b>  ||</strong>
                <p class="text-body2 text-weight-light">
                  Vestibulum varius od lio eget conseq uat blandit, lorem auglue
                  comm lodo nisl non ultricies lectus nibh mas lsa Duis
                  scelerisque aliquet. Ante donec libero pede porttitor dacu
                  msan esct venenatis quis.
                </p>
                 <q-btn
                rounded
                no-caps
                outline
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Read More"
                icon-right="fa fa-angle-right"
              />
            </q-card-section>
            </q-card>
          </div>

          <div class="q-pa-md col-12 col-md">
            <div class="">
              <strong> ||<b class="text-primary"> FROM TWITTER </b>|| </strong>
              <div class="q-pa-md row">
                <div> <q-icon name="fab fa-twitter" />  &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
              <div class="q-pa-md row">
                <div> <q-icon name="fab fa-twitter" />  &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
              <div class="q-pa-md row">
                <div> <q-icon name="fab fa-twitter" />  &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md q-pa-md">
            <div>
              <strong> ||<b class="text-primary"> CONTACT US </b>|| </strong>
              <div class="q-pa-md text-body2 text-weight-light text-grey-6">
              <div class="">
                 <q-icon name="fa fa-map-marker" />  &nbsp;
                <b> 0th St, Los Angeles, California, USA</b>
              </div>
              <br>
              <div class="">
                  <q-icon name="fa fa-phone-alt" />  &nbsp;
                <b>Phone: 1-800- 000-000</b>
              </div>
              <br>
              <div class="">
                  <q-icon name="fa fa-fax" />  &nbsp;
                <b>FAX: 1-800- 000-000</b>
              </div>
              <br>
              <div class="">
                  <q-icon name="fa fa-envelope" />  &nbsp;
                <b>Email: info@cosmiqueautos.com</b>
              </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md q-pa-md">

            <q-img
             class="text-center"
            src="~assets/map.jpg"
            spinner-color="white"
           >  <q-btn class="q-pa-md" flat dense text-color="grey-6" label="Open location map" />
            </q-img>


          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-10 text-grey-6 justify-between">
      <div class="row">
        <div class="self-center col-12 col-md-4">
          <div class="q-pa-md">
             <q-img
             class="text-center"
            v-ripple:primary
            src="~assets/logo2.png"
            spinner-color="white"
            style="width:100px; height:35px"
          />
        <br>
            <b class="text-h4 text-bold text-primary" >Cosmique <span class="text-white">Autos</span></b>
            <p>
              &copy; 2020.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div>
            <div class="text-right q-pa-sm">
              <q-btn round flat color="primary" icon="facebook" />
              <q-btn round flat color="primary" icon="fab fa-twitter" />
              <q-btn round flat color="primary" icon="fab fa-google-plus-g" />
              <q-btn round flat color="primary" icon="fab fa-instagram" />
              <q-btn round flat color="primary" icon="fab fa-youtube" />
            </div>

            <div class="text-right q-pa-md">
              <q-btn
                :to="{ name: 'homepage' }"
                rounded
                no-caps
                size="sm"
                flat
                dense
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Home"
              />
              <q-btn-dropdown
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Auto Inventory"
              >
                <q-list>
                  <q-item clickable :to="{ name: 'auction' }">
                    <q-item-section>
                      <q-item-label class="text-h6">Auction</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>New Autos</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Used Autos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn-dropdown
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Auto Parts"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>New Auto Parts</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Used Auto Parts</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn
                rounded
                no-caps
                size="sm"
                dense
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Auctions"
              />
              <q-btn
                rounded
                no-caps
                size="sm"
                dense
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Compare"
              />
              <q-btn
                dense
                no-caps
                rounded
                size="sm"
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Request"
              />
              <q-btn
                rounded
                no-caps
                dense
                size="sm"
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
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
