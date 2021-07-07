<template>
  <v-app :theme="theme">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
