<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <div>
        <p class="text-bold text-h4 text-primary">Contact Information</p>
        <q-card class="text-center">
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-4 q-pa-md">
                <p class="text-bold text-grey-9">Account Information</p>
                <q-input dense rounded standout="bg-primary text-white text-bold" class="q-pa-sm" outlined v-model="name" hint="Full Name" readonly />
                <br>
                <q-input type="tel" dense rounded  class="q-pa-sm" outlined v-model="phone" label="Enter Your Phone Number" hint="Phone Number" :rules="[val => (val && val.length > 0) || 'Phone Number is required']" />
              </div>
              <div class="col-12 col-md-4 q-pa-md">
                <p class="text-bold text-grey-9">Residential Address</p>
                 <q-input dense rounded autogrow  class="q-pa-sm" outlined v-model="Residential.address" label="Enter Your Address" hint="Address" :rules="[val => (val && val.length > 0) || 'Address is required']" />
                   <br>
                 <q-input dense rounded  class="q-pa-sm" outlined v-model="Residential.city" label="Enter Your City" hint="City" :rules="[val => (val && val.length > 0) || 'City is required']" />
                   <br>
                 <q-select dense rounded rounded  class="q-pa-sm" outlined v-model="Residential.state" :options="states" hint="State" label="State" />
                 <br>
                 <q-input dense rounded  class="q-pa-sm" outlined v-model="Residential.zipcode" label="Enter Your Zip Code" hint="Zip Code" :rules="[val => (val && val.length > 0) || 'Zip Code is required']" />
                 <br>
                 <q-select dense rounded rounded  class="q-pa-sm" outlined v-model="Residential.country"  hint="Country" label=" Enter Your Country" readonly />
                 <br>
                    <q-toggle
                      v-model="toggle"
                      checked-icon="check"
                      color="primary"
                      label="Use my physical address as my mailing address"
                      class="text-grey-9"
                      unchecked-icon="clear"
                    />
              </div>
              <div class="col-12 col-md-4 q-pa-md" v-if="!toggle">
                <p class="text-bold text-grey-9">Mailing Address</p>
                 <q-input dense rounded autogrow class="q-pa-sm" outlined v-model="mail.address" label="Enter Your Address" hint="Address" :rules="[val => (val && val.length > 0) || 'Address is required']" />
                   <br>
                 <q-input dense rounded  class="q-pa-sm" outlined v-model="mail.city" label="Enter Your City" hint="City" :rules="[val => (val && val.length > 0) || 'City is required']" />
                   <br>
                 <q-select dense rounded rounded  class="q-pa-sm" outlined v-model="mail.state" :options="mailing_states" hint="State" label="State" />
                 <br>
                 <q-input dense rounded  class="q-pa-sm " outlined v-model="mail.zipcode" label="Enter Your Zip Code" hint="Zip Code" :rules="[val => (val && val.length > 0) || 'Zip Code is required']" />
                 <br>
                 <q-select dense rounded rounded  class="q-pa-sm" outlined v-model="mail.country"  hint="Country" label=" Enter Your Country" readonly />
              </div>
            </div>
          </q-card-section>
          <q-card-section>
             <q-btn  rounded color="primary" text-color="white" label="Update Information" no-caps style="width:60%" />
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
      name: this.$auth.user().full_name,
      phone: "",
      Residential:{
        address:"",
        city: "",
        state: "Abuja (FCT)",
        zipcode: "",
        country: "Nigeria"
      },
      mail:{
        name: "",
        phone: "",
        address:"",
        city: "",
        state: "Abuja (FCT)",
        zipcode: "",
        country: "Nigeria"
      },
        states: ["Abuja (FCT)", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
        mailing_states: ["Abuja (FCT)", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
        toggle: false
    };
  }
};
</script>
