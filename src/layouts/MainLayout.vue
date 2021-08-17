<template>
  <PreLoader />
  <q-layout view="lHh lpR lFf">
    <q-header class="text-white bg-transparent absolute" height-hint="98">
      <div
        class="bg-transparent absolute text-white q-px-xl wrapper-toolbar"
        style="width: 100%"
      >
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
              width="20vw"
              src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
            />
          </router-link>

          <q-space />

          <q-btn
            size="1.1vw"
            class="q-px-lg q-py-xs q-mt-md btn-toolbar desktop-only"
            color="white"
            text-color="primary"
            label="Start a planning"
          />
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
          <q-tabs class="navigation-block wrap">
            <!-- <q-route-tab to="/" label="Home" /> -->
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

          <img
            src="~assets/social_test.png"
            alt="social_test"
            class="desktop-only"
          />
        </q-toolbar>
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
    const leftDrawerOpen = ref(false);
    const $store = useStore();
    const bodyClass = ref();
    thisRoute.value
      ? (bodyClass.value = "blog-single-display-none")
      : (bodyClass.value = "");

    onUpdated(() => {
      thisRoute.value = route.params.post;
      thisRoute.value
        ? (bodyClass.value = "blog-single-display-none")
        : (bodyClass.value = "");
    });

    return {
      leftDrawerOpen,
      bodyClass,
      thisRoute,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// *********TYPO *******************

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

.blog-single-display-none {
  display: none !important;
}

// *********DRAWER BLOCK *******************

// *********FOOTER BLOCK *******************

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
</style>
