<template>
  <v-app>
    <v-app-bar app color="white">
      <Header />
    </v-app-bar>
    <router-view></router-view>
    <v-footer>
      <Bottom/>
    </v-footer>
    <v-main> </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Bottom from "./components/Bottom";

export default {
  name: "App",

  components: {
    Header,
    Bottom,
  },

  data: () => ({
  }),
};
</script>
<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>