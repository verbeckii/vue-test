<template>
  <div id="app">
    <NavbarHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarHeader from './components/NavbarHeader.vue'

export default {
  name: 'App',
  components: {
    NavbarHeader
  }
}
</script>
