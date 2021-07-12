<template>
  <v-app theme='dark'>
    <top-navigation></top-navigation>
 
      <v-main>
      <router-view></router-view>
      </v-main>
      <v-snackbar top app v-model="snackbar">Please Login To view tasks<template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="toggle"
        >
          Close
        </v-btn>
      </template></v-snackbar>
  </v-app>
</template>

<script>
import topNavigation from './components/topNavigation.vue'
export default {
  components: {topNavigation},
  data() {
    return {
     
    };
  
  },
  created(){
    this.$store.dispatch('trylogin')
    console.log(process.env.VUE_APP_API_KEY);
    
  },
  computed:{
    snackbar(){
      
      return this.$store.getters.snackbar
    }
  }, 
  methods:{
    toggle(){
      this.$store.dispatch('loadSnackbar')
    }
  }
};
</script>