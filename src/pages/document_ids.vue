<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-7 q-pa-md">
      <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="document" label="Document" />
          <q-tab name="ids" label="ID's" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="document">
            <q-card class="bg-grey-3 relative-position card-example">
              <q-card-section>
                <transition
                  appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <div v-show="showReturnData">
                    
                  </div>
                </transition>
              </q-card-section>

              <q-inner-loading :showing="visible">
                <q-spinner-dots size="50px" color="primary" />
              </q-inner-loading>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="ids">
            <div class="text-h6">ID s</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
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
      tab: 'document',
      visible: false,
      showReturnData: false
    };
  },

  methods: {
    loadingDocument () {
      this.visible = true
      this.showReturnData = false
      setTimeout(() => {
        this.visible = false
        this.showReturnData = true
      }, 3000)
    }
  },

  mounted() {
    this.loadingDocument()
  },
};
</script>
