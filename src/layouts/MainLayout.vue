<template>
  <PreLoader />
  <q-layout view="lHh lpR lFf" @scroll="navBarBg">
    <q-header class="text-white bg-transaprent" height-hint="98">
      <div
        class="bg-transparent text-white q-px-xl wrapper-toolbar"
        style="width: 100%"
      >
        <div class="navbar-no-offset">
          <q-toolbar :class="bodyClass">
            <q-btn
              class="mobile-only"
              dense
              flat
              round
              icon="menu"
              @click="toggleLeftDrawer"
            />

            <router-link to="/" class="wrapper-logo desktop-only">
              <q-img
                class="navbar-logo q-mt-md"
                width="14vw"
                src="~assets/luxoitalia_logo_white_2020.svg"
              />
            </router-link>

            <q-space />

            <button class="btn-toolbar-new q-mt-md">START PLANNING</button>
          </q-toolbar>

          <q-separator
            color="white"
            size="1px"
            inset
            spaced
            style="margin-top: 2%"
            class="desktop-only"
            :class="bodyClass"
          />

          <q-toolbar class="navigation-toolbar desktop-only" :class="bodyClass">
            <q-tabs class="navigation-block wrap" indicator-color="primary">
              <q-route-tab
                class="route-tab"
                to="/about"
                label="About Us"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/luxury-travel"
                label="Italy Luxury Travel"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/wine-club"
                label="Wine Club"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/testimonials"
                label="Testimonials"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/quiz"
                label="Quiz"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/blog"
                label="Blog"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/contact-us"
                label="Contact Us"
                active-class="route-active"
              />
            </q-tabs>

            <q-space />

            <div
              class="social-footer-content flex justify-evenly"
              style="width: 9%"
            >
              <a href="https://www.facebook.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/facebook.svg"
                />
              </a>

              <a href="https://www.instagram.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/instagram.svg"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/luxo-italia/"
                target="_blank"
              >
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/linkedin.svg"
                />
              </a>

              <a href="https://twitter.com/luxo_italia" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/twitter.svg"
                />
              </a>
            </div>
          </q-toolbar>
        </div>

        <div class="navbar-offset">
          <q-toolbar
            class="navigation-toolbar desktop-only justify-around"
            :class="bodyClass"
          >
            <router-link to="/" class="wrapper-logo desktop-only">
              <q-img
                class="navbar-logo"
                width="10vw"
                src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
              />
            </router-link>

            <q-tabs class="navigation-block wrap">
              <!-- <q-route-tab to="/" label="Home" /> -->
              <q-route-tab
                class="route-tab"
                to="/about"
                label="About Us"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/luxury-travel"
                label="Italy Luxury Travel"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/wine-club"
                label="Wine Club"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/testimonials"
                label="Testimonials"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/quiz"
                label="Quiz"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/blog"
                label="Blog"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/contact-us"
                label="Contact Us"
                active-class="route-active-new"
              />
            </q-tabs>

            <button class="btn-toolbar-new">START PLANNING</button>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer
      class="drawer"
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      bordered
    >
      <q-list padding class="menu-list q-list-drawer">
        <q-item clickable v-ripple to="/" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="home" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Home </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> About Us </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/luxury-travel" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Italy Luxury Travel
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/wine-club" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Wine Club
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/testimonials" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Testimonials
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/quiz" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Quiz </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/blog" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Blog </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/contact-us" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Contact </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="absolute bg-white">
      <div class="card-block flex flex-center">
        <q-img
          class="footer-dialog"
          src="~assets\venice-footer-box.png"
          width="80%"
        >
          <div
            class="flex flex-center"
            style="
              width: 100%;
              height: 100%;
              align-items: center;
              flex-direction: column;
              background-color: #48447130;
            "
          >
            <h2 class="text-white h2-card-block text-center">
              Design your luxury tour.
            </h2>

            <h6 class="text-white subtitle-h6-card-block text-center">
              LIMITED ONLY BY YOUR IMAGINATION .
            </h6>

            <button class="btn-toolbar-new">START THE QUIZ</button>
          </div>
        </q-img>
      </div>

      <div class="title-footer">
        <h6 class="text-primary subtitle-h6-card-block text-center">
          FOLLOW US ON INSTAGRAM
        </h6>
      </div>

      <div class="instagram-feed">
        <a href="https://www.instagram.com/luxoitalia/" target="_blank">
          <q-img src="~assets/ig_feed.png" />
        </a>
      </div>

      <div class="footer-content flex justify-around">
        <div class="img-footer-content">
          <q-img
            img-class="img-footer-logo"
            class="footer-logo"
            width="15vw"
            src="~assets/luxoitalia-logo-2.svg"
          />
        </div>
        <div class="text-footer-content">
          <h6 class="text-info text-center h6-text-footer-content">
            Contact us
          </h6>
          <h5 class="text-black text-center h5-text-footer-content">
            INFO@LUXOITALIA.COM
          </h5>
        </div>
        <div
          class="social-footer-content flex justify-evenly"
          style="width: 9%"
        >
          <a href="https://www.facebook.com/luxoitalia/" target="_blank">
            <q-img
              img-class="img-footer-logo"
              width="1.8vw"
              class="footer-logo"
              src="~assets/fb-foter.svg"
            />
          </a>

          <a href="https://www.instagram.com/luxoitalia/" target="_blank">
            <q-img
              img-class="img-footer-logo"
              width="1.8vw"
              class="footer-logo"
              src="~assets/ig-foter.svg"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/luxo-italia/"
            target="_blank"
          >
            <q-img
              img-class="img-footer-logo"
              width="1.8vw"
              class="footer-logo"
              src="~assets/in-foter.svg"
            />
          </a>

          <a href="https://twitter.com/luxo_italia" target="_blank">
            <q-img
              img-class="img-footer-logo"
              width="1.8vw"
              class="footer-logo"
              src="~assets/tw-foter.svg"
            />
          </a>
        </div>
      </div>

      <q-separator inset color="info" />

      <div class="footer-bottom">
        <h6 class="h6-footer-bottom text-center text-black">
          © LUXO ITALIA SNC - P.IVA 08637280960.ALL RIGHTS RESERVED. | PRIVACY
          POLICY | TERMS AND CONDITION | BROCHURE
        </h6>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, computed, onUpdated } from "vue";
import SocialComponent from "../components/SocialComponent.vue";
import PreLoader from "../components/PreLoader.vue";
import { useStore, mapMutations } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: {
    SocialComponent,
    PreLoader,
  },

  methods: {
    ...mapMutations({
      addBodyClass: "dynamicClasses/addBodyClass",
    }),
  },

  setup() {
    const route = useRoute();
    const thisRoute = ref(route.params.post);
    const tryRoute = ref(route.path);

    const leftDrawerOpen = ref(false);
    const $store = useStore();

    const bodyClass = ref();
    thisRoute.value
      // ? (bodyClass.value = "blog-single-display-none")
      ? (bodyClass.value = "")
      : (bodyClass.value = "");

    const footerClass = ref();
    tryRoute.value === "/quiz"
      ? (footerClass.value = "quiz-display-none")
      : (footerClass.value = "");

    onUpdated(() => {
      console.log("footerClass.value");
      console.log(footerClass.value);

      thisRoute.value = route.params.post;
      thisRoute.value
        // ? (bodyClass.value = "blog-single-display-none") WORKING!
        ? (bodyClass.value = "")
        : (bodyClass.value = "");

      tryRoute.value = route.path;

      tryRoute === "/quiz"
        ? (footerClass.value = "quiz-display-none")
        : (footerClass.value = "");
    });

    return {
      leftDrawerOpen,
      bodyClass,
      thisRoute,
      footerClass,
      tryRoute,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      navBarBg() {
        const el = document.querySelector("header");
        const btn = document.querySelector(".btn-toolbar-new");
        const navBarOffset = document.querySelector(".navbar-offset");
        const navBarNoOffset = document.querySelector(".navbar-no-offset");

        window.scrollY > 100
          ? ((el.style.backgroundColor = "#D9C5A0"),
            (btn.style.display = "none"),
            (navBarOffset.style.display = "block")(
              (navBarNoOffset.style.display = "none")
            ))
          : ((el.style.backgroundColor = "transparent"),
            (btn.style.display = "flex"),
            (navBarOffset.style.display = "none")(
              (navBarNoOffset.style.display = "block")
            ));
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// *********TYPO *******************

.h6-footer-bottom {
  font-family: "CommutersSans-Regular";
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0px;
  margin: 0;
  line-height: 12px;
  padding: 2% 0%;
}

.h6-text-footer-content {
  margin-bottom: unset;
  font-family: "Hatton-Medium";
  font-size: 14px;
  letter-spacing: 1px;
}

.h5-text-footer-content {
  margin-top: unset;
  font-family: "CommutersSans-Regular";
  font-size: 15px;
  letter-spacing: 1px;
}

.subtitle-h6-card-block {
  margin-top: 1.5%;
  font-size: 24px;
  letter-spacing: 5px;
}

// *********NAVBAR BLOCK *******************
.navigation-toolbar {
}

.navigation-block {
  margin-left: -1% !important;
}

.route-tab {
  // padding: unset;
}

.wrapper-toolbar {
  padding: 0 6%;
}

.route-active {
  color: $info;
  border-bottom-width: 20px;
}

.route-active-new {
  color: $primary;
  border-bottom-width: 20px;
}

.blog-single-display-none {
  display: none !important;
}

header {
  background-color: transparent;
}

.btn-toolbar-new {
  border: none;
  padding: 1% 3%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

.navbar-offset {
  display: none;
}

// *********DRAWER BLOCK *******************

// *********FOOTER BLOCK *******************

.footer-content {
  min-height: 40vh;
  align-items: center;
  background-color: #fbf8f4;
}

.instagram-feed {
  border-bottom: 1.3rem solid $info;
}

.footer-bottom {
  background-color: #fbf8f4;
}

.quiz-display-none {
  display: none;
}

.card-block {
  margin-bottom: 10%;
}

.my-card {
  position: relative;
  left: 15vw;
  width: 50vw;
  z-index: 9;
}

.btn-toolbar-new {
  border: none;
  padding: 1% 3%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

// ***FADING***************

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}

@media screen and (max-width: 1100px) {
  .h6-footer-bottom {
    transform: scale(0.9);
  }

  .subtitle-h6-card-block {
    transform: scale(0.9);
  }

  // ***NAVBAR********
  .btn-toolbar-new {
    padding: 1% 3%;
    background-color: white;
    color: #4c4571;
    font-family: "Commuters-Sans-Bold";
    font-size: 13px;
  }
}

@media screen and (max-width: 680px) {
  .h6-footer-bottom {
    transform: scale(0.85);
  }

   .subtitle-h6-card-block {
    transform: scale(0.85);
  }
}
</style>
