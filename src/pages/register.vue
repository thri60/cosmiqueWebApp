<template>
  <q-page class="row justify-center items-center login_bg">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card round class="shadow-24" style="min-width:350px;">
          <q-card-section class="bg-primary">
            <h4 class="text-bold text-h5 text-white q-my-md">Registration</h4>
          </q-card-section>
          <q-card-section>
            <q-input
              class="q-pa-md"
              dense
              square
              clearable
              v-model="form.fullname"
              label="Full Name"
              :rules="[
                val => (val && val.length > 0) || 'Your Full Name Please'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              class="q-pa-md"
              dense
              square
              clearable
              v-model="form.email"
              type="email"
              label="Email"
              :rules="[val => (val && val.length > 0) || 'Your Email Please']"
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
              v-model="form.phone"
              type="tel"
              label="Phone Number"
              :rules="[
                val => (val && val.length > 0) || 'Your Phone Number  Please'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="call" />
              </template>
            </q-input>
            <q-input
              class="q-pa-md"
              dense
              square
              clearable
              v-model="form.password"
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
                <q-icon name="fab fa-google" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              @click="create_account"
              rounded
              color="primary"
              class="full-width text-white"
              label="Get Started"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <a href="/login"> <p class="text-grey-6">Return to login</p></a>
          </q-card-section>
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
      name: "",
      phone: "",
      password: "",
      isPwd: true,
      form: {
        fullname: "",
        email: "",
        password: "",
        phone: ""
      }
    };
  },

  methods: {
    create_account(){
      this.axios.post('auth/create_account', this.form)
        .then(response => {
          if(response.data.status == false){
            this.$q.notify({
              position: 'top',
              icon: 'person',
              message: response.data.message,
              color: 'negative'
            })
          } else {
            this.$q.notify({
              position: 'top',
              icon: 'person',
              message: response.data.message,
              color: 'secondary'
            })
            this.$router.push({ name: 'login'})
          }
        })
    }
  },
};
</script>

<style></style>
