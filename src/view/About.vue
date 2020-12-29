<template>
  <v-content>
    <div class="staticHero">
      <v-img :aspect-ratio="25/9" src="../assets/Pictures/5.webp">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center"> Contact Details </h2>
        <h3 class="text">BCCI-IPL</h3>
        <h3 class="text">4th Floor, Cricket Centre</h3>
        <h3 class="text">Wankhede Stadium ‘D’ Road, Churchgate</h3>
        <h3 class="text">Mumbai- 400020 India</h3>
        <h3 class="text">T +91 22 22800300</h3>
        <h3 class="text">F +91 22 22800354</h3>
</v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Sponsors</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/Sponsors/1.png"),
          name: 'Dream 11',
          title: 'Title Sponsor'
        },
        {
          id: 2,
          src: require("../assets/Sponsors/2.png"),
          name: 'Star Sports',
          title: 'Official Broadcaster'
        },
        {
          id: 3,
          src: require("../assets/Sponsors/3.png"),
          name: ' CEAT',
          title: 'Official Digital Streaming Partner'
        },
      ]
    };
  }
};
</script>