<template>
  <v-app theme='dark'>
    <top-navigation></top-navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import topNavigation from './components/topNavigation.vue'
export default {
  components: {topNavigation},
  data() {
    return {};
  
  },
  created(){
    this.$store.dispatch('signin')
  }
};
</script>