<template>
  <div>
    <v-container class="pa-5 ">
      <v-layout row justify-center v-for="user in users" :key="user.id">
        <v-flex xs12 md8 sm8>
          <v-card class="pa-5 ma-2" @click="switchRoute(user.id)">
            <v-layout row >
              <v-flex xs6 md4 >
                <div class="caption grey--text">Username</div>
                <div>{{ user.name }}</div>
              </v-flex>
              <v-flex xs6 md4>
                <div class="caption grey--text">Age</div>
                <div>{{ user.age }}</div>
              </v-flex>

              <v-flex xs6 md2>
                <div class="caption grey--text">DOB</div>
                <div>{{ user.DOB }}</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <bottom-navigation></bottom-navigation>
    <v-layout justify-center>
      <v-btn class="mx-auto" fab dark color="indigo" bottom fixed large router :to="currentUser">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
import bottomNavigation from "../components/bottomNav.vue";
export default {
  components: { bottomNavigation },
  data() {
    return {
      users: []}
  },
  created(){
    this.fillUsers();
  },
  computed:{
    currentUser(){
     return  `/home/${this.$store.getters.getuserid}/addTask`
    }
  },
  methods: {
    switchRoute(id) {
      
      this.$router.push(`/home/${id}`);
    },
    async fillUsers(){
      await this.$store.dispatch('users/getUser')
      this.users=this.$store.getters['users/getUsers']
      
    }
  },
  
};
</script>
