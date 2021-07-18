<template>
  <q-layout class="conta" view="lHh lpR lFf">
    <q-header class="bg-transparent text-white" height-hint="98" reveal>
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
          <router-link to="/">
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
            size="1rem"
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
      <q-toolbar>
        <q-toolbar-title>
          <div class="absolute-bottom text-subtitle2 text-center inner-txt">
            <q-img
              class="inner-logo"
              src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
            />
            <h2>Contact Us:</h2>
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

.inner-logo {
  width: 20vw;
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

.q-page-container {
  padding-bottom: unset !important;
}

.toolbar {
  padding: 2rem 2rem;
}

.btn-toolbar {
  color: #4c4571 !important;
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
  width: 68vw;
  justify-content: space-evenly;
}

.q-header .q-tab__content {
  min-width: unset;
}

.q-tabs__content {
  flex-grow: 1;
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
