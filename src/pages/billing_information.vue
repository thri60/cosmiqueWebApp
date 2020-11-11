<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <div>
        <span class="text-h4 text-primary text-bold">Billing Information</span>
        <q-banner inline-actions rounded class="bg-grey-3 text-black">
          <p class="text-bold text-h6">
            Your information is 100% secure
          </p>
          <div class="row">
            <div class="text-justify col-12 col-md-10 q-pa-md">
              Cosmique Autos uses industry-leading security protocols to protect
              all online forms, transmission, and databases from tampering. Your
              credit card information is transmitted securely using SSL
              encryption to the credit card processing center like millions of
              others
            </div>
            <di class="col-12 col-md-2">
              <q-img
                src="~assets/verisign.svg"
                style="height: 85px; width: 85px"
              />
            </di>
          </div>
        </q-banner>
      </div>
      <br />
      <div v-if="card1">
        <q-card class="my-card bg-grey-1">
          <q-card-section>
            <div class="text-center">
              <p>
                <q-icon
                  name="far fa-credit-card"
                  class="text-grey-4"
                  size="xl"
                />
              </p>
              <q-btn
                @click="payment"
                rounded
                color="primary"
                text-color="white"
                label="Add New Card"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div v-if="!payment_tab">
        <q-card class="text-center">
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-6 q-pa-md">
                <p class="text-bold text-grey-9">Card Information</p>
                <q-input
                  dense
                  rounded
                  standout="bg-primary text-white text-bold"
                  class="q-pa-sm"
                  outlined
                  v-model="card.name"
                  :label="this.$auth.user().full_name"
                  hint="Name on Card"
                  readonly
                />
                <br />
                <q-input
                  type="tel"
                  dense
                  rounded
                  class="q-pa-sm"
                  outlined
                  mask="#### #### #### #### ####"
                  v-model="card.cardnumber"
                  label="Enter Your Card Number"
                  hint="Card Number"
                  :rules="[
                    val => (val && val.length > 0) || 'Card Number is required'
                  ]"
                />
                <br />
                <div class="row">
                  <div class="col">
                    <q-input
                      mask="##/##"
                      dense
                      rounded
                      class="q-pa-md"
                      outlined
                      v-model="card.expirationDate"
                      label="MM/YY"
                      hint="Expiration Date"
                      :rules="[
                        val =>
                          (val && val.length > 0) ||
                          'Expiration Date is required'
                      ]"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      mask="###"
                      dense
                      rounded
                      class="q-pa-md"
                      outlined
                      v-model="card.cvv"
                      label="CVV"
                      hint="Card Number"
                      :rules="[
                        val => (val && val.length > 0) || 'CVV is required'
                      ]"
                    />
                  </div>
                </div>

                <br />
              </div>
              <div class="col-12 col-md-6 q-pa-md">
                <p class="text-bold text-grey-9">Billing Address</p>
                <q-input
                  dense
                  rounded
                  autogrow
                  class="q-pa-sm"
                  outlined
                  v-model="card.address"
                  label="Enter Your Address"
                  hint="Address"
                  :rules="[
                    val => (val && val.length > 0) || 'Address is required'
                  ]"
                />
                <br />
                <q-input
                  dense
                  rounded
                  class="q-pa-sm"
                  outlined
                  v-model="card.city"
                  label="Enter Your City"
                  hint="City"
                  :rules="[
                    val => (val && val.length > 0) || 'City is required'
                  ]"
                />
                <br />
                <div class="row">
                  <div class="col">
                    <q-select
                      dense
                      rounded
                      rounded
                      outlined
                      class="q-pa-md"
                      v-model="card.state"
                      :options="states"
                      hint="State"
                      label="State"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      dense
                      rounded
                      outlined
                      class="q-pa-md"
                      v-model="card.zipcode"
                      label="Enter Your Zip Code"
                      hint="Zip Code"
                      :rules="[
                        val => (val && val.length > 0) || 'Zip Code is required'
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-btn
              rounded
              color="primary"
              text-color="white"
              label="Save Card Information"
              no-caps
              style="width:60%"
            />
            <br />
            <q-btn
              @click="payment"
              no-caps
              flat
              dense
              text-color="black"
              label="Cancel"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
export default {
  components: {
    sidebar
  },
  data() {
    return {
      card1: true,
      payment_tab: true,
      card: {
        name: "",
        cardnumber: "",
        expirationDate: "",
        cvv: "",
        address: "",
        city: "",
        state: "Abuja (FCT)",
        zipcode: "",
        country: "Nigeria"
      },
      states: [
        "Abuja (FCT)",
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ]
    };
  },
  methods: {
    payment() {
      this.payment_tab = !this.payment_tab;
      this.card1 = !this.card1;
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
