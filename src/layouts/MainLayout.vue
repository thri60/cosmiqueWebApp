<template>
  <q-layout  view="lhr Lpr fFf">
    <q-header reveal elevated class="q-py-sm ">
      <q-toolbar>
        <q-toolbar-title>
          <div style="padding: 4px">
            <b><q-img src="~assets/logo.png" style="height: 14px; max-width: 50px" />
             Cosmique Autos</b> <br />
            <p style="font-size: 10px">
              All Makes & Models. Bid Now! Worldwide Shipping
            </p>
          </div>
        </q-toolbar-title>

        <div class="gt-sm">
          <q-btn
            :to="{ name: 'homepage' }"
            rounded
            flat
            class="q-mr-xs"
            color="white"
            text-color="white"
            label="Home"
          />
          <q-btn-dropdown
            flat
            color="white"
            text-color="white"
            label="Auto Inventory"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>New Autos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Used Autos</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            flat
            color="white"
            text-color="white"
            label="Auto Parts"
          >
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
          <q-btn
            rounded
            flat
            :to="{ name: 'auction'}"
            class="q-mr-xs"
            color="white"
            text-color="white"
            label="AUCTIONS"
          />
          <q-btn
            rounded
            flat
            class="q-mr-xs"
            color="white"
            text-color="white"
            label="COMPARE"
          />
          <q-btn
            rounded
            flat
            class="q-mr-xs"
            color="white"
            text-color="white"
            label="Request"
          />
          <q-btn
            rounded
            flat
            class="q-mr-xs"
            color="white"
            text-color="white"
            label="Contact"
          /> || &nbsp;
          <q-btn
            rounded
            class="q-mr-xs btn-fixed-width"
            align="around"
            color="white"
            text-color="primary"
            icon="shopping_cart"
            label="CART"
          ></q-btn>
        </div>
        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Cosmique Autos
        </q-item-label>
        <q-item clickable v-ripple :to="{ name: 'homepage' }">
          <q-item-section avatar>
            <q-icon color="primary" name="chrome_reader_mode" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="view_carousel"
          label="Auto Inventory"
        > 
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="assessment" />
            </q-item-section>
            <q-item-section>New Autos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="assessment" />
            </q-item-section>
            <q-item-section>Used Autos</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item clickable v-ripple :to="{ name: 'auction' }">
          <q-item-section avatar>
            <q-icon color="primary" name="assessment" />
          </q-item-section>
          <q-item-section>Auctions</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>


