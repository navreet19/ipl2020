<template>
<div class="block">
  <h2 class="text-center">CURRENT TEAMS</h2>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :item-class="itemRowBackground"
      loading-text="Loading... Please wait"
      hide-default-footer
      hide-default-headers
    ></v-data-table>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "Team",
  methods: {
  itemRowBackground: function (item) {
     return item.items> 4.2 ? 'style-1' : 'style-2'
  }
},
  data () {
      return {
        search: '',
        headers: [
          { text: 'Team Name', align: 'start', sortable: true, value: 'Team' },
          { text: 'City', align: 'start', sortable: true, value: 'City' },
          { text: 'State', align: 'start', sortable: true, value: 'State' },
          { text: 'Debut', align: 'start', sortable: true, value: 'Debut' },
          { text: 'Owner', align: 'start', sortable: true, value: 'Owner' },
          { text: 'Home Ground', align: 'start', sortable: true, value: 'Home_Ground' },
        ],
        items : [
          {"Team":"Chennai Super Kings","City":"Chennai","State":"Tamil Nadu","Debut":"2008","Owner":"India Cements","Home_Ground":"M.A. Chidambaram"},
          {"Team":"Delhi Capitals","City":"Delhi","State":"Delhi","Debut":"2008","Owner":"GMR Group and Jsw group","Home_Ground":"Arun Jaitley Stadium"},
          {"Team":"King XI Punjab","City":"Mohali","State":"Punjab","Debut":"2008","Owner":"Mohit Burman, Ness Wadia, Preity Zinta and Karan Paul","Home_Ground":"PCA Stadium Mohali"},
          {"Team":"Kolkata Knight Riders","City":"Kolkata","State":"West Bengal","Debut":"2008","Owner":"Red Chillies Entertainment and Mehta Group","Home_Ground":"Eden Gardens"},
          {"Team":"Mumbai Indians","City":"Mumbai","State":"Maharashtra","Debut":"2008","Owner":"Reliance Industries","Home_Ground":"Wankhede Stadium"},
          {"Team":"Rajasthan Royals","City":"Jaipur","State":"Rajasthan","Debut":"2008","Owner":"Manoj Badale","Home_Ground":"Swai Mansingh Stadium"},
          {"Team":"Royal Challengers Bangalore","City":"Bengaluru","State":"Karnataka","Debut":"2008","Owner":"United Spirits","Home_Ground":"M. Chinnaswamy Stadium"},
          {"Team":"Sunrisers Hyderabad","City":"Hyderabad","State":"Telangana","Debut":"2008","Owner":"Sun Tv Network","Home_Ground":"Rajiv Gandhi International Cricket Stadium"}
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
.table-header {
  thead {
    background-color: rgb(20, 25, 104);
    font-size: 100%;
  }
}
</style>
