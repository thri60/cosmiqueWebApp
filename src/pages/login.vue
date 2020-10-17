<template>
  <q-page class="row justify-center items-center">
    <div>
      <div class="row">
        <q-card square class="shadow-24" style="min-width:350px;">
           <q-form @submit.prevent.stop="onSubmit" >
          <q-card-section class="bg-primary">
            <h4 class="text-h5 text-bold text-white q-my-md">SIGN IN</h4>
          </q-card-section>
          <q-card-section>
              <q-input
                class="q-pa-md"
                dense
                square
                clearable
                v-model="email"
                type="email"
                label="Email"
                :rules="[
                    val => (val && val.length > 0) || 'Your Email Please'
                  ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                class="q-pa-md"
                dense
                square
                clearable
                v-model="password"
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                :rules="[
                    val => (val && val.length > 0) || 'Your Password Please'
                  ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn dense round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn dense round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn dense round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              dense
              rounded
              unelevated
              type="submit"
              size="lg"
              color="primary"
              class="full-width text-white"
              label="Sign In"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
           </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      username: "",
       password: '',
      isPwd: true,
    };
  },
    methods: {
        onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true;
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted"
        });
      }
    }
  },
};
</script>
