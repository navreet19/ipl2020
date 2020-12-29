<template>
  <v-content>
    <Carousel/>
    <Team/>
    <Top/>
    <Player/>
  </v-content>
</template>

<script>
import Carousel from "../components/Carousel";
import Team from "../components/Team";
import Top from "../components/Top";
import Player from "../components/Player";
export default {
  name: "Home",
   components: {
    Carousel,
    Team,
    Top,
    Player,
  },
  data: () => ({
    return(){
    }
  }),
};
</script>
