<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3 q-pa-md gt-sm">
      <sidebar />
    </div>
    <div class="col-12 col-md-7 q-pa-md">
      <div class="row">
        <div class="col-12 col-md-6 q-pa-md">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-subtitle2">Change Email</div>
            </q-card-section>
            <q-card-section>
              <q-input
                rounded
                class="q-pa-md"
                outlined
                v-model="updateEmail.current_email"
                readonly
                type="text"
              />
              <q-input
                rounded
                class="q-pa-md"
                outlined
                v-model="updateEmail.new_mail"
                type="text"
                label="New Email"
                :rules="[val => (val && val.length > 0) || 'Your new email']"
              >
                <template v-slot:prepend>
                  <q-icon name="alternate_email" />
                </template>
              </q-input>
              <q-input
                rounded
                class="q-pa-md"
                outlined
                v-model="updateEmail.password"
                unelevated
                :type="isPwd ? 'password' : 'text'"
                label="Current Password"
                :rules="[
                  val => (val && val.length > 0) || 'Your current password'
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
              <q-btn
                color="primary full-width"
                rounded
                text-color="white"
                label="change email"
                @click="change_email"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6 q-pa-md">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-subtitle2">Change Password</div>
            </q-card-section>
            <q-card-section>
              <q-input
                rounded
                class="q-pa-md"
                outlined
                v-model="form.current_password"
                unelevated
                :type="isPwd ? 'password' : 'text'"
                label="current password"
                :rules="[
                  val => (val && val.length > 0) || 'Your current password'
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
                rounded
                class="q-pa-md"
                outlined
                v-model="form.new_password"
                unelevated
                :type="isPwd ? 'password' : 'text'"
                label="New Password"
                :rules="[val => (val && val.length > 0) || 'Your new password']"
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
              <q-btn
                color="primary full-width"
                rounded
                text-color="white"
                label="change password"
              />
            </q-card-section>
          </q-card>
        </div>
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
      isPwd: true,
      updateEmail:{},
      form: {
        current_email: this.$auth.user().email
      }
    };
  },

  methods: {
    change_email(){
      
    }
  },
};
</script>
