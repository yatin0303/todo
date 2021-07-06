<template>
  <v-app>
    helllo
    <router-view></router-view>
    <bottom-navigation></bottom-navigation>
  </v-app>
</template>

<script>
import bottomNavigation from './components/bottomNav.vue'
export default {
  components:{bottomNavigation}
};
</script>
