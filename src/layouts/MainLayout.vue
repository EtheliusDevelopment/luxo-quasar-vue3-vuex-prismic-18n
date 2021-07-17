<template>
  <q-layout class="conta" view="lHh lpR lFf">

    <q-header class="bg-transparent text-white" height-hint="98">
      <q-toolbar>
        <q-btn class="mobile-only" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title >
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg ">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs v-if="$q.platform.is.desktop">
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

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.conta{
  background-image: url('~assets/bg-top.jpg');
  background-repeat: no-repeat;
  height: 400vh ;
}
</style>
