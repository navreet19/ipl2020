<template>
  <v-container>
    <v-toolbar flat >
          <v-toolbar-side-icon>
        <v-img src="../assets/Pictures/logo.png" height="60px" width="120px"/>
    </v-toolbar-side-icon> 
      <v-toolbar-title>Dream 11 IPL T20</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/" >HOME </router-link> 
        </v-btn>
        <v-btn text>
          <router-link to="/about" >ABOUT </router-link> 
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
