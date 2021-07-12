<template>
  <v-app-bar app flat color="transparent" hide-on-scroll>
    <v-layout justify-start>
      <v-app-bar-nav-icon @click="home">ToDO</v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-layout>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        
          depressed
          color="transparent"
          router
          to="/home"
          class="btn"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            home
          </v-icon>
        </v-btn>
      </template>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip bottom allow-overflow>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        
          depressed
          color="transparent"
          router
          :to="myTasks"
          class="btn"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            task
          </v-icon>
        </v-btn>
      </template>
      <span>My Tasks</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-if="!isLoggedIn"
          depressed
          color="transparent"
          router
          to="/login"
          class="btn"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            login
          </v-icon>
        </v-btn>
      </template>
      <span>login</span>
    </v-tooltip>

    
    <v-app-bar-title></v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
    props:['user'],
  computed: {
    isLoggedIn() {
      return this.$store.getters.getToken;
    },
    myTasks(){
        return `/home/${this.$store.getters.getuserid}`
    }
  },
  methods:{
    home(){
      this.$router.replace('/home')
    }
  },
};
</script>

