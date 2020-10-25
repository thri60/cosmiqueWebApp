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
          <q-tab name="document" label="Document" @click="loadingDocument" />
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
                    <q-card class="my-card text-center">
                      <q-card-section>
                        <i class="fas fa-7x fa-file-image q-pa-md justify-center"></i>
                        <div class="text-subtitle2">You do not have any documents yet</div>
                      </q-card-section>
                      <q-card-section>
                          <q-btn rounded color="primary text-center" :to="{ name: 'auction'}" label="find a vehicle" />
                      </q-card-section>
                    </q-card>
                  </div>
                </transition>
              </q-card-section>

              <q-inner-loading :showing="visible">
                <q-spinner-dots size="50px" color="primary" />
              </q-inner-loading>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="ids">
            <q-banner inline-actions rounded class="bg-red-4 text-white">
              <span>Upload Government issued photo ID to start bidding.</span><br>
              A photo ID is required to be on file for all vehicle sales by state and federal law, to prevent instances of fraud and/or theft.
            </q-banner>
            <br>
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  components: {
    sidebar,
    vueDropzone: vue2Dropzone
  },

  data() {
    return {
      tab: 'document',
      visible: false,
      showReturnData: false,
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          maxFilesize: 2, // MB
          maxFiles: 4,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true,
          thumbnailWidth: 150,
          maxFilesize: 0.5,
      }
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
