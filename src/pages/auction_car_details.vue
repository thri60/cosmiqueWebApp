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
          <q-card class="my-card bg-grey-2">
            <q-card-section>
              <img
                class="clearvin__logo"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA4MSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg2OS43OTc5TDgxIDE2LjM4NTdMNjkuNzk3OSAzMUgwVjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDYuNDMyNSAxMEw0OC4yNTQ0IDIxLjk1NzFINDUuNDc4Mkw0My42NTYyIDEwSDQ2LjQzMjVaIiBmaWxsPSIjMDBBNjUxIi8+CjxwYXRoIGQ9Ik01NS4zNjk0IDEwTDUzLjMzMDUgMjEuOTU3MUg1MC41OTc3TDUyLjYzNjUgMTBINTUuMzY5NFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTYwLjIyOTQgMTBMNjIuMDUxMyAyMS45NTcxSDU5LjI3NUw1Ny40NTMxIDEwSDYwLjIyOTRaIiBmaWxsPSIjMDBBNjUxIi8+CjxwYXRoIGQ9Ik00OC40MzAxIDEwSDUxLjIwNjNMNDkuMzg0NCAyMS45NTcxSDQ4LjQzMDFMNDcuNTYyNSAxNi42NDI5TDQ4LjQzMDEgMTBaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik02Mi4yNjYgMTBINjQuOTk4OUw2My4xNzcgMjEuOTU3MUg2Mi4yMjI2TDYxLjM5ODQgMTYuNjQyOUw2Mi4yNjYgMTBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxwYXRoIGQ9Ik01Ny4yNzk4IDIxLjk1NzFINTQuNTQ2OUw1Ni4zNjg4IDEwSDU3LjMyMzFMNTguMTQ3MyAxNS4zMTQzTDU3LjI3OTggMjEuOTU3MVoiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcikiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNNDIuNjYwNiAxMy4yMTQzQzQyLjc0NzQgMTEuNzU3MSA0Mi4wNTMzIDEwLjQyODYgNDAuNTM1MSAxMC4wODU3QzQwLjM2MTUgMTAuMDQyOSA0MC4xODggMTAgNDAuMDE0NSAxMEw0MC44ODIxIDEyLjY1NzFDNDAuOTY4OCAxMi45NTcxIDQwLjk2ODggMTMuMjU3MSA0MC44ODIxIDEzLjU1NzFDNDAuODM4NyAxNC4xNTcxIDQwLjUzNTEgMTQuNjcxNCA0MC4xMDEzIDE1LjA1NzFMNDAuNjIxOCAxNi42QzQxLjc0OTcgMTUuODcxNCA0Mi40ODcxIDE0LjcxNDMgNDIuNjYwNiAxMy4zODU3VjEzLjIxNDNaTTEyLjU1NTYgMTEuNTg1N0MxMS42NDQ2IDExLjcxNDMgMTAuOTA3MiAxMi40IDEwLjczMzcgMTMuM0w5LjgyMjcyIDE4LjUyODZDOS43NzkzNCAxOC43ODU3IDkuNzc5MzQgMTkuMDQyOSA5Ljg2NjEgMTkuM0wxMC43MzM3IDIyQzEwLjU2MDIgMjIgMTAuMzQzMyAyMS45NTcxIDEwLjE2OTggMjEuOTE0M0M4LjY1MTQ5IDIxLjU3MTQgNy42OTcxNSAyMC4wMjg2IDguMDg3NTYgMTguNTI4Nkw4Ljk5ODUyIDEzLjM0MjlDOS4zMDIxNyAxMS43NTcxIDEwLjQ3MzQgMTAuNDcxNCAxMi4wMzUxIDEwTDEyLjU1NTYgMTEuNTg1N1pNMTUuMjg4NSAxMy40Mjg2SDEzLjU1MzNDMTMuNTk2NyAxMy4xNzE0IDEzLjU5NjcgMTIuOTE0MyAxMy41MDk5IDEyLjY1NzFMMTIuNjQyNCAxMEMxMi44MTU5IDEwIDEyLjk4OTQgMTAuMDQyOSAxMy4xNjI5IDEwLjA4NTdDMTQuNzI0NSAxMC40Mjg2IDE1LjY3ODkgMTEuOTI4NiAxNS4yODg1IDEzLjQyODZDMTUuMzMxOSAxMy40Mjg2IDE1LjMzMTkgMTMuNDI4NiAxNS4yODg1IDEzLjQyODZaTTEyLjY0MjQgMTguN0gxNC4zNzc1QzE0LjA3MzkgMjAuMjQyOSAxMi45MDI2IDIxLjUyODYgMTEuMzQxIDIxLjk1NzFMMTAuODIwNCAyMC4zNzE0QzExLjczMTQgMjAuMjQyOSAxMi40Njg4IDE5LjU1NzEgMTIuNjQyNCAxOC43Wk0xNy45NzggMjEuOTU3MUgxNC43MjQ1TDE2Ljg1MDEgMTBIMTguNTg1M0wxNi43NjM0IDIwLjI0MjlIMTcuNDE0TDE3Ljk3OCAyMS45NTcxWk0yMC4xNDY5IDIxLjk1NzFIMTguNTg1M0wxOC4wMjE0IDIwLjI0MjlIMjAuNDA3MkwyMC4xNDY5IDIxLjk1NzFaTTI0LjA5NDQgMjEuOTU3MUgyMC43OTc2TDIyLjk2NjYgMTBIMjUuMzUyNEwyNS45MTYzIDExLjcxNDNIMjQuMzk4MUwyMy43OTA4IDE1LjE0MjlIMjQuNDQxNEwyNS4wMDU0IDE2Ljg1NzFIMjMuNDg3MUwyMi44Nzk4IDIwLjI4NTdIMjMuNTMwNUwyNC4wOTQ0IDIxLjk1NzFaTTI2LjIyIDIxLjk1NzFIMjQuNjU4M0wyNC4wOTQ0IDIwLjI0MjlIMjYuNDgwM0wyNi4yMiAyMS45NTcxWk0yNy4wODc2IDE2Ljg1NzFIMjUuNTY5M0wyNS4wMDU0IDE1LjE0MjlIMjcuMzkxMkwyNy4wODc2IDE2Ljg1NzFaTTI4LjA0MTkgMTEuNzE0M0gyNi41MjM2TDI1Ljk1OTcgMTBIMjguMzQ1NkwyOC4wNDE5IDExLjcxNDNaTTMxLjY0MjQgMTkuMzg1N0gyOS42OTAzTDI4LjY5MjYgMjEuOTU3MUgyNi45MTRMMzEuMzM4NyAxMC43NzE0TDMxLjUxMjIgMTQuODQyOUwzMC4zNDEgMTcuNzE0M0gzMS41NTU2TDMxLjY0MjQgMTkuMzg1N1pNMzQuMTU4MyAyMS45NTcxSDMyLjM3OThMMzEuOTAyNiAxMEgzMy42ODEyTDM0LjE1ODMgMjEuOTU3MVpNNDEuNzQ5NyAyMS45NTcxSDM5Ljc5NzZMMzguMTQ5MiAxNi44NTcxSDM3LjQ5ODVMMzYuNTg3NiAyMkgzNC44NTI0TDM2Ljk3OCAxMEgzOS4zNjM4TDM5LjkyNzcgMTEuNzE0M0gzOC40MDk1TDM3LjgwMjIgMTUuMTQyOUgzOS41MzczTDQxLjc0OTcgMjEuOTU3MVoiIGZpbGw9IiMyMzFGMjAiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUwLjYyODciIHkxPSIxNS45ODUiIHgyPSI1NS4zNzg3IiB5Mj0iMTUuOTg1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEE2NTEiLz4KPHN0b3Agb2Zmc2V0PSIwLjE0IiBzdG9wLWNvbG9yPSIjMDBBNjUxIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQTY1MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI0Ny4xMTA0IiB5MT0iMTYuMzk2MSIgeDI9IjUyLjQwMDEiIHkyPSIxNS4xNTk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDVCMzAiLz4KPHN0b3Agb2Zmc2V0PSIwLjA0IiBzdG9wLWNvbG9yPSIjMDA2OTM2Ii8+CjxzdG9wIG9mZnNldD0iMC4xNCIgc3RvcC1jb2xvcj0iIzAwN0Y0MCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjUiIHN0b3AtY29sb3I9IiMwMDkxNDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjM4IiBzdG9wLWNvbG9yPSIjMDA5RDREIi8+CjxzdG9wIG9mZnNldD0iMC41NiIgc3RvcC1jb2xvcj0iIzAwQTQ1MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEE2NTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iNjAuOTA3NCIgeTE9IjE2LjM5NjYiIHgyPSI2Ni4xOTcxIiB5Mj0iMTUuMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwNUIzMCIvPgo8c3RvcCBvZmZzZXQ9IjAuMDQiIHN0b3AtY29sb3I9IiMwMDY5MzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjE0IiBzdG9wLWNvbG9yPSIjMDA3RjQwIi8+CjxzdG9wIG9mZnNldD0iMC4yNSIgc3RvcC1jb2xvcj0iIzAwOTE0OCIvPgo8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiMwMDlENEQiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2IiBzdG9wLWNvbG9yPSIjMDBBNDUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQTY1MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXIiIHgxPSI1OC42MzEyIiB5MT0iMTUuNTc0MyIgeDI9IjUzLjM0MTUiIHkyPSIxNi44MTA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDVCMzAiLz4KPHN0b3Agb2Zmc2V0PSIwLjA0IiBzdG9wLWNvbG9yPSIjMDA2OTM2Ii8+CjxzdG9wIG9mZnNldD0iMC4xNCIgc3RvcC1jb2xvcj0iIzAwN0Y0MCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjUiIHN0b3AtY29sb3I9IiMwMDkxNDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjM4IiBzdG9wLWNvbG9yPSIjMDA5RDREIi8+CjxzdG9wIG9mZnNldD0iMC41NiIgc3RvcC1jb2xvcj0iIzAwQTQ1MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEE2NTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                alt="clearVin logo"
              />
              <span
                >History Records Were Found On VIN:<b>{{
                  view_selected.lot.vin
                }}</b>
                &nbsp;
                <a
                  :href="
                    'https://www.clearvin.com/payment/prepare?vin=' +
                      view_selected.lot.vin
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                  >Click Here To See Full History Report</a
                ></span
              >
            </q-card-section>
          </q-card>
          <br />
          <q-card flat bordered class="bg-grey-2">
            <q-card-section>
              <div class="text-h5 text-primary q-mb-xs">
                <strong> VEHICLE DETAILS</strong>
                <q-space />
              </div>
              <div class="q-mb-xs text-primary">
                <strong> {{ view_selected.lot.vehicle_name }} </strong>
                <q-space />
              </div>
              <div>
                VIN: <b> {{ view_selected.lot.vin }}</b>
              </div>
              <div>
                <i class="fas fa-tachometer-alt"></i> MILEAGE
                <b>
                  {{ view_selected.lot.odometer_value }} -{{
                    view_selected.lot.odometer_type.toUpperCase()
                  }}</b
                >
              </div>
              <div>
                <i class="fab fa-keycdn"></i>
                START CODE
                <b>{{ view_selected.lot.start_code.toUpperCase() }}</b>
              </div>
              <div>
                <i class="fas fa-car-crash"> </i> DAMAGE:
                <b> {{ view_selected.lot.damage }}</b>
              </div>
            </q-card-section>
          </q-card>
          <br />
          <q-card bordered flat class="my-card bg-grey-2">
            <q-card-section>
              <div class="text-h5 text-bold text-primary">VIN Details</div>
              <div
                class="row"
                v-for="sales in view_selected.vin_details"
                :key="sales"
              >
                <div class="col-3 text-primary">
                  <b>{{ sales.label }} </b>
                </div>
                <div class="col-8">
                  <b>{{ sales.value }}</b>
                </div>
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
                  dense
                  rounded
                  align="right"
                  standout
                  prefix="$"
                  suffix="USD"
                />
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
        <br />
        <q-card
          class="my-card text-center bg-grey-6"
          v-if="view_selected.lot.auction_in_progress == false"
        >
          <q-card-section>
            <div class="text-subtitle2">Live Auction Starts In</div>
          </q-card-section>
          <q-card-section>
            <flip-countdown deadline="2020-11-06 06:30:00.000000" />
            {{ view_selected.lot.sale_date.date }}
          </q-card-section>
        </q-card>
        <br />
        <q-card bordered flat class="bg-blue-2 my-card">
          <q-card-section>
            <q-card-section>
              <div class="text-h5 text-bold">Sale Information</div>
              <div
                class="row"
                v-for="sales in view_selected.sale_information"
                :key="sales"
              >
                <div class="col-4 text-primary">
                  <b>{{ sales.label }} </b>
                </div>
                <div class="col-8">
                  <b>{{ sales.value }}</b>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
        <br />
        <q-card bordered flat class="bg-green-2 my-card">
          <q-card-section>
            <q-card-section>
              <div class="text-h5 text-bold">IAA Condition Details Stock</div>
              <div
                class="row"
                v-for="sales in view_selected.iaa_condition"
                :key="sales"
              >
                <div class="col-4 text-primary">
                  <b>{{ sales.label }} </b>
                </div>
                <div class="col-8">
                  <b>{{ sales.value }}</b>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="bg bg-grey-3 q-pa-md">
      <div class="text-center">
        <!-- <p class="text-bold">FIND OUT MORE</p> -->
        <p class="text-bold text-h5 text-white bg-primary"> RELATED VEHICLES ON SALE</p>
      </div>
      <q-separator />
      <div class="row q-pa-md">
        <div class="col-12 col-md-4 q-pa-md">
          <q-card>
            <q-img
              v-ripple
              class="cursor-pointer relative-position"
              src="~assets/3.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                <strong class="text-h6">CAR NAME </strong>
              </div>
            </q-img>

            <q-card-section>
              <div>
                <i class="fas fa-tachometer-alt"></i> MILEAGE:
                <b>
                </b>
              </div>
              <div>
                <i class="fab fa-keycdn"></i> START CODE:
                <b>{{}}</b>
              </div>

              <hr />
              <div class="q-mb-xs">
                <q-btn
                  class="full-width"
                  rounded
                  color="primary"
                  text-color="white"
                  size="sm"
                >
                  <b>View Vehicle</b>
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-card>
            <q-img
              v-ripple
              class="cursor-pointer relative-position"
              src="~assets/4.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                <strong class="text-h6">CAR NAME </strong>
              </div>
            </q-img>

            <q-card-section>
              <div>
                <i class="fas fa-tachometer-alt"></i> MILEAGE:
                <b>
                </b>
              </div>
              <div>
                <i class="fab fa-keycdn"></i> START CODE:
                <b>{{}}</b>
              </div>

              <hr />
              <div class="q-mb-xs">
                <q-btn
                  class="full-width"
                  rounded
                  color="primary"
                  text-color="white"
                  size="sm"
                >
                  <b>View Vehicle</b>
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <q-card>
            <q-img
              v-ripple
              class="cursor-pointer relative-position"
              src="~assets/3.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                <strong class="text-h6">CAR NAME </strong>
              </div>
            </q-img>

            <q-card-section>
              <div>
                <i class="fas fa-tachometer-alt"></i> MILEAGE:
                <b>
                </b>
              </div>
              <div>
                <i class="fab fa-keycdn"></i> START CODE:
                <b>{{}}</b>
              </div>

              <hr />
              <div class="q-mb-xs">
                <q-btn
                  class="full-width"
                  rounded
                  color="primary"
                  text-color="white"
                  size="sm"
                >
                  <b>View Vehicle</b>
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { QSpinnerGears } from "quasar";
import { date } from "quasar";
import FlipCountdown from "vue2-flip-countdown";

export default {
  props: ["selected_car"],

  components: { FlipCountdown },

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
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://www.salvagebid.com/rest-api/v2/lots/" +
            this.selected_car
        )
        .then(response => {
          this.view_selected = response.data;
        });
    },

    showLoading() {
      this.$q.loading.show({
        message: "Car Detail Loading..."
      });

      this.timer = setTimeout(() => {
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: "red",
          messageColor: "black",
          backgroundColor: "yellow",
          message: "Here it is!"
        });

        this.timer = setTimeout(() => {
          this.$q.loading.hide();
          this.timer = void 0;
        }, 2000);
      }, 3000);
    }
  },

  mounted() {
    this.load_car_details();
    this.showLoading();
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
   height: 100%
   background-color: white
   padding: 20px
.bg
  // background-image: linear-gradient(to bottom right, grey, white);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25px;
  border: 2px solid #f76d2b;
</style>
