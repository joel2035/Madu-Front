<template>
  <div class="mapView">
    <div id="map" ref="mapElement"></div>
  </div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Map",
  components: {},
  mounted() {
    const mymap = L.map(this.$refs["mapElement"]).setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken:
          "pk.eyJ1IjoiZmVkcmUzMCIsImEiOiJjazV4dmprMTAxMXJ0M3Bwb3Vmamp3cjl3In0.xZ4xLHxklPwmZ_SMuPQtnw"
      }
    ).addTo(mymap);
  }
};
</script>

<style lang="scss" scoped>
#map{
  height: 600px;
}
  

  

  
</style>
