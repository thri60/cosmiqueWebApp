<template>
  <q-page>
    <div class="text-center bg-white">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:100px"
      >
        <br />
        <div round class="q-pa-md text-primary text-h5 text-bold ">
          <b>| Submit Your Request |</b>
        </div>
      </q-img>
    </div>
    <br />
    <br />
    <div class="q-pa-md padding">
      <form @submit.prevent.stop="onSubmit">
        <q-stepper
          flat
          header-nav
          vertical
          v-model="step"
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="| REQUEST VEHICLE |"
            caption="Select vehicle & add info"
            icon="fas fa-car fa-2x"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div class="row">
              <div class="col-12 col-md-5 q-pa-md">
                <q-select
                  rounded
                  dense
                  outlined
                  v-model="form.price"
                  label="Your Price Estimate"
                  :options="priceOptions"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) || 'Price Estimate is Required'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="monetization_on" />
                  </template>
                </q-select>
                <q-select
                  rounded
                  outlined
                  dense
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.make"
                  :options="vehicleMakeptions"
                  @filter="loadingModelOptions"
                  label="Enter Make *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Make Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.vehicle_year"
                  :options="yearOption"
                  label="Vehicle Manufacturer Year *"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Vehicle Manufacturer Year Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.seats"
                  :options="seatsoptions"
                  label="No. of Seats *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'No. of Seats  Please'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.exterior_color"
                  label="Select Exterior Color *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Exterior Color *'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.gears"
                  label="Select No. of Gears *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select No. of Gears'
                  ]"
                />
                <q-select
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  rounded
                  outlined
                  dense
                  v-model="form.drive_type"
                  :options="driveTypeOptions"
                  label="Select Drive Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Drive Type'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.cylinders"
                  label="Select No. of Cylinders *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select No. of Cylinders'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.fuel"
                  label="Select Fuel Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Fuel Type'
                  ]"
                />
              </div>
              <div class="col-12 col-md-5 q-pa-md">
                <q-select
                  rounded
                  outlined
                  dense
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.model"
                  :options="modelOptions"
                  @filter="loadingModelOptions"
                  label="Enter Vehicle Model *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Vehicle Model'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.odometer"
                  :options="odometerOptions"
                  label="Enter Vehicle Odometer*"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Vehicle Odometer'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  val="body_type"
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  v-model="form.body_type"
                  :options="BodyTypeoptions"
                  label="Select Body Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Body Type'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.seat_color"
                  label="Enter Seats Color"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Seats Color'
                  ]"
                />

                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.interior_color"
                  label="Select Interior Color *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Interior Color'
                  ]"
                />

                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.doors"
                  label="No. of Doors *"
                  lazy-rules
                  :rules="[val => (val && val.length > 0) || 'No. of Doors']"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.transmission"
                  label="Vehicle Transmission Type *"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) || 'Vehicle Transmission Type'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.engine"
                  label="Select Engine Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Engine Type'
                  ]"
                />
                <q-input
                  rounded
                  outlined
                  dense
                  v-model="form.engine_capacity"
                  label="Enter Engine Capacity *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Engine Capacity'
                  ]"
                />
              </div>
            </div>
          </q-step>

          <q-step
            :name="2"
            title="| SELECT FEATURES |"
            caption="Choose vehicle specifications"
            icon="list"
            :done="step > 2"
            :header-nav="step > 2"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, aspernatur quibusdam! Veniam, quos vero, quidem
            blanditiis reiciendis quaerat magni repellat quia facere illo nisi
            dolore voluptates sit praesentium magnam porro.
            <div class="row">
              <div class="col-12 col-md-5 q-pa-md">
                <q-checkbox val="ABS" v-model="checkbox" label="ABS" />
                <hr />
                <q-checkbox
                  val="Alloy_Wheels"
                  v-model="checkbox"
                  label="Alloy Wheels"
                />
                <hr />
                <q-checkbox
                  val="Passenger_Airbag"
                  v-model="checkbox"
                  label="Passenger Airbag"
                />
                <hr />
                <q-checkbox
                  val="Heated_Door_Mirrors"
                  v-model="checkbox"
                  label="Heated Door Mirrors"
                />
                <hr />
                <q-checkbox
                  val="Air_Conditioning"
                  v-model="checkbox"
                  label="Air Conditioning"
                />
                <hr />
                <q-checkbox
                  val="Trip_Computer"
                  v-model="checkbox"
                  label="Trip Computer"
                />
                <hr />
                <q-checkbox
                  val="Side_Airbags"
                  v-model="checkbox"
                  label="Side Airbags"
                />
                <hr />
                <q-checkbox
                  val="Audio_Remote_Control"
                  v-model="checkbox"
                  label="Audio Remote Control"
                />
                <hr />
                <q-checkbox
                  val="Folding-Rear_Seats"
                  v-model="checkbox"
                  label="Folding Rear Seats"
                />
                <hr />
                <q-checkbox
                  val="Central_Locking_Keyless"
                  v-model="checkbox"
                  label="Central Locking - Keyless"
                />
                <hr />
                <q-checkbox
                  val="Weather_Shields"
                  v-model="checkbox"
                  label="Weather Shields"
                />
                <hr />
                <q-checkbox
                  val="Electric_Front_Seats"
                  v-model="checkbox"
                  label="Electric Front Seats"
                />
              </div>
              <div class="col-12 col-md-5 q-pa-md">
                <q-checkbox
                  val="Engine_Immobiliser"
                  v-model="checkbox"
                  label="Engine Immobiliser"
                />
                <hr />
                <q-checkbox
                  val="Fog_Lamps"
                  v-model="checkbox"
                  label="Fog Lamps"
                />
                <hr />
                <q-checkbox
                  val="GPS_Satellite_Navigation"
                  v-model="checkbox"
                  label="GPS Satellite Navigation"
                />
                <hr />
                <q-checkbox
                  val="Headlight_Covers"
                  v-model="checkbox"
                  label="Headlight Covers"
                />
                <hr />
                <q-checkbox
                  val="Leather_Seats"
                  v-model="checkbox"
                  label="Leather Seats"
                />
                <hr />
                <q-checkbox
                  val="Leather_Trim"
                  v-model="checkbox"
                  label="Leather Trim"
                />
                <hr />
                <q-checkbox
                  val="LPG"
                  v-model="checkbox"
                  label="LPG (Dual Fuel)"
                />
                <hr />
                <q-checkbox
                  val="Roof_Deflector"
                  v-model="checkbox"
                  label="Roof Deflector"
                />
                <hr />
                <q-checkbox
                  val="Rear_Spoiler"
                  v-model="checkbox"
                  label="Rear Spoiler"
                />
                <hr />
                <q-checkbox
                  val="Tinted Windows"
                  v-model="checkbox"
                  label="Tinted Windows"
                />
                <hr />
                <q-checkbox val="Tow Bar" v-model="checkbox" label="Tow Bar" />
                <hr />
              </div>
            </div>
          </q-step>

          <q-step
            :name="3"
            caption="How can we contact you?"
            title="| CONTACT DETAILS |"
            icon="comment"
            :header-nav="step > 3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            vero illo sequi! Adipisci, quos! Vero quas, molestias quo maiores
            accusantium natus quasi reiciendis dolore cumque earum obcaecati
            vitae eligendi provident!
            <div class="q-pa-md row">
              <q-input
                class="full-width"
                rounded
                outlined
                v-model="form.address"
                label="Your Current Address *"
                dense
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Your Current Address'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="home" />
                </template>
              </q-input>
              <div class="col-12 col-md-5 q-pa-md">
                <q-input
                  rounded
                  outlined
                  v-model="form.city"
                  label="City and State *"
                  dense
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Enter Your City and State is required'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="location_city" />
                  </template>
                </q-input>
                <q-input
                  rounded
                  outlined
                  v-model="form.phone"
                  type="tel"
                  label="Enter Your Phone Number *"
                  dense
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Enter Your Phone Number is required'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="call" />
                  </template>
                </q-input>
              </div>

              <div class="col-12 col-md-5 q-pa-md">
                <q-input
                  rounded
                  outlined
                  v-model="form.zipcode"
                  label="Zip Code*"
                  dense
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Zip Code is required'
                  ]"
                >
                </q-input>
                <q-input
                  rounded
                  outlined
                  v-model="form.email"
                  type="email"
                  label="Enter Your Email Address *"
                  dense
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Enter Your Email Address is required'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                rounded
                type="submit"
                :icon-right="step === 3 ? 'send' : 'fa fa-angle-right'"
                :label="step === 3 ? 'Submit Request' : 'Continue'"
              />
              <q-btn
                v-if="step > 1"
                flat
                rounded
                color="primary"
                @click="$refs.stepper.previous()"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </template>

          <template v-slot:message>
            <q-banner
              v-if="step === 1"
              class="bg-primary text-white q-px-lg text-h3"
            >
              <template v-slot:avatar>
                <q-icon name="fas fa-car fa-2x" />
              </template>

              Add Vehicle Details...
            </q-banner>
            <q-banner v-else-if="step === 2" class="bg-grey text-white q-px-lg">
              <template v-slot:avatar>
                <q-icon name="check" />
              </template>
              Select Additional Features Of the Vehicle...
            </q-banner>
            <q-banner v-else class="bg-yellow-10 text-white q-px-lg">
              The final step is telling us how can we contact you...
            </q-banner>
          </template>
        </q-stepper>
      </form>
    </div>
  </q-page>
</template>

<script>
export default {
      props: ["search_data"],
  data() {
    return {
      form: {
        address: "",
        city: "",
        zipcode: "",
        phone: "",
        email: "",
        price: "",
        make: "",
        model: "",
        odometer: "",
        seats: "",
        vehicle_year: "",
        exterior_color: "",
        gears: "",
        drive_type: "",
        cylinders: "",
        fuel: "",
        body_type: "",
        seat_color: "",
        interior_color: "",
        doors: "",
        transmission: "",
        engine: "",
        engine_capacity: ""
      },
      step: 1,
      vehicleMakeptions: [
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
      modelOptions:[],
      yearOption: [
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
      seatsoptions: ["2", "4", "5", "6", "7", "8"],
      BodyTypeoptions: [
        "SEDAN",
        "COUPE",
        "SPORTS CAR",
        "STATION WAGON",
        "HATCHBACK",
        "CONVERTIBLE",
        "SPORT-UTILITY VEHICLE (SUV)",
        "MINIVAN"
      ],
      driveTypeOptions: [
        "All-wheel-drive (AWD)",
        "Front wheel drive (FWD)",
        "Rear wheel drive (RWD)",
        "4WD (4 wheel drive)"
      ],
      odometerOptions: [
        "All",
        "Under 10,000 Miles",
        "Under 25,000 Miles",
        "Under 50,000 Miles",
        "Under 100,000 Miles",
        "Over 100,000 Miles"
      ],
      priceOptions: [
        "Under $5,000",
        "Under $10,000",
        "Under $25,000",
        "Over $50,000"
      ],
      checkbox: []
    };
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate();

      if (this.$refs.form.hasError) {
        this.formHasError = true;
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted"
        });
      }
    },
      loadingModelOptions(val, update) {
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
  }
};
</script>
