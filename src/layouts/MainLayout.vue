<template>
  <q-layout view="lhr Lpr fFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div @click="open_index" class="q-pa-sm">
            <q-img
              src="~assets/logo.png"
              style="height: 35px; max-width: 100px"
              class="q-py-sm"
            />
            <br />
            <b class="text-h5 text-bold text-black"
              >Cosmique <span class="text-white">Autos</span></b
            >
            <br />
            <p style="font-size: 10px">
              All Make and Models. Bid Now! Worldwide Shipping
            </p>
          </div>
        </q-toolbar-title>

        <div class="gt-sm">
          <div v-if="!$auth.check()">
            <q-btn
              :to="{ name: 'homepage' }"
              rounded
              flat
              dense
              class="q-mr-xs"
              color="white"
              text-color="white"
              label="Home"
            />
            <q-btn-dropdown
              flat
              dense
              color="white"
              text-color="white"
              label="Find Vehicle"
            >
              <q-list class="bg-white text-primary">
                <q-item clickable :to="{ name: 'auction' }">
                  <q-item-section>
                    <q-item-label>Auction Vehicles</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'buy_it_now_vehicles' }">
                  <q-item-section>
                    <q-item-label>Buy it Now Vehicles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              flat
              dense
              color="white"
              text-color="white"
              label="Auto Parts Inventory"
            >
              <q-list class="bg-white text-primary">
                <q-item clickable :to="{ name: 'newParts' }">
                  <q-item-section>
                    <q-item-label>Auto Parts</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'usedParts' }">
                  <q-item-section>
                    <q-item-label>Accessories</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn
              rounded
              flat
              dense
              class="q-mr-xs"
              color="white"
              text-color="white"
              label="shipping"
              :to="{ name: 'shipping' }"
            />
            <q-btn
              rounded
              flat
              dense
              class="q-mr-xs"
              color="white"
              text-color="white"
              label="Request"
              :to="{ name: 'request' }"
            />
            <q-btn-dropdown
              flat
              dense
              color="white"
              text-color="white"
              label="Support"
            >
              <q-list class="bg-white text-primary">
                <q-item clickable :to="{ name: 'about' }">
                  <q-item-section>
                    <q-item-label>About Us</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'contact' }">
                  <q-item-section>
                    <q-item-label>Contact Us</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'faq' }">
                  <q-item-section>
                    <q-item-label>FAQ</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'reviews' }">
                  <q-item-section>
                    <q-item-label>Customers Reviews</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn
              rounded
              class="q-mr-xs btn-fixed-width"
              align="around"
              color="white"
              text-color="primary"
              icon="person"
              label="Login"
              :to="{ name: 'login' }"
            />
          </div>
          <div v-else>
            <q-btn-dropdown
              icon="list"
              flat
              dense
              color="white"
              no-caps
              label="Menu"
            >
              <q-list bordered separator>
                <q-item clickable :to="{ name: 'homepage' }">
                  <q-item-section>
                    <q-item-label>Home</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-btn-dropdown no-caps flat dense label="Auto Parts Inventory">
                    <q-list separator bordered class="bg-white">
                      <q-item clickable :to="{ name: 'auction' }">
                        <q-item-section>
                          <q-item-label>Auction Vehicles</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable :to="{ name: 'buy_it_now_vehicles'}">
                        <q-item-section>
                          <q-item-label>Buy it Now Vehicles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item>
                <q-item clickable>
                  <q-btn-dropdown
                    no-caps
                    flat
                    dense
                    label="Auto Parts Inventory"
                  >
                    <q-list bordered separator>
                      <q-item clickable :to="{ name: 'newParts' }">
                        <q-item-section>
                          <q-item-label>Auto Parts</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable :to="{ name: 'usedParts' }">
                        <q-item-section>
                          <q-item-label>Accessories</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item>
                <q-item clickable :to="{ name: 'shipping' }">
                  <q-item-section>
                    <q-item-label>Shipping</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'request' }">
                  <q-item-section>
                    <q-item-label>Request</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-btn-dropdown flat dense no-caps label="Support">
                    <q-list bordered separator class="bg-white">
                      <q-item clickable :to="{ name: 'about' }">
                        <q-item-section>
                          <q-item-label>About Us</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable :to="{ name: 'contact' }">
                        <q-item-section>
                          <q-item-label>Contact Us</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable :to="{ name: 'faq' }">
                        <q-item-section>
                          <q-item-label>FAQ</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable :to="{ name: 'reviews' }">
                        <q-item-section>
                          <q-item-label>Customer Reviews</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown
              label="My Transaction Center"
              class="q-ml-lg bg-tertiary"
              icon="money"
              no-caps
              flat
            >
              <q-list bordered separator>
                <q-item
                  clickable
                  v-ripple
                  :to="{ name: 'bidding_account_limit' }"
                >
                  <q-item-section>Bidding Limit</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'watch_list' }">
                  <q-item-section>Watch-list</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'saved_searches' }">
                  <q-item-section>Saved Searches</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'my_bids' }">
                  <q-item-section>My Bids</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'transactions' }">
                  <q-item-section>
                    <q-item-label>Transactions</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              :label="this.$auth.user().full_name"
              icon="person_pin"
              class="q-ml-lg bg-tertiary"
              no-caps
              flat
            >
              <q-list bordered separator>
                <q-item
                  clickable
                  v-ripple
                  :to="{ name: 'contact_information' }"
                >
                  <q-item-section>Contact Information</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  :to="{ name: 'billing_information' }"
                >
                  <q-item-section>Billing Information</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'password_login' }">
                  <q-item-section>Password and Login</q-item-section>
                </q-item>
                <q-item clickable v-ripple :to="{ name: 'documents_and_ids' }">
                  <q-item-section>Document and IDs</q-item-section>
                </q-item>
                <q-item clickable v-ripple @click.native="logout">
                  <q-item-section>
                    <q-item-label>Account Logout</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="lt-md">
          <q-btn
            flat
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="text-primary">
      <q-list>
        <q-item-label header class="text-white q-pa-md bg-primary">
          Cosmique Autos
        </q-item-label>
        <q-separator />
        <div v-if="!$auth.check()">
          <q-item clickable v-ripple :to="{ name: 'homepage' }">
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="directions_car"
            label="Auto Inventory"
          >
            <q-item :to="{ name: 'auction' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="gavel directions_car" />
              </q-item-section>
              <q-item-section>Auctions</q-item-section>
            </q-item>
            <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="directions_car" />
              </q-item-section>
              <q-item-section>Used Dealership Autos</q-item-section>
            </q-item> -->
          </q-expansion-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="fas fa-wrench"
            label="Auto Parts Inventory"
          >
            <q-item clickable :to="{ name: 'newParts' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="fas fa-wrench" />
              </q-item-section>
              <q-item-section>Auto Parts</q-item-section>
            </q-item>
            <q-item clickable :to="{ name: 'usedParts' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="fas fa-wrench" />
              </q-item-section>
              <q-item-section>Accessories</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item clickable v-ripple :to="{ name: 'shipping' }">
            <q-item-section avatar>
              <q-icon color="primary" name="directions_boat" />
            </q-item-section>
            <q-item-section>Shipping</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'request' }">
            <q-item-section avatar>
              <q-icon color="primary" name="comment" />
            </q-item-section>
            <q-item-section>Request</q-item-section>
          </q-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="contact_support"
            label="Support"
          >
            <q-item clickable :to="{ name: 'about' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="info" />
              </q-item-section>
              <q-item-section>About Us</q-item-section>
            </q-item>
            <q-item clickable :to="{ name: 'contact' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="support_agent" />
              </q-item-section>
              <q-item-section>Contact us</q-item-section>
            </q-item>
            <q-item clickable :to="{ name: 'faq' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="help_outline" />
              </q-item-section>
              <q-item-section>FAQ</q-item-section>
            </q-item>
            <q-item clickable :to="{ name: 'reviews' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="rate_review" />
              </q-item-section>
              <q-item-section>Customer Reviews</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-separator />
          <q-item clickable v-ripple :to="{ name: 'login' }">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-sign-out-alt" />
            </q-item-section>
            <q-item-section>Login</q-item-section>
          </q-item>
        </div>
        <div v-else>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="list"
            label="Menu"
          >
            <q-item clickable :to="{ name: 'homepage' }" v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="home" />
              </q-item-section>
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="directions_car"
              label="Auto Inventory"
            >
              <q-item :to="{ name: 'auction' }" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="gavel directions_car" />
                </q-item-section>
                <q-item-section>Auctions</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="directions_car" />
                </q-item-section>
                <q-item-section>Used Dealership Autos</q-item-section>
              </q-item>
            </q-expansion-item>
            <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="fas fa-wrench"
              label="Auto Parts Inventory"
            >
              <q-item clickable :to="{ name: 'newParts' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="fas fa-wrench" />
                </q-item-section>
                <q-item-section>Auto Parts</q-item-section>
              </q-item>
              <q-item clickable :to="{ name: 'usedParts' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="fas fa-wrench" />
                </q-item-section>
                <q-item-section>Accessories</q-item-section>
              </q-item>
            </q-expansion-item>
            <q-item clickable v-ripple :to="{ name: 'shipping' }">
              <q-item-section avatar>
                <q-icon color="primary" name="directions_boat" />
              </q-item-section>
              <q-item-section>Shipping</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'request' }">
              <q-item-section avatar>
                <q-icon color="primary" name="comment" />
              </q-item-section>
              <q-item-section>Request</q-item-section>
            </q-item>
            <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="contact_support"
              label="Support"
            >
              <q-item clickable :to="{ name: 'about' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="info" />
                </q-item-section>
                <q-item-section>About Us</q-item-section>
              </q-item>
              <q-item clickable :to="{ name: 'contact' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="support_agent" />
                </q-item-section>
                <q-item-section>Contact us</q-item-section>
              </q-item>
              <q-item clickable :to="{ name: 'faq' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="help_outline" />
                </q-item-section>
                <q-item-section>FAQ</q-item-section>
              </q-item>
              <q-item clickable :to="{ name: 'reviews' }" v-ripple>
                <q-item-section avatar>
                  <q-icon color="primary" name="rate_review" />
                </q-item-section>
                <q-item-section>Customer Reviews</q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>

          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="person_pin"
            :label="this.$auth.user().full_name"
          >
            <q-item clickable v-ripple :to="{ name: 'contact_information' }">
              <q-item-section>Contact Information</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'billing_information' }">
              <q-item-section>Billing Information</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'password_login' }">
              <q-item-section>Password and Login</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'documents_and_ids' }">
              <q-item-section>Document and IDs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="money"
            label="My Transaction Center"
          >
            <q-item clickable v-ripple :to="{ name: 'bidding_account_limit' }">
              <q-item-section>Bidding Limit</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'watch_list' }">
              <q-item-section>Watch-list</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'saved_searches' }">
              <q-item-section>Saved Searches</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'my_bids' }">
              <q-item-section>My Bids</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click.native="logout">
              <q-item-section>
                <q-item-label>Transactions</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item clickable v-ripple @click.native="logout">
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-sign-out-alt" />
            </q-item-section>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <!--  footer -->
    <div class="bg-accent text-white">
      <div>
        <div class="row">
          <div class="bg-grey-10 col-12 col-md">
            <q-card class="my-card q-pa-md bg-grey-10">
              <q-card-section class="q-pa-md">
                <strong
                  >|| <b class="text-primary"> OPENING HOURS </b> ||</strong
                >
                <div class="b-info__aside-article-item">
                  <b>Sales Department</b>
                  <p class="text-body2 text-weight-light">
                    Mon-Sat : 8:00am - 5:00pm<br />
                    Sunday is closed
                  </p>
                </div>
                <div>
                  <b>Service Department</b>
                  <p class="text-body2 text-weight-light">
                    Mon-Sat : 8:00am - 5:00pm<br />
                    Sunday is closed
                  </p>
                </div>
                <hr />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md q-pa-md">
            <strong>|| <b class="text-primary"> About Us </b> ||</strong>
            <p class="text-body2 text-weight-light">
              Vestibulum varius od lio eget conseq uat blandit, lorem auglue
              comm lodo nisl non ultricies lectus nibh mas lsa Duis scelerisque
              aliquet. Ante donec libero pede porttitor dacu msan esct venenatis
              quis.
            </p>
            <q-btn
              rounded
              no-caps
              outline
              :to="{ name: 'about' }"
              class="q-mr-xs"
              color="white"
              text-color="white"
              label="Read More"
              icon-right="fa fa-angle-right"
            />
          </div>

          <div class="col-12 col-md q-pa-md">
            <div>
              <strong> ||<b class="text-primary"> CONTACT US </b>|| </strong>
              <div class="q-pa-md text-body2 text-weight-light text-grey-6">
                <div class="">
                  <q-icon name="fa fa-map-marker" /> &nbsp;
                  <b> 0th St, Los Angeles, California, USA</b>
                </div>
                <br />
                <div class="">
                  <q-icon name="fa fa-phone-alt" /> &nbsp;
                  <b>Phone: 1-800- 000-000</b>
                </div>
                <br />
                <div class="">
                  <q-icon name="fa fa-fax" /> &nbsp;
                  <b>FAX: 1-800- 000-000</b>
                </div>
                <br />
                <div class="">
                  <q-icon name="fa fa-envelope" /> &nbsp;
                  <b>Email: info@cosmiqueautos.com</b>
                </div>
              </div>
            </div>
          </div>
          <div class="q-pa-md col-12 col-md">
            <div class="q-py-xs">
              <div class="">
                <strong> ||<b class="text-primary"> Get Started </b>|| </strong>
                <div v-if="!$auth.check()">
                  <p class="text-body2 text-weight-light">
                    Join our Customer base and get access to bidding, and other
                    amazing feautures today!
                  </p>
                  <q-btn
                    outline
                    icon-right="person"
                    :to="{ name: 'register' }"
                    rounded
                    text-color="white"
                    label="Register Now"
                  />
                </div>
                <div v-else>
                  <p class="text-body text-weight-light">
                    Welcome to cosmique Autos
                  </p>
                  <p class="text-primary text-bold">
                    <q-icon name="person_pin" size="sm" />
                    {{ this.$auth.user().full_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-10 text-grey-6 justify-between">
      <div class="row">
        <div class="self-center col-12 col-md-4">
          <div class="q-pa-md" @click="open_index">
            <q-img
              class="text-center"
              v-ripple:primary
              src="~assets/logo2.png"
              spinner-color="white"
              style="width:100px; height:35px"
            />
            <br />
            <b class="text-h4 text-bold text-primary"
              >Cosmique <span class="text-white">Autos</span></b
            >
            <p>
              &copy; 2020.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div>
            <div class="text-right q-pa-sm">
              <q-btn round flat color="primary" icon="facebook" />
              <q-btn round flat color="primary" icon="fab fa-twitter" />
              <q-btn round flat color="primary" icon="fab fa-instagram" />
              <q-btn round flat color="primary" icon="fab fa-youtube" />
            </div>

            <div class="text-right q-pa-md">
              <q-btn
                :to="{ name: 'homepage' }"
                rounded
                no-caps
                size="sm"
                flat
                dense
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Home"
              />
              <q-btn-dropdown
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Auto Inventory"
              >
                <q-list>
                  <q-item clickable :to="{ name: 'auction' }">
                    <q-item-section>
                      <q-item-label>Auction</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'usedCars' }">
                    <q-item-section>
                      <q-item-label>Used Autos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn-dropdown
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Auto Parts Inventory"
              >
                <q-list>
                  <q-item clickable :to="{ name: 'newParts' }">
                    <q-item-section>
                      <q-item-label>Auto Parts</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'usedParts' }" p>
                    <q-item-section>
                      <q-item-label>Accessories</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Shipping"
                :to="{ name: 'shipping' }"
              />
              <q-btn
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Request"
                :to="{ name: 'request' }"
              />
              <q-btn-dropdown
                flat
                no-caps
                size="sm"
                dense
                color="white"
                text-color="white"
                label="Support"
              >
                <q-list>
                  <q-item clickable :to="{ name: 'about' }">
                    <q-item-section>
                      <q-item-label>About Us</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'contact' }">
                    <q-item-section>
                      <q-item-label>Contact Us</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'faq' }">
                    <q-item-section>
                      <q-item-label>FAQ</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable :to="{ name: 'reviews' }">
                    <q-item-section>
                      <q-item-label>Customer Reviews</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <q-page-scroller position="bottom" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },

  methods: {
    logout() {
      this.$auth.logout({
        makeRequest: true,
        success: res => {
          this.$q.notify({
            message: "you have been Logged out successfully!",
            color: "secondary",
            icon: "error",
            position: "top"
          });

          this.$router.push({ name: "login" });
        }
      });
    },
  open_index(){
    window.open('/', "_self")
  }
  }
};
</script>
