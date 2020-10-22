<template>
  <q-page>
    <div class="q-pt-none">
      <q-img
        dim
        src="~assets/2.jpg"
        class="q-pa-md bg-transparent banner"
        style="height:100px"
      >
        <br />
        <div round class="q-pa-md text-white text-h5 text-bold ">
          <b>| Buy & Ship Your Car with Us |</b>
        </div>
      </q-img>
    </div>

    <br />

    <div>
      <q-splitter>
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-primary">
            <q-tab name="shipping_calculator" label="Shipping Calculator" />
            <q-tab
              name="Ground_transport"
              label="Ground Transportation process by Truck"
            />
            <q-tab
              name="Transport_time"
              label="Issues that Can Effect time of Transportation"
            />
            <q-tab name="Ocean_Transport" label="Ocean Transportation" />
            <q-tab name="port" label="Receiving your car at Destination Port" />
            <q-tab name="shipping_services" label="Shipping Services" />
            <q-tab name="vessel_tracking" label="Vessel Tracking" />
            <q-tab name="import" label="Import Process" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="shipping_calculator">
              <div class="text-h4 q-mb-md">Alarms</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
            <q-tab-panel name="Ground_transport">
              <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-6 q-pa-md">
                  <div class="text-h5 text-bold q-mb-md">
                    Ground Transportation process by Truck
                  </div>
                  <p>
                    <span class="text-bold">Vehicle pick up:</span> Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Sed optio
                    cumque, quia nam quae id commodi reprehenderit voluptates
                    temporibus quas magni incidunt impedit hic error veniam
                    asperiores ipsa, pariatur nihil.
                  </p>
                  <p>
                    <span class="text-bold">Note:</span> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Consectetur, delectus
                    accusantium aspernatur, eum quod maxime fugiat, nesciunt
                    error iste fuga minima quasi provident nihil. Possimus
                    praesentium illo accusamus repudiandae reiciendis!
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pa-md">
                  <q-img
                    src="~assets/truck.png"
                    spinner-color="white"
                    square
                    style="height: 280px; width: 400px"
                  />
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel class="text-justify" name="Transport_time">
              <div class="text-h5 text-bold q-mb-md">
                Issues Can Effect time of Transportation
              </div>
              <p>
                <span class="text-bold">Auction Vehicles:</span> If the vehicle
                is purchased from an auction the selling party has up to 30 days
                to turn in the title/ownership for the vehicle. This can cause
                significant delays for the shipping process as the vehicle will
                not be picked up until the title/ownership is present. Please
                ask an Auction Export representative if the vehicle
                title/ownership is present prior to purchase to avoid this
                delay.
              </p>
              <p>
                <span class="text-bold">Overground Delivery duration:</span>
                Certain areas of the U.S.A. have a seasonal or yearly low
                traffic volume increasing the amount of time elapsed between
                vehicle purchase and delivery to the warehouse or port. States
                with low traffic volume include, but are not limited to,
                Alabama, Louisiana, Mississippi, Arkansas, and Oklahoma. Delays
                can also occur due to bad weather conditions in the winter
                months. Please note that other potential delays can occur from
                truck breakdowns which are rare but unavoidable.
              </p>
              <p>
                <span class="text-bold">Snowbird Effect:</span> During the
                pre-winter months of October and December many retirees move
                their cars and furniture to Florida to spend the winter in a
                warmer climate. This limits the amount of empty trucks moving
                South along the Eastern shore of the U.S.A. To ports in Georgia
                and Florida causing the potential delays for vehicle delivery to
                ports and warehouses. This trend is reversed in the pre-summer
                months.
              </p>
              <p>
                <span class="text-bold">Port Delays:</span>Please be aware that
                delays can sometimes occur during the winter months when the
                ports are closed or there is lack of available containers due to
                bad weather conditions. Please note, NJ customs are overburdened
                due to very high volume, and delays with documentation are not
                uncommon. When shipping RORO there may be delays due to the
                large volume the shipping line is experiencing, in this case,
                the vehicle will be loaded onto the next vessel with available
                cargo space.
              </p>
            </q-tab-panel>
            <q-tab-panel class="text-justify" name="Ocean_Transport">
              <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-8 q-pa-md">
                  <div class="text-h5 text-bold q-mb-md">
                    Ocean Transportation
                  </div>
                  <p>
                    <span class="text-bold"> Container Shipping:</span> Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
                    quasi reiciendis? Reiciendis deserunt dolores, placeat
                    commodi ratione officia fugiat excepturi repellat, quaerat
                    minus perspiciatis eaque. Omnis repudiandae vitae ea quos!
                  </p>
                  <p>
                    <span class="text-bold">RORO:</span> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officia illum culpa
                    facere optio iusto eos obcaecati quaerat, id perferendis?
                    Corrupti voluptates libero voluptatum animi iste
                    perspiciatis quasi possimus molestiae nemo.
                  </p>
                </div>
                <div class="col-12 col-md-4 q-pa-md">
                  <q-img
                    src="~assets/cartruck.png"
                    spinner-color="white"
                    square
                    style="height: 150px; width: 200px"
                  />
                </div>
              </div>
              <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-4 q-pa-md">
                  <q-skeleton height="200px" square />
                </div>
                <div class="col-12 col-md-8 q-pa-md">
                  <p>
                    <span class="text-bold"> RORO:</span> Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Ullam, quasi reiciendis?
                    Reiciendis deserunt dolores, placeat commodi ratione officia
                    fugiat excepturi repellat, quaerat minus perspiciatis eaque.
                    Omnis repudiandae vitae ea quos!
                  </p>
                  <p>
                    <span class="text-bold">Nigeria:</span> Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Officia illum culpa
                    facere optio iusto eos obcaecati quaerat, id perferendis?
                    Corrupti voluptates libero voluptatum animi iste
                    perspiciatis quasi possimus molestiae nemo.
                  </p>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="port">
              <div class="text-h5 text-bold q-mb-md">
                Receiving your car at Destination Port
              </div>
              <p>
                <span class="text-bold">Container:</span> Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Iusto, asperiores officiis
                quaerat delectus mollitia ad quidem obcaecati voluptatibus
                itaque officia unde expedita quos aspernatur dolorem? Eligendi
                similique delectus facere explicabo.
              </p>
              <p>
                <span class="text-bold">RORO:</span>Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Delectus enim, consequatur ab
                eveniet expedita veritatis doloremque ullam, doloribus
                cupiditate, sequi laudantium ducimus? Quisquam minus veniam
                ducimus pariatur asperiores laboriosam necessitatibus.
              </p>
              <p>
                <span class="text-bold">Documents:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga alias earum laudantium temporibus mollitia doloribus sint
                natus suscipit molestias nam, optio neque possimus unde
                aspernatur cupiditate asperiores. Aut, incidunt.
              </p>
              <p>
                Please note Cosmique Autos does not provide customs clearance
                services at the destination country and it is the client's
                responsibility to clear their cargo.
              </p>
            </q-tab-panel>
            <q-tab-panel name="shipping_services">
              <div class="text-h5 text-bold q-mb-md">
                Shipping Services:
              </div>
              <div>
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    icon="fas fa-truck"
                    label="GROUND TRANSPORTATION"
                    header-class="text-primary text-bold"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="row">
                          <div class="col-12 col-md-8 q-pa-md">
                            <p>
                              <span class="text-bold">Vehicle pick up:</span>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sed optio cumque, quia nam quae
                              id commodi reprehenderit voluptates temporibus
                              quas magni incidunt impedit hic error veniam
                              asperiores ipsa, pariatur nihil.
                            </p>
                          </div>
                          <div class="col-12 col-md-4 q-pa-md">
                            <q-img
                              src="~assets/cartruck.png"
                              spinner-color="white"
                              square
                              style="height: 80px; width: 100px"
                            />
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                   <q-separator/>

                  <q-expansion-item
                    expand-separator
                    icon="directions_boat"
                    label="RORO"
                    header-class="text-primary text-bold"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="row">
                          <div class="col-12 col-md-4 q-pa-md">
                            <q-img
                              src="~assets/ship.png"
                              spinner-color="white"
                              square
                              style="height: 80px; width: 155px"
                            />
                          </div>
                          <div class="col-12 col-md-8 q-pa-md">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sed optio cumque, quia nam quae
                              id commodi reprehenderit voluptates temporibus
                              quas magni incidunt impedit hic error veniam
                              asperiores ipsa, pariatur nihil.
                            </p>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                   <q-separator/>

                  <q-expansion-item
                    expand-separator
                    icon="fas fa-square"
                    label="Container"
                    header-class="text-primary text-bold"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="row">
                          <div class="col-12 col-md-8 q-pa-md">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sed optio cumque, quia nam quae
                              id commodi reprehenderit voluptates temporibus
                              quas magni incidunt impedit hic error veniam
                              asperiores ipsa, pariatur nihil.
                            </p>
                          </div>
                          <div class="col-12 col-md-4 q-pa-md">
                            <q-img
                              src="~assets/container.png"
                              spinner-color="white"
                              square
                              style="height: 80px; width: 155px"
                            />
                          </div>
                          <div class="col-12 col-md-8 q-pa-md">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sed optio cumque, quia nam quae
                              id commodi reprehenderit voluptates temporibus
                              quas magni incidunt impedit hic error veniam
                              asperiores ipsa, pariatur nihil.
                            </p>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                   <q-separator/>

                  <q-expansion-item
                    header-class="text-primary text-bold"
                    icon="fas fa-plane"
                    label="AIRF"
                  >
                    <q-card>
                      <q-card-section>
                       <div class="row">
                        <div class="col-12 col-md-4 q-pa-md">
                            <q-img
                              src="~assets/plane.png"
                              spinner-color="white"
                              square
                              style="height: 130px; width: 260px"
                            />
                          </div>
                          <div class="col-12 col-md-8 q-pa-md">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sed optio cumque, quia nam quae
                              id commodi reprehenderit voluptates temporibus
                              quas magni incidunt impedit hic error veniam
                              asperiores ipsa, pariatur nihil.
                            </p>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
            </q-tab-panel>
            <q-tab-panel name="vessel_tracking">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
            <q-tab-panel name="import">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "shipping_calculator"
    };
  }
};
</script>
