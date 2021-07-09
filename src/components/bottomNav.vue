<template>
  <v-bottom-navigation app grow  v-model="value" hide-on-scroll>
    <v-btn height="100%" :value="value" @click="darkMode">
      <!-- <span>Recent</span> -->

      <v-icon>{{mode}}</v-icon>
    </v-btn>
    <v-btn height="100%" value="nearby">
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
      const theme=this.$vuetify.theme.dark;
      this.$vuetify.theme.dark=!theme;
      this.mode=theme?'dark_mode':'light_mode'
    },
  },
};
</script>
