<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <p class="text-bold text-h4 text-primary">Transactions</p>
      <q-card v-if="transactions > 0" class="my-card text-center q-pa-xl">
        <q-card-section>
          <q-card class="my-card">
            <q-card-section>
              <img src="" alt="" />
            </q-card-section>
            <q-card-section> </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
      <q-card v-else class="my-card text-center q-pa-xl">
        <q-card-section>
            <q-img src="~assets/transactions.svg" style="height: 100px; width: 250px" />
          <p class="text-bold text-h5">No Transactions Yet</p>
          <p class="text-grey-9">
            Sorry! You haven't made any transactions yet.
          </p>
          <q-btn rounded :to="{ name: 'search' }" color="primary" text-color="white" label="Check Inventory" />
        </q-card-section>
      </q-card>
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
      transactions: null
    };
  }
};
</script>
