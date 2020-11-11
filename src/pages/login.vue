<template>
  <q-page class="row justify-center items-center login_bg">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card class="shadow-24" style="min-width:350px;">
          <q-card-section class="bg-primary">
            <h4 class="text-h5 text-bold text-white q-my-md">LOGIN</h4>
          </q-card-section>
          <q-card-section>
            <q-input
              class="q-pa-md"
              dense
              square
              clearable
              v-model="form.email"
              type="email"
              label="Email"
              :rules="[val => (val && val.length > 0) || 'Your Email is Required']"
              @keyup.enter="login"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              class="q-pa-md"
              dense
              square
              v-model="form.password"
              label="Password"
              :type="isPwd ? 'password' : 'text'"
              @keyup.enter="login"
              :rules="[
                val => (val && val.length > 0) || 'Your Password is Required'
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
                <q-icon name="fab fa-google" size="1.2rem" />
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
              @click="login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
             <q-btn no-caps dense class="text-grey-8" size="md" flat :to="{ name: '' }" label="Forgot your password?" />
             <q-space />
             <q-btn no-caps dense class="text-grey-8" size="md" flat :to="{ name: 'register' }" label="Don't have an account yet?" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      isPwd: true
    };
  },
  methods: {
    login() {
      if (this.form.email == "") {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "email field is empty",
          icon: "error"
        });
      }
      if (this.form.password == "") {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "password field is empty",
          icon: "error"
        });
      }

      this.axios.post('auth/login', this.form).then(response => {
        if (response.data.status == false) {
          this.$q.notify({
            message: response.data.message,
            color: "negative",
            position: "top",
            icon: "error"
          });
          console.log(response.data);
        } else {
          this.$auth.login({
            url: "/auth/login",
            redirect: "/account/bidding_account_limit",
            data: this.form,
            success: response => {
              this.$auth.user(response.data.user);
              this.$auth.token("access_token", response.data.token);
              this.$q.notify({
                message: "you have been logged in successfully!",
                color: "purple",
                icon: "person",
                position: "top"
              });
            },
            error: error => {
              this.loading = false;

              this.$q.notify({
                message: response.data.message,
                icon: "error",
                color: "negative",
                position: "top"
              });
            },
            fetchUser: false
          });
        }
      });
    }
  }
};
</script>

<style lang="css">
.login_bg{
  background-image: url("/bg2.webp");
  background-position:  0 0;
  background-repeat: no-repeat;
  background-size: auto;
}

</style>
