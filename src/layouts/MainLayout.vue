<template>
  <q-layout class="conta" view="lHh lpR lFf">
    <q-header class="bg-transparent text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          class="mobile-only"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg " />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="desktop-only">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About Us" />
        <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
        <q-route-tab to="/wine-club" label="Wine Club" />
        <q-route-tab to="/testimonials" label="Testimonials" />
        <q-route-tab to="/quiz" label="Quiz" />
        <q-route-tab to="/blog" label="Blog" />
        <q-route-tab to="/contact-us" label="Contact" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      bordered
      class="drawer"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="footer text-white">
      <q-card class="my-card">
        <q-img class="footer-dialog" src="https://cdn.quasar.dev/img/parallax2.jpg">

        </q-img>
      </q-card>
      <q-toolbar>
        <q-toolbar-title>
            <div class="absolute-bottom text-subtitle2 text-center inner-txt">
          <q-img
            class="inner-logo"
            src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
          />
            <h2>Contact Us: </h2>
            <h3>INFO@LUXOITALIA.COM</h3>

          </div>
          </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.conta {
  background-image: url("~assets/bg-top.jpg");
  background-repeat: no-repeat;

}

.footer {
  background-color: #4c4571;
  height: 65vh;
  position: unset;

  // position: relative;
  // top:400vh;
}

.my-card {
  position: relative;
  bottom: 24vh;
  left: 15vw;
  width: 50vw;
  z-index: 9;
}

.footer-dialog {
  width: 70vw;
  height: 60vh !important;
}

.drawer {
  background: #ffffffdb;
}

.inner-txt{
  height: 60vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;

}

.inner-logo{
  width: 20vw;
}

.q-page-container{
  padding-bottom: unset !important;
}


</style>
