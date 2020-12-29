<template>
  <v-container>
    <div class="block">
      <h2 class="text-center">2020 LEADERS</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/Leaders/11.png"),
        },
        {
          id: 2,
          src: require("../assets/Leaders/12.png"),
        },
        {
          id: 3,
          src: require("../assets/Leaders/13.png"),
        },
        {
          id: 4,
          src: require("../assets/Leaders/14.png"),
        },
        {
          id: 5,
          src: require("../assets/Leaders/15.png"),
        },
        {
          id: 6,
          src: require("../assets/Leaders/16.png"),
        },
      ],
    };
  },
};
</script>
