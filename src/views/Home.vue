<template>
  <div>
    <v-container class="pa-5 ">
      <v-layout row justify-center v-for="user in users" :key="user.age">
        <v-flex xs12 md6>
          <v-card class="pa-5 ma-2" @click="switchRoute(user.fullname)">
            <v-layout row>
              <v-flex xs6 md4>
                <div class="caption grey--text">Username</div>
                <div>{{ user.fullname }}</div>
              </v-flex>
              <v-flex xs6 md4>
                <div class="caption grey--text">Age</div>
                <div>{{ user.age }}</div>
              </v-flex>

              <v-flex xs6 md2>
                <div class="caption grey--text">DOB</div>
                <div>{{ user.dob }}</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <bottom-navigation></bottom-navigation>
    <v-layout justify-center>
      <v-btn class="mx-auto" fab dark color="indigo" bottom fixed large router to="/home/tasks">
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
      users: [
        { fullname: "yatin", age: 1, dob: "3-3-1997" },
        { fullname: "aman", age: 2, dob: "3-3-1997" },
        { fullname: "naman", age: 3, dob: "3-3-1997" },
        { fullname: "chaman", age: 4, dob: "3-3-1997" },
        { fullname: "daman", age: 5, dob: "3-3-1997" },
        { fullname: "lemon", age: 6, dob: "3-3-1997" },
      ],
    };
  },
  methods: {
    switchRoute(name) {
      // console.log(this.$route);
      this.$router.push(`/home/${name}`);
    },
  },
  
};
</script>
