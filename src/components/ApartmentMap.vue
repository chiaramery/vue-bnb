<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "ApartmentMap",
  data() {
    return {
      url: "http://localhost:8000/",
      apartment: {},
      lati: null,
      long: null,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    axios.get(`${this.url}api/apartments/${slug}`).then((resp) => {
      if (resp.data.success) {
        // console.log('dentro la chiamata');
        this.lati = resp.data.apartment.latitude;
        this.long = resp.data.apartment.longitude;
        this.creteMap(this.lati, this.long);
      }
      // console.log(this.lati, this.long);
    });
  },
  methods: {
    creteMap(lati, long) {
      var map = tt.map({
        key: "upEwnVbILIY3XpQgAsiO3mhPUP6dQdCd",
        container: "map",
        style: "tomtom://vector/1/basic-main",
        center: [long, lati],
        zoom: 15,
      });
      var marker = new tt.Marker().setLngLat([long, lati]).addTo(map);
    },
  },
};
</script>

<template>
  <div id="map" ref="mapRef" class="mb-5"></div>
</template>

<style>
#map {
  height: 50vh;
  /* width: 90vw; */
}
</style>
