<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-9 q-pa-md">
      <p class="text-bold text-h4 text-primary">Bids</p>
      <div class="q-gutter-y-md">
        <q-option-group
          v-model="panel"
          inline
          :options="[
            { label: 'Active', value: 'active' },
            { label: 'Won', value: 'won' },
            { label: 'Lost', value: 'lost' }
          ]"
        />

        <q-tab-panels
          v-model="panel"
          animated
          class="shadow-2 rounded-borders"
          style="height:300px"
        >
          <!-- active tab -->
          <q-tab-panel
            name="active"
            class="text-center q-pa-xl"
            v-if="active > 0"
          >
          </q-tab-panel>
          <q-tab-panel name="active" class="text-center q-pa-xl" v-else>
            <q-icon name="gavel" size="4em" color="primary" />
            <p class="text-bold text-h5">You do not have any Active bids</p>
            <q-btn
              rounded
              :to="{ name: 'auction' }"
              color="primary"
              text-color="white"
              label="Find Vehicle"
              style="width:60%"
            />
          </q-tab-panel>

          <!-- won tab -->
          <q-tab-panel name="won" class="text-center q-pa-xl" v-if="active > 0">
          </q-tab-panel>
          <q-tab-panel name="won" class="text-center q-pa-xl" v-else>
            <q-icon name="gavel" size="4em" color="primary" />
            <p class="text-bold text-h5">You do not have any Won bids</p>
            <q-btn
              rounded
              :to="{ name: 'auction' }"
              color="primary"
              text-color="white"
              label="Find Vehicle"
              style="width:50%"
            />
          </q-tab-panel>

          <!-- lost tab  -->
          <q-tab-panel
            name="lost"
            class="text-center q-pa-xl"
            v-if="active > 0"
          >
          </q-tab-panel>
          <q-tab-panel name="lost" class="text-center q-pa-xl" v-else>
            <q-icon name="gavel" size="4em" color="primary" />
            <p class="text-bold text-h5">You do not have any Lost bids</p>
            <q-btn
              rounded
              :to="{ name: 'auction' }"
              color="primary"
              text-color="white"
              label="Find Vehicle"
              style="width:50%"
            />
          </q-tab-panel>
        </q-tab-panels>
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
      panel: "active",
      active: null,
      won: null,
      lost: null
    };
  }
};
</script>
