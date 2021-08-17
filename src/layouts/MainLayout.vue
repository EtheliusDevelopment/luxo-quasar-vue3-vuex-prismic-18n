<template>
  <PreLoader />
  <q-layout view="lHh lpR lFf">
    <q-header class="text-white bg-transparent absolute" height-hint="98">
      <div
        class="bg-transparent absolute text-white q-px-xl wrapper-toolbar"
        style="width: 100%"
      >
        <q-toolbar>
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
        />

        <q-toolbar class="justify-start navigation-toolbar desktop-only">
          <q-tabs class="navigation-block justify-start wrap">
            <!-- <q-route-tab to="/" label="Home" /> -->
            <q-route-tab class="route-tab" to="/about" label="About Us" />
            <q-route-tab
              class="route-tab"
              to="/luxury-travel"
              label="Italy Luxury Travel"
            />
            <q-route-tab class="route-tab" to="/wine-club" label="Wine Club" />
            <q-route-tab
              class="route-tab"
              to="/testimonials"
              label="Testimonials"
            />
            <q-route-tab class="route-tab" to="/quiz" label="Quiz" />
            <q-route-tab class="route-tab" to="/blog" label="Blog" />
            <q-route-tab class="route-tab" to="/contact-us" label="Contact" />
          </q-tabs>

          <q-space />

          <img src="~assets/social_test.png" alt="social_test" class="desktop-only"/>
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
      <!-- drawer content -->

      <!-- <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About Us" />
        <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
        <q-route-tab to="/wine-club" label="Wine Club" />
        <q-route-tab to="/testimonials" label="Testimonials" />
        <q-route-tab to="/quiz" label="Quiz" />
        <q-route-tab to="/blog" label="Blog" />
        <q-route-tab to="/contact-us" label="Contact" /> -->
      <q-list padding class="menu-list q-list-drawer">
        <!--
           <q-item clickable v-ripple to="/about">
              <q-img
                class="q-mb-md"
                src="~assets\luxoitalia_logo_white_2020.svg"
                spinner-color="primary"
                spinner-size="82px"
              />
            </q-item> -->

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

    <q-page-container :class="bodyClass">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, onUpdated } from "vue";
import SocialComponent from "../components/SocialComponent.vue";
import PreLoader from "../components/PreLoader.vue";
import { useStore, mapMutations } from "vuex";

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
    const leftDrawerOpen = ref(false);
    const $store = useStore();
    const bodyClass = computed({
      get: () => $store.state.dynamicClasses.bodyClass,
    });

    onUpdated(() => $store.commit("dynamicClasses/addBodyClass", ""));

    return {
      leftDrawerOpen,
      bodyClass,
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

.navigation-block{
  margin-left: -1.5% !important;
}

.route-tab {
  padding: unset;
}

.wrapper-toolbar {
  padding: unset;
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
