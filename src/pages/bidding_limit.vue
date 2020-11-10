<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <q-intersection>
        <span class="text-h4 text-primary text-bold"
          >Increase My Bidding Limit</span
        >
        <q-banner inline-actions rounded class="bg-grey-3 text-black">
          <p class="text-bold text-h6">
            <q-icon name="monetization_on" size="2em" color="primary" />Your
            Available Bidding Limit is $0
          </p>
          <p class="text-h6 text-grey-9">
            To place a bid you must first set your Bidding Limit to $4,000 USD
            with a security deposit of $400 USD
          </p>
        </q-banner>
        <div class="q-pt-lg">
          <q-card bordered flat class="my-card">
            <q-card-section>
              <div class="text-center text-grey-9">
               <q-icon name="west" />
                Move slider to adjust
               <span class="text-bold text-black"> Bidding Limit </span>
                <q-icon name="east" />
              </div>
            </q-card-section>
            <q-card-section>
              <q-slider
                v-model="bidding_limit"
                class="text-bold"
                :min="500"
                :max="50000"
                :step="4"
                label
                :label-value="
                  bidding_limit.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })
                "
                label-always
                color="orange"
              />
            </q-card-section>
          </q-card>
          <div class="col-12 col-md-3">
            <q-card flat  class="bg-grey-2">
              <q-card-section>
                <span class="text-h5 text-bold">{{
                  bidding_limit.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })
                }}</span>
              </q-card-section>
              <q-card-section class="text-center">
                 <q-btn rounded color="primary" text-color="white" label="Increase My Bidding Limit" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-intersection>
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
      bidding_limit: 500
    };
  }
};
</script>

