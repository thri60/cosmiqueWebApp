<template>
  <q-page>
    <div class="q-pa-md text-center bg-white">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md absolute-top bg-transparent banner"
        style="height:100px"
      >
        <br />
        <div round class="q-pa-md text-primary text-h5 text-bold ">
          <b>| Submit Your Request |</b>
        </div>
      </q-img>
    </div>
    <br />
    <br />
    <div class="q-pa-md padding">
      <form @submit.prevent.stop="onSubmit">
        <q-stepper
          flat
          header-nav
          vertical
          v-model="step"
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="REQUEST VEHICLE"
            caption="Select vehicle & add info"
            icon="fas fa-car fa-2x"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div class="row">
              <div class="col-12 col-md-5 q-pa-md">
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Enter Make *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Make Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Vehicle Manufacturer Year*"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Vehicle Manufacturer Year Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="No. of Seats *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'No. of Seats  Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Vehicle Manufacturer Year*"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) ||
                      'Vehicle Manufacturer Year Please'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select No. of Gears *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select No. of Gears'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select Drive Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Drive Type'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select No. of Cylinders *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select No. of Cylinders'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select Fuel Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Fuel Type'
                  ]"
                />
              </div>
              <div class="col-12 col-md-5 q-pa-md">
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Enter Vehicle Model *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Vehicle Model'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select Body Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Body Type'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="No. of Doors *"
                  lazy-rules
                  :rules="[val => (val && val.length > 0) || 'No. of Doors']"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Vehicle Transmission Type *"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) || 'Vehicle Transmission Type'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Select Engine Type *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Select Engine Type'
                  ]"
                />
                <q-select
                  rounded
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Enter Engine Capacity *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Enter Engine Capacity *'
                  ]"
                />
              </div>
            </div>
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="step > 2"
            :header-nav="step > 2"
          >
            An ad group contains one or more ads which target a shared set of
            keywords.

          </q-step>

          <q-step
            :name="3"
            title="Create an ad"
            icon="add_comment"
            :header-nav="step > 3"
          >
            Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation class="text-right">
              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                rounded
                 icon-right="fa fa-angle-right"
                :label="step === 3 ? 'Submit Request' : 'Continue'"
              />
              <q-btn
                v-if="step > 1"
                flat
                rounded
                color="primary"
                @click="$refs.stepper.previous()"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </template>

          <template v-slot:message>
            <q-banner
              v-if="step === 1"
              class="bg-primary text-white q-px-lg text-h3"
            >
              <template v-slot:avatar>
                 <q-icon name="fas fa-car fa-2x" />
              </template>

              Add Vehicle Details...
            </q-banner>
            <q-banner v-else-if="step === 2" class="bg-grey text-white q-px-lg">
              The ad group helps you to...
            </q-banner>
            <q-banner v-else class="bg-blue-8 text-white q-px-lg">
              The final step is creating the ad...
            </q-banner>
          </template>
        </q-stepper>
      </form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  }
};
</script>
