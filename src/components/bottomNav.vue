<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>Night</span>

      <v-icon>mdi-dark_mode</v-icon>
    </v-btn>

    <v-btn value="task">
      <span>new task</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="logout">
      <span>Logout</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>