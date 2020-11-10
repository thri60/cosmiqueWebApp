<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <q-intersection>
        <span class="text-h4 text-primary text-bold">Increase My Bidding Limit</span>
        <q-banner inline-actions rounded class="bg-grey-3 text-black">
          To place a bid you must first set your Bidding Limit to $4,000 USD
          with a security deposit of $400 USD
        </q-banner>
        <div class="q-pt-lg">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-center text-grey-9">
                Move slider to adjust <span class="text-bold text-black"> Bidding Limit  </span>
              </div>
            </q-card-section>
            <q-card-section>
              <q-slider
                v-model="bidding_limit"
                :min="500"
                :max="100000"
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
          <div class="col-12 col-md-3 q-pa-md">
            <span class="text-h6">{{
              bidding_limit.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })
            }}</span>
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
