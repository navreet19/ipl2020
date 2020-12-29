<template>
  <div class="carouselBlock">
    <v-carousel hide-delimiters show-arrows-on-hover cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
      <v-row class="fill-height title" align="end" justify="center">
        <div >{{ item.title }}</div>
      </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: require("../assets/Pictures/1.jpg"),
          title: "IPL 2020 WINNER: MUMBAI INDIANS"
        },
        {
          src: require("../assets/Pictures/2.jpg"),
          title: "TEAM CAPTAIN: ROHIT SHARMA"
        },
        {
          src: require("../assets/Pictures/3.jpg"),
          title: "MAN OF THE MATCH: TRENT BOULT"
        },
        {
          src: require("../assets/Pictures/4.jpg"),
          title: "TEAM MI CELEBRATES THE WICKET"
        }
      ],
    };
  },
};
</script>
