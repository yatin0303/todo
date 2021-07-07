<template>
  <div>
    <v-container>
      <v-row justify="center" v-for="user in users" :key="user">
        <v-col md="5" xs="12">
          <v-card class="py-3 ma-1">
            <v-card-title>{{ user.fullname }}</v-card-title>
            <v-card-subtitle>{{ user.dob }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-vol>
              <v-card-text>hello</v-card-text>
            </v-vol>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <bottom-navigation></bottom-navigation>
  </div>
</template>
<script>
import bottomNavigation from "../components/bottomNav.vue";
export default {
  components: { bottomNavigation },
  data() {
    return {
      users: [
        { fullname: "yatin", age: "24", dob: "3-3-1997" },
        { fullname: "aman", age: "2", dob: "3-3-1997" },
        { fullname: "naman", age: "24", dob: "3-3-1997" },
        { fullname: "chaman", age: "24", dob: "3-3-1997" },
        { fullname: "daman", age: "24", dob: "3-3-1997" },
      ],
    };
  },
};
</script>
