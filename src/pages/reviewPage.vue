<template>
  <q-page padding>
    <div class="q-pt-none">
      <q-img
        dim
        src="~assets/reviews.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:250px"
      >
        <div round class="q-pa-xl text-primary text-h5 text-bold ">
          <b>| What our customers are saying |</b>
        </div>
      </q-img>
    </div>
    <div class="row">
      <div class="col-12 col-md-9">
          <p class="text-h4 text-primary text-bold">Customer Testimonials</p>
        <div class="row">
          <div class="col-12 col-md-4 q-pa-md">
            <q-card class="my-card">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div class="text-h6 q-mb-xs">Michael I.</div>
                  <div class=" no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                    <!-- <q-btn flat round color="primary" icon="star" /> -->
                  </div>
                </q-item-section>
              </q-item>
              <q-card-section>
                <div class="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  atque recusandae nobis inventore mollitia, adipisci
                  consequuntur, error omnis veritatis incidunt qui aliquam
                  maxime distinctio est corrupti ipsam alias neque iste?
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pa-md">
            <q-card class="my-card">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div class="text-h6 q-mb-xs">Michael I.</div>
                  <div class=" no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                    <!-- <q-btn flat round color="primary" icon="star" /> -->
                  </div>
                </q-item-section>
              </q-item>
              <q-card-section>
                <div class="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  atque recusandae nobis inventore mollitia, adipisci
                  consequuntur, error omnis veritatis incidunt qui aliquam
                  maxime distinctio est corrupti ipsam alias neque iste?
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pa-md">
            <q-card class="my-card">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div class="text-h6 q-mb-xs">Michael I.</div>
                  <div class=" no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                    <!-- <q-btn flat round color="primary" icon="star" /> -->
                  </div>
                </q-item-section>
              </q-item>
              <q-card-section>
                <div class="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  atque recusandae nobis inventore mollitia, adipisci
                  consequuntur, error omnis veritatis incidunt qui aliquam
                  maxime distinctio est corrupti ipsam alias neque iste?
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pa-md">
            <q-card class="my-card">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div class="text-h6 q-mb-xs">Michael I.</div>
                  <div class=" no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                    <!-- <q-btn flat round color="primary" icon="star" /> -->
                  </div>
                </q-item-section>
              </q-item>
              <q-card-section>
                <div class="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  atque recusandae nobis inventore mollitia, adipisci
                  consequuntur, error omnis veritatis incidunt qui aliquam
                  maxime distinctio est corrupti ipsam alias neque iste?
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pa-md">
            <q-card class="my-card">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <div class="text-h6 q-mb-xs">Michael I.</div>
                  <div class=" no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="stars"
                      :max="5"
                      color="primary"
                    />
                    <!-- <q-btn flat round color="primary" icon="star" /> -->
                  </div>
                </q-item-section>
              </q-item>
              <q-card-section>
                <div class="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  atque recusandae nobis inventore mollitia, adipisci
                  consequuntur, error omnis veritatis incidunt qui aliquam
                  maxime distinctio est corrupti ipsam alias neque iste?
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <q-card class="my-card q-pa-md">
        <q-card-section>
        customer review
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
      stars: 4.5
    };
  }
};
</script>
