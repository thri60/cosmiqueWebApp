<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md">
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
            <q-range
              v-model="rangeSnap"
              :min="0"
              :max="100"
              :step="5"
              drag-range
              label
              markers
              snap
              color="lime"
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
      rangeSnap: {
        min: 300,
        max: 40000
      }
    };
  }
};
</script>
