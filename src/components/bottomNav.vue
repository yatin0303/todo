<template>
  <v-bottom-navigation :value="value" color="primary">
    <v-btn @click="darkMode">
      <!-- <span></span> -->

      <v-icon>{{ mode }}</v-icon>
    </v-btn>

    <v-btn>
      <!-- <span>Favorites</span> -->

      <v-icon>add_task</v-icon>
    </v-btn>

    <v-btn fab>
      <!-- <span>Nearby</span> -->

      <v-icon>logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      mode: "dark_mode",
    };
  },
  methods: {
    darkMode() {
      if (this.theme === "light") {
        this.$store.dispatch("setTheme", "dark");
        this.mode = "light_mode";
      } else {
        this.$store.dispatch("setTheme", "light");
        this.mode = "dark_mode";
      }
    },
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>
