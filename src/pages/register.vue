<template>
   <q-page class="row justify-center items-center">
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
                v-model="name"
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
                v-model="phone"
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
              <q-input
                class="q-pa-md"
                dense
                square
                clearable
                v-model="confirm_password"
                label="Confirm Password"
                :type="isPwd ? 'password' : 'text'"
                :rules="[
                    val => (val && val.length > 0) || 'Check Your Password Please'
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
            <q-btn unelevated rounded color="primary" class="full-width text-white" label="Get Started" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
             <a href="/login"> <p  class="text-grey-6">Return to login</p></a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirm_password: '',
       isPwd: true,
    }
  }
}
</script>

<style>
</style>
