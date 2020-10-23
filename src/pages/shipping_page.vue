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

    <div class="q-pa-xl gt-sm">
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
                Issues that Can Effect time of Transportation
              </div>
              <p>
                <span class="text-bold">Auction Vehicles:</span> If the vehicle
                is purchased from an auction the selling party has up to 30 days
                to turn in the title/ownership for the vehicle. This can cause
                significant delays for the shipping process as the vehicle will
                not be picked up until the title/ownership is present. Please
                ask an Cosmique Autos representative if the vehicle
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

                  <q-separator />

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
                  <q-separator />

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
                  <q-separator />

                  <q-expansion-item
                    header-class="text-primary text-bold"
                    icon="fas fa-plane"
                    label="AIR"
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
              <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-8 q-pa-md">
                  <div class="text-h5 text-bold q-mb-md">
                    Vessel Tracking
                  </div>
                  <p>
                    <span class="text-bold"> Vessel tracking: </span> Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
                    quasi reiciendis? Reiciendis deserunt dolores, placeat
                    commodi ratione officia fugiat excepturi repellat, quaerat
                    minus perspiciatis eaque. Omnis repudiandae vitae ea quos!
                  </p>
                </div>
                <div class="col-12 col-md-4 q-pa-md">
                  <q-skeleton height="200px" square />
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="import">
              <div class="text-h4 q-mb-md">Import Process</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
             <div>
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    label="CONTAINER CONSOLIDATION"
                    header-class="text-primary text-h5 text-bold"
                    default-opened
                  >
                    <q-card>
                      <q-card-section>
                        <div>
                          <div class="q-pa-md">
                            <p class="text-h5 text-bold text-primary">General Information</p>
                            <p>
                              <span class="text-bold">Before Vessel Arrives:</span>
                             <ul>
                               <li>Container information is given to the agent by Cosmique Autos.</li>
                               <li>Customs gives the agent an estimated value.</li>
                               <li>Later, customs inspects the goods to confirm if there is any discrepancy. If anything contrary is found, customs will raise the value by giving DN (debit note). Additional customs Duty would have to be paid.</li>
                               <li>The agent then contacts the clients, so they can make payments towards the clearing of their vehicles. This should be done at least two weeks before the arrival of the container in order to avoid delays and extra charges.</li>
                             </ul>
                             <p>There is no exact value amount stipulated for vehicles. They are charged based on the weight, year, make, model and sometimes condition of the car.</p>
                            </p>
                          </div>
                          <div class="text-center">
                          <span class="text-bold text-h5 text-primary">Steps to Pick up your Vehicle</span>
                          <p>Note: ‎Container clearing takes an estimated 3-5 working days.</p>
                          <ol class="text-bold text-justify text-h5">
                            <li>	Vessel arrives and containers are discharged and taken to the container terminal.</li>
                            <li>	The container is booked for examination.</li>
                            <li>	The container is examined.</li>
                            <li>	Nigeria Customs gives valuation for each car in the container.</li>
                            <li>	The Container is released.</li>
                            <li>  Shipping company payments are made and documents are received.</li>
                            <li>	Exit is confirmed at the gate. Agent takes delivery of the goods for distribution to the respective owners.</li>
                          </ol>
                          </div>
                          <p>* More so, clients can go to the custom office to confirm the valuation of their cars.</p>
                          <p class="text-justify">Valuation is a customs written document given to agents. It enables them to know the amount needed to be paid. Customs has its own data/information for all cars being imported into the country, so there is no need to declare the value of the vehicles on the Bill of Lading.</p>
                          <p>Individuals are not allowed to handle the valuation of a car except the official custom officer.</p>
                          <p class="text-bold text-h5 text-primary">You may pay the following charges based on customs valuation:</p>
                          <ul>
                            <li>Import duty is 35% of custom valuation of a car.</li>
                            <li>Ecowas levy is 5%‎</li>
                            <li>Port levy is 7 %</li>
                            <li>Vat is 5%</li>
                          </ul>
                       </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-separator />

                  <q-expansion-item
                    expand-separator
                    label="RORO SHIPPING"
                    header-class="text-primary text-h5 text-bold"
                  >
                    <q-card>
                      <q-card-section>
                        <div>
                           <p class="text-h5 text-bold text-primary">General Information</p>
                             <p>Please, contact your designated clearing agent before the vessel arrives to get more information about clearing and local charges.</p>
                              <p>Please note that Auction Export does not handle clearing at destination. For more information about customs please click on the following link (https://www.customs.gov.ng)</p>
                          </div>
                          <div class="text-center">
                          <span class="text-bold text-h5 text-primary">Steps to pick up your Vehicle arrived by RORO:</span>
                           <ol class="text-bold text-justify text-h5">
                            <li>	Original bill of lading is being overnight to the client <a href="http://www.auctionexport.com/Images/Other/ImportProcess_BillOfLading.jpg">view sample</a></li>
                            <li>		Vessel arrives to the terminal.</li>
                            <li>		Cars are taken to the terminal park.</li>
                            <li>	Customs inspection. Charges given to clients by their agents.</li>
                            <li>		Client makes payment.</li>
                            <li>  	Client takes all paid documents to the terminal to retrieve the vehicle.</li>
                          </ol>
                          </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
              <p>
               If you have any questions related to the Nigeria's requirements for importation feel free to contact <a href="mailto:shipping@cosmiqueautos.com">shipping@cosmiqueautos.com</a> .Telephone: +1-800- 000-0000 Hours of operation: Monday to Friday: 8.00 am to 5.00 pm GMT (except holidays) </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>




     <div class="q-pa-md lt-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="Shipping Calculator"
        default-opened
        header-class="text-primary text-h5 text-bold"

      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

          <q-separator />

      <q-expansion-item
        expand-separator
        label="Ground Transportation process by Truck"
        header-class="text-primary text-h5 text-bold"
       >
        <q-card>
          <q-card-section>
                    <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-6 q-pa-md">
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
                  />
                </div>
              </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />

      <q-expansion-item
        expand-separator
        label="Issues Can Effect time of Transportation"
        header-class="text-primary text-h5 text-bold"
      >
        <q-card>
          <q-card-section>
              <p>
                <span class="text-bold">Auction Vehicles:</span> If the vehicle
                is purchased from an auction the selling party has up to 30 days
                to turn in the title/ownership for the vehicle. This can cause
                significant delays for the shipping process as the vehicle will
                not be picked up until the title/ownership is present. Please
                ask an Cosmique Autos representative if the vehicle
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
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />

      <q-expansion-item label="Ocean Transportation" header-class="text-primary text-h5 text-bold">
        <q-card>
          <q-card-section>
           <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-8 q-pa-md">
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
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />

      <q-expansion-item label="Receiving your car at Destination Port" header-class="text-primary text-h5 text-bold">
        <q-card>
          <q-card-section>
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
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />

      <q-expansion-item label="Shipping Services" header-class="text-primary text-h5 text-bold">
        <q-card>
          <q-card-section>
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

                  <q-separator />

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
                  <q-separator />

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
                  <q-separator />

                  <q-expansion-item
                    header-class="text-primary text-bold"
                    icon="fas fa-plane"
                    label="AIR"
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
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />
      <q-expansion-item label="Vessel Tracking" header-class="text-primary text-h5 text-bold">
        <q-card>
          <q-card-section>
             <div class="row q-pa-md text-justify">
                <div class="col-12 col-md-8 q-pa-md">
                  <p>
                    <span class="text-bold"> Vessel tracking: </span> Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
                    quasi reiciendis? Reiciendis deserunt dolores, placeat
                    commodi ratione officia fugiat excepturi repellat, quaerat
                    minus perspiciatis eaque. Omnis repudiandae vitae ea quos!
                  </p>
                </div>
                <div class="col-12 col-md-4 q-pa-md">
                  <q-skeleton height="200px" square />
                </div>
              </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-separator />
      <q-expansion-item label="Import Process" header-class="text-primary text-h5 text-bold">
        <q-card>
          <q-card-section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
             <div>
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    label="CONTAINER CONSOLIDATION"
                    header-class="text-primary text-h5 text-bold"
                    default-opened
                  >
                    <q-card>
                      <q-card-section>
                        <div>
                          <div class="q-pa-md">
                            <p class="text-h5 text-bold text-primary">General Information</p>
                              <span class="text-bold">Before Vessel Arrives:</span>
                             <ul>
                               <li>Container information is given to the agent by Cosmique Autos.</li>
                               <li>Customs gives the agent an estimated value.</li>
                               <li>Later, customs inspects the goods to confirm if there is any discrepancy. If anything contrary is found, customs will raise the value by giving DN (debit note). Additional customs Duty would have to be paid.</li>
                               <li>The agent then contacts the clients, so they can make payments towards the clearing of their vehicles. This should be done at least two weeks before the arrival of the container in order to avoid delays and extra charges.</li>
                             </ul>
                             <p>There is no exact value amount stipulated for vehicles. They are charged based on the weight, year, make, model and sometimes condition of the car.</p>

                          </div>
                          <div class="text-center">
                          <span class="text-bold text-h5 text-primary">Steps to Pick up your Vehicle</span>
                          <p>Note: ‎Container clearing takes an estimated 3-5 working days.</p>
                          <ol class="text-bold text-justify text-h5">
                            <li>	Vessel arrives and containers are discharged and taken to the container terminal.</li>
                            <li>	The container is booked for examination.</li>
                            <li>	The container is examined.</li>
                            <li>	Nigeria Customs gives valuation for each car in the container.</li>
                            <li>	The Container is released.</li>
                            <li>  Shipping company payments are made and documents are received.</li>
                            <li>	Exit is confirmed at the gate. Agent takes delivery of the goods for distribution to the respective owners.</li>
                          </ol>
                          </div>
                          <p>* More so, clients can go to the custom office to confirm the valuation of their cars.</p>
                          <p class="text-justify">Valuation is a customs written document given to agents. It enables them to know the amount needed to be paid. Customs has its own data/information for all cars being imported into the country, so there is no need to declare the value of the vehicles on the Bill of Lading.</p>
                          <p>Individuals are not allowed to handle the valuation of a car except the official custom officer.</p>
                          <p class="text-bold text-h5 text-primary">You may pay the following charges based on customs valuation:</p>
                          <ul>
                            <li>Import duty is 35% of custom valuation of a car.</li>
                            <li>Ecowas levy is 5%‎</li>
                            <li>Port levy is 7 %</li>
                            <li>Vat is 5%</li>
                          </ul>
                       </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-separator />

                  <q-expansion-item
                    expand-separator
                    label="RORO SHIPPING"
                    header-class="text-primary text-h5 text-bold"
                  >
                    <q-card>
                      <q-card-section>
                        <div>
                           <p class="text-h5 text-bold text-primary">General Information</p>
                             <p>Please, contact your designated clearing agent before the vessel arrives to get more information about clearing and local charges.</p>
                              <p>Please note that Auction Export does not handle clearing at destination. For more information about customs please click on the following link (https://www.customs.gov.ng)</p>
                          </div>
                          <div class="text-center">
                          <span class="text-bold text-h5 text-primary">Steps to pick up your Vehicle arrived by RORO:</span>
                           <ol class="text-bold text-justify text-h5">
                            <li>	Original bill of lading is being overnight to the client <a href="http://www.auctionexport.com/Images/Other/ImportProcess_BillOfLading.jpg">view sample</a></li>
                            <li>		Vessel arrives to the terminal.</li>
                            <li>		Cars are taken to the terminal park.</li>
                            <li>	Customs inspection. Charges given to clients by their agents.</li>
                            <li>		Client makes payment.</li>
                            <li>  	Client takes all paid documents to the terminal to retrieve the vehicle.</li>
                          </ol>
                          </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
              <p>
               If you have any questions related to the Nigeria's requirements for importation feel free to contact <a href="mailto:shipping@cosmiqueautos.com">shipping@cosmiqueautos.com</a> .Telephone: +1-800- 000-0000 Hours of operation: Monday to Friday: 8.00 am to 5.00 pm GMT (except holidays) </p>

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
      tab: "shipping_calculator",
    };
  },
};
</script>
