<template>
  <q-layout class="conta" view="lHh lpR lFf">
    <q-header class="bg-teal text-white" height-hint="98" reveal>
      <q-toolbar class="toolbar">
        <q-btn
          class="mobile-only"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="navbar-title desktop-only">
          <router-link to="/" class="wrapper-logo">
            <q-img
              class="navbar-logo"
              src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
            />
          </router-link>

          <q-tabs>
            <!-- <q-route-tab to="/" label="Home" /> -->
            <q-route-tab to="/about" label="About Us" />
            <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
            <q-route-tab to="/wine-club" label="Wine Club" />
            <q-route-tab to="/testimonials" label="Testimonials" />
            <q-route-tab to="/quiz" label="Quiz" />
            <q-route-tab to="/blog" label="Blog" />
            <q-route-tab to="/contact-us" label="Contact" />
          </q-tabs>

          <q-btn
            size="1.1vw"
            class="q-px-lg q-py-xs btn-toolbar"
            color="white"
            label="Start a planning"
          />
        </q-toolbar-title>
      </q-toolbar>
      <!--
      <q-tabs class="desktop-only">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About Us" />
        <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
        <q-route-tab to="/wine-club" label="Wine Club" />
        <q-route-tab to="/testimonials" label="Testimonials" />
        <q-route-tab to="/quiz" label="Quiz" />
        <q-route-tab to="/blog" label="Blog" />
        <q-route-tab to="/contact-us" label="Contact" />
      </q-tabs> -->
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

    <q-footer elevated class="footer text-white desktop-only">
      <q-card class="my-card">
        <q-img
          class="footer-dialog"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
        </q-img>
      </q-card>

      <div class="wrapper-footer-items">
        <q-img
          class="inner-logo"
          src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
        />
        <br />

        <q-img src="~assets\contact-us.svg" class="contact-footer" />
        <br />

        <q-img src="~assets\mail-footer.svg" class="mail-footer" />

        <br />

        <q-img src="~assets\follow-us.svg" class="follow-footer" />
        <br />

        <SocialComponent class="social-component" />
      </div>

      <!-- </div> -->
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SocialComponent from "../components/SocialComponent.vue";

export default {
  components: {
    SocialComponent,
  },
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
  height: 120vh;
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
  background: #ffffffdb !important;
}

.inner-txt {
  height: 60vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.navbar-title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding-bottom: 3rem;
}

.navbar-logo {
  // width: 15vw;
  width: 12vw;
  // margin-top: 2vh;
}

.wrapper-logo {
  flex-grow: 1;
}

.q-page-container {
  padding-bottom: unset !important;
}

.toolbar {
  padding: 2rem 2rem;
}

.btn-toolbar {
  color: #4c4571 !important;
  flex-grow: 1;
}

.q-tab {
  padding: unset;
  min-width: unset !important;
}

.q-page {
  margin-bottom: 30vh;
}

.q-tabs__content {
  // padding: 0 8rem;
  // width: 68vw;
  justify-content: space-around;
}

.q-header .q-tab__content {
  min-width: unset;
}

.q-tabs__content {
  flex-grow: 1;
}

.q-tabs {
  flex-grow: 6;
}

.wrapper-footer-items {
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 6vh;
  margin-left: 10vw;
  margin-right: 10vw;
}

.inner-logo {
  width: 20vw;
  margin-bottom: 3vh;
}

.mail-footer {
  width: 22vw;
  margin-bottom: 2rem;
}

.contact-footer {
  width: 13vw;
  margin-bottom: 1vh;
}

.follow-footer {
  width: 12vw;
  margin-bottom: 1vh;
}

// ******SANDBOX
// .q-toolbar.row.no-wrap.items-center.toolbar {
//     border: 3px solid;
// }

// .q-toolbar__title.ellipsis.navbar-title {
//     border: 3px solid yellow;
// }

// .q-tabs.row.no-wrap.items-center.q-tabs--not-scrollable.q-tabs--horizontal.q-tabs__arrows--inside.desktop-only {
//     border: 3px solid fuchsia;

// }

// .q-tabs__content.row.no-wrap.items-center.self-stretch.hide-scrollbar.q-tabs__content--align-center {
//     border: 3px solid greenyellow;
// }

// .q-tab__content.self-stretch.flex-center.relative-position.q-anchor--skip.non-selectable.column {
//     min-width: unset !important;
// }
</style>
