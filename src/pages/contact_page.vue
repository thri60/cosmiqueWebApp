<template>
  <q-page>
    <div class="text-center bg-white">
      <div class="q-pt-none">
        <q-img
          dim
          src="~assets/2.jpg"
          class="q-pa-md bg-transparent banner"
          style="height:100px"
        >
          <br />
          <div round class="q-pa-md text-primary text-h5 text-bold ">
            <b>| Contact Us |</b>
          </div>
        </q-img>
      </div>

      <div class="row">
        <div class="col-12 col-md-7 q-pa-md">
          <div class="text-left q-pa-md">
            <div class="q-pa-md text-h5 text-weight-bolder">
              <b>Contact Form</b>
            </div>
            <q-separator inset />
            <p class="text-grey-8">
              Enter your comments through the form below, and our customer
              service professionals will contact you as soon as possible.
            </p>
            <form @submit.prevent.stop="onSubmit">
              <q-input
                class="q-pa-md"
                dense
                rounded
                outlined
                v-model="name"
                label="Your Name"
                hint="Your Full Name Please"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Your Fullname Please'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                class="q-pa-md"
                dense
                rounded
                outlined
                type="email"
                v-model="email"
                label="Email Address"
                hint="Your Email Address Please"
                :rules="[
                  val => (val && val.length > 0) || 'How can we mail you?'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
              <q-input
                class="q-pa-md"
                dense
                rounded
                outlined
                type="tel"
                v-model="phone"
                label="Phone No."
                hint="Your Phone Number Please"
                :rules="[
                  val => (val && val.length > 0) || 'How can we call you?'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="call" />
                </template>
              </q-input>
              <q-input
                class="q-pa-md"
                outlined
                rounded
                type="textarea"
                v-model="comment"
                label="Comments/Suggestions/Feedback"
                :rules="[
                  val =>
                    (val && val.length > 0) ||
                    'What message would like to send?'
                ]"
              >
              </q-input>
              <div class="q-pa-xs">
                <q-btn
                  type="submit"
                  label="Submit Now"
                  rounded
                  color="primary"
                  icon-right="send"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-5 q-pa-md">
          <div class="q-pa-md">
            <q-card class="q-pa-md bg-grey-1 " flat>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-left text-bold"
                    >OPENING HOURS</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-card-section horizontal>
                <q-card-section class="text-left">
                  <p class="text-left text-bold">Sales Department</p>
                  <p class="text-grey-8">Mon-Sat : 8:00am - 5:00pm</p>
                  <p class="text-grey-8">Sunday is closed</p>
                </q-card-section>

                <q-card-section class="text-left col-6">
                  <p class="text-left text-bold">Service Department</p>
                  <p class="text-grey-8">Mon-Sat : 8:00am - 5:00pm</p>
                  <p class="text-grey-8">Sunday is closed</p>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="q-pa-md">
            <q-card flat class="bg-grey-1">
              <q-card-section class="text-left q-pa-xl">
                <p class="text-left text-bold">
                  <i class="text-primary fas fa-home"></i> &nbsp; ADDRESS
                </p>
                <p class=" text-grey-8">
                  0th St, Suite 000 Los Angeles, California, USA
                </p>
                <p>
                  <i class="text-primary fas fa-phone-alt"></i> &nbsp;
                  <b>PHONE</b> &nbsp; &nbsp;
                  <span class="text-grey-8">1-800- 000-0000</span>
                </p>
                <p>
                  <i class="text-primary fas fa-fax"></i> &nbsp;
                  <b>FAX</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                    class="text-grey-8"
                    >1-800- 000-0000</span
                  >
                </p>
                <p>
                  <i class="text-primary fas fa-envelope"></i> &nbsp;
                  <b>EMAIL</b> &nbsp; &nbsp; &nbsp; &nbsp;<span
                    class="text-grey-8"
                    >info@cosmiqueautos.com</span
                  >
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Sales Department"
        >
          <q-card>
            <q-card-section>
                   <div class="row">
        <div class="col-12 col-md-4 q-pa-md">
          <div class="text-h6 text-center text-primary text-bold">
               <i class="text-primary fas fa-language"></i>  &nbsp;  LANGUAGE
          </div>
          <div class="text-center">
            English
          </div>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <div class="text-h6 text-center text-primary text-bold">
            <i class="text-primary fas fa-phone-alt"></i> PHONE NUMBER
          </div>
          <div class="text-center">
            1-800- 000-0000
          </div>
        </div>
        <div class="col-12 col-md-4 q-pa-md">
          <div class="text-h6 text-center text-primary text-bold">
            <i class="text-primary fas fa-envelope"></i> EMAIL ADDRESS
          </div>
          <div class="text-center">
            sales@cosmiqueautos.com
          </div>
        </div>
      </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
          expand-separator
          icon="signal_wifi_off"
          label="Wifi settings"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

            <q-separator />

        <q-expansion-item
          expand-separator
          icon="drafts"
          label="Drafts"
          header-class="text-purple"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item icon="assessment" label="Disabled">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      comment: ""
    };
  }
};
</script>
