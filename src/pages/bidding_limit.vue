<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-7 q-pa-md">
      <span class="text-h6">Increase My Bidding Limit</span>
      <q-banner inline-actions rounded class="bg-grey text-white">
        Your Available Bidding Limit is $0 <br />
        To place a bid you must first set your Bidding Limit to $4,000 USD with
        a security deposit of $400 USD
      </q-banner>
      <div class="q-pt-lg">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-subtitle2">
              Move slider to adjust Bidding Limit
            </div>
          </q-card-section>
          <q-card-section>
             <q-slider
                v-model="bidding_limit"
                :min="500"
                :max="100000"
                :step="4"
                label
                :label-value="(bidding_limit).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })"
                label-always
                color="orange"
              />
          </q-card-section>
        </q-card>
        <div class="col-12 col-md-3 q-pa-md">
          <span class="text-h6">{{ (bidding_limit).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }) }}</span>
        </div>
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
      bidding_limit: 10,
    };
  }
};
</script>
