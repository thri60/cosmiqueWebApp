<template>
  <q-layout view="lhr Lpr fFf">
    <q-header reveal elevated class="q-py-sm">
      <q-toolbar>
        <q-toolbar-title>
          <div style="padding: 4px">
            <q-img
              src="~assets/logo.png"
              style="height: 35px; max-width: 100px"
            />
            <br />
            <b class="text-h4 text-bold text-black"
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
              label="Auto Inventory"
            >
              <q-list class="bg-white text-primary">
                <q-item clickable :to="{ name: 'auction' }">
                  <q-item-section>
                    <q-item-label>Auction</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Used Autos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              flat
              dense
              color="white"
              text-color="white"
              label="Auto Parts"
            >
              <q-list class="bg-white text-primary">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>New Auto Parts</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Used Auto Parts</q-item-label>
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
                  <q-btn-dropdown no-caps flat dense label="Auto Inventory">
                    <q-list separator bordered class="bg-white">
                      <q-item clickable :to="{ name: 'auction' }">
                        <q-item-section>
                          <q-item-label>Auction</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Used Autos</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item>
                <q-item clickable>
                  <q-btn-dropdown no-caps flat dense label="Auto Parts">
                    <q-list bordered separator>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>New Auto Parts</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>
                          <q-item-label>Used Auto Parts</q-item-label>
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
                <q-item clickable v-ripple @click.native="logout">
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
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8 q-pa-md">
          Cosmique Autos
        </q-item-label>
        <q-separator />
        <div v-if="!$auth.check()">
          <q-item clickable v-ripple :to="{ name: 'homepage' }">
            <q-item-section avatar>
              <q-icon color="primary" name="chrome_reader_mode" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="directions_car"
            label="Auto Inventory"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="directions_car" />
              </q-item-section>
              <q-item-section>New Autos</q-item-section>
            </q-item>
            <q-item :to="{ name: 'auction' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="gavel" />
              </q-item-section>
              <q-item-section>Auctions</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="view_carousel"
            label="Auto Parts"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="assessment" />
              </q-item-section>
              <q-item-section>New Auto Parts</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="assessment" />
              </q-item-section>
              <q-item-section>Used Auto Parts</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-separator />
          <q-item clickable v-ripple :to="{ name: 'login' }">
            <q-item-section avatar>
              <q-icon color="primary" name="assessment" />
            </q-item-section>
            <q-item-section>Login</q-item-section>
          </q-item>
        </div>
        <div v-else>
          <q-btn-dropdown class="q-ml-lg bg-tertiary q-pa-md" icon="list" flat no-caps label="Menu">
            <q-list>
              <q-item clickable :to="{ name: 'homepage' }">
                <q-item-section>
                  <q-item-label>Home</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-btn-dropdown no-caps flat dense label="Auto Inventory">
                  <q-list class="bg-white">
                    <q-item clickable :to="{ name: 'auction' }">
                      <q-item-section>
                        <q-item-label>Auction</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label>Used Autos</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-btn-dropdown no-caps flat dense label="Auto Parts">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label>New Auto Parts</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label>Used Auto Parts</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </q-item>
              <q-separator />
              <q-item clickable :to="{ name: 'shipping' }">
                <q-item-section>
                  <q-item-label>Shipping</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable :to="{ name: 'request' }">
                <q-item-section>
                  <q-item-label>Request</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-btn-dropdown flat dense no-caps label="Support">
                  <q-list class="bg-white">
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
                  </q-list>
                </q-btn-dropdown>
              </q-item>
            </q-list>
          </q-btn-dropdown>
            <q-separator />
          <q-btn-dropdown
            :label="this.$auth.user().full_name"
            icon="person_pin"
            class="q-ml-lg bg-tertiary q-pa-md"
            no-caps
            flat
          >
            <q-list bordered separator>
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
              <q-item clickable v-ripple @click.native="logout">
                <q-item-section>
                  <q-item-label>Account Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-separator inset />
          <q-btn-dropdown
            label="My Auction Center"
            icon="fas fa-gavel"
            class="q-ml-lg bg-tertiary q-pa-md"
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
              <q-item clickable v-ripple @click.native="logout">
                <q-item-section>
                  <q-item-label>Transactions</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
              </q-card-section>
              <hr />
              <q-card-section>
                <strong>|| <b class="text-primary"> About Us </b> ||</strong>
                <p class="text-body2 text-weight-light">
                  Vestibulum varius od lio eget conseq uat blandit, lorem auglue
                  comm lodo nisl non ultricies lectus nibh mas lsa Duis
                  scelerisque aliquet. Ante donec libero pede porttitor dacu
                  msan esct venenatis quis.
                </p>
                <q-btn
                  rounded
                  no-caps
                  outline
                  class="q-mr-xs"
                  color="white"
                  text-color="white"
                  label="Read More"
                  icon-right="fa fa-angle-right"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pa-md col-12 col-md">
            <div class="">
              <strong> ||<b class="text-primary"> FROM TWITTER </b>|| </strong>
              <div class="q-pa-md row">
                <div><q-icon name="fab fa-twitter" /> &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
              <div class="q-pa-md row">
                <div><q-icon name="fab fa-twitter" /> &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
              <div class="q-pa-md row">
                <div><q-icon name="fab fa-twitter" /> &nbsp;</div>

                <div class="col text-body2 text-weight-light">
                  <p class="text-grey-6 ">
                    Duis scelerisque aliquet ante donec libero pede porttitor
                    dacu
                  </p>
                  <p>3 minutes ago</p>
                </div>
              </div>
            </div>
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
          <div class="col-12 col-md q-pa-md">
            <q-img
              class="text-center"
              src="~assets/map.jpg"
              spinner-color="white"
            >
              <q-btn
                class="q-pa-md"
                flat
                dense
                text-color="grey-6"
                label="Open location map"
              />
            </q-img>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-10 text-grey-6 justify-between">
      <div class="row">
        <div class="self-center col-12 col-md-4">
          <div class="q-pa-md">
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
              <q-btn round flat color="primary" icon="fab fa-google-plus-g" />
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
              <q-btn
                rounded
                no-caps
                size="sm"
                dense
                flat
                :to="{ name: 'auction' }"
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Auctions"
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
                  <q-item clickable v-close-popup>
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
                label="Auto Parts"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>New Auto Parts</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Used Auto Parts</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn
                dense
                no-caps
                rounded
                size="sm"
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Request"
                :to="{ name: 'request' }"
              />
              <q-btn
                dense
                no-caps
                rounded
                size="sm"
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="About"
                :to="{ name: 'about' }"
              />
              <q-btn
                rounded
                no-caps
                dense
                size="sm"
                flat
                class="q-mr-xs"
                color="white"
                text-color="white"
                label="Contact"
                :to="{ name: 'contact' }"
              />
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
    }
  }
};
</script>
