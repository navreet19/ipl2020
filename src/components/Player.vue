<template>
  <div class="block">
  <h2 class="text-center">ALL PLAYERS</h2>
  <v-container class="center">
    <ag-grid-vue
      style="width: 1020px; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :pagination=true
      rowSelection="multiple"
    >
    </ag-grid-vue>
  </v-container>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Player Name", field: "Player_Name", sortable: true, filter: true},
      { headerName: "DOB", field: "DOB", sortable: true, filter:true},
      { headerName: "Batting Hand", field: "Batting_Hand", sortable: true, filter: true},
      { headerName: "Bowling Skill", field: "Bowling_Skill", sortable: true, filter: true},
      { headerName: "Country", field: "Country", sortable: true, filter: true}
    ];
    fetch("player.json")
      .then(response => response.json())
      .then(rowData => (this.rowData = rowData))
      .catch(error => console.log(error));
  },
};
</script>