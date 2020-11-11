<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <p class="text-bold text-h4 text-primary">Watchlist</p>
      <q-card v-if="watchlist > 0" class="my-card text-center q-pa-xl">
        <q-card-section>
          <q-card class="my-card">
            <q-card-section>
            <img src="" alt="">
            </q-card-section>
            <q-card-section>

            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
      <q-card v-else class="my-card text-center q-pa-xl">
        <q-card-section>
          <q-icon name="favorite_border" size="4em" color="primary" />
          <p class="text-bold text-h5">Watchlist is empty</p>
          <p class="text-grey-9">
            Sorry! You did not add any items to your watchlist
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
      watchlist: null,
    };
  }
};
</script>
