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
          <q-btn-dropdown
            rounded
            ripple
            color="primary"
            label="Check Inventory"
          >
            <q-list separator>
              <q-item clickable>
                <q-btn-dropdown no-caps flat dense label="Auto Inventory">
                  <q-list class="bg-white">
                    <q-item clickable :to="{ name: 'auction' }">
                      <q-item-section>
                        <q-item-label>Auction</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label>Used Autos</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-item>
              <q-item clickable>
                <q-btn-dropdown no-caps flat dense label="Auto Parts Inventory">
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
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
