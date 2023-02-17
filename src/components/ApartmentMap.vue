<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "ApartmentMap",
  data() {
    return {
      url: "http://localhost:8000",
      apartment: {},
      lati: null,
      long: null,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    axios
      .get(`${this.url}/api/apartments/${slug}`)
      .then((resp) => {
        if (resp.data.success) {
          // console.log('dentro la chiamata');
          this.lati = resp.data.apartment.latitude;
          this.long = resp.data.apartment.longitude;
        }
        // console.log(this.lati, this.long);
      })
      .catch((error) => {
        if (error.response) {
          // La risposta contiene un codice di stato diverso da 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // La richiesta è stata fatta ma non si è ricevuta risposta
          console.log(error.request);
        } else {
          // Si è verificato un errore durante la richiesta
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  },

  setup() {
    const mapRef = ref(null);
    const dotLocation = [12.67056, 41.531];
    onMounted(() => {
      const tt = window.tt;
      var map = tt.map({
        key: "upEwnVbILIY3XpQgAsiO3mhPUP6dQdCd",
        container: mapRef.value,
        style: "tomtom://vector/1/basic-main",
        center: dotLocation,
        zoom: 15,
      });
      var marker = new tt.Marker().setLngLat(dotLocation).addTo(map);
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());
    });

    return {
      mapRef,
    };
    function addMarker(map) {
      const tt = window.tt;
      let location = [this.long, this.lati];
      let popupOffset = 25;

      let marker = new tt.Marker().setLngLat(location).addTo(map);
      let popup = new tt.Popup({ offset: popupOffset }).setHTML(
        "Your address!"
      );
      marker.setPopup(popup).togglePopup();
    }
    onMounted(() => {
      // [...]
      addMarker(map);
    });
    function reverseGeocoding(marker, popup) {
      const tt = window.tt;
      tt.services
        .reverseGeocode({
          key: "iTF86GRA2V5iGjM6LMMV54lrK8v6zC1w",
          position: marker.getLngLat(),
        })
        .go()
        .then(function (result) {
          console.log(result.addresses[0].address.freeformAddress);
          popup.setHTML(result.addresses[0].address.freeformAddress);
        });
    }
    function addMarker(map) {
      const tt = window.tt;
      let location = [this.long, this.lati];
      let popupOffset = 25;

      let marker = new tt.Marker().setLngLat(location).addTo(map);
      let popup = new tt.Popup({ offset: popupOffset });
      reverseGeocoding(marker, popup);
      marker.setPopup(popup).togglePopup();
    }
  },
};
</script>

<template>
  <div id="map" ref="mapRef" class="mb-5"></div>
</template>

<style>
#map {
  height: 50vh;
  width: 90vw;
}
</style>
