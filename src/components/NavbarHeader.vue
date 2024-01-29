<template>
  <nav>
    <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
    <router-link to="/search" class="nav-link" :class="{ active: $route.path === '/search' }"
      >Search</router-link
    >
    <router-link
      to="/reading-list"
      class="nav-link"
      :class="{ active: $route.path === '/reading-list' }"
      >Reading list</router-link
    >
    <router-link to="/add-book" class="nav-link" :class="{ active: $route.path === '/add-book' }"
      >Add Book</router-link
    >
  </nav>
</template>

<script>
export default {
  name: 'NavbarHeader'
}
</script>

<style scoped>
.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: black;
}

.active {
  font-weight: bold;
}
</style>
