<script>
import { onMounted, ref } from "vue";
export default {
  name: "ApartmentMap",
  setup() {
    const mapRef = ref(null);
    onMounted(() => {
      const tt = window.tt;
      var map = tt.map({
        key: "upEwnVbILIY3XpQgAsiO3mhPUP6dQdCd",
        container: mapRef.value,
        style: "tomtom://vector/1/basic-main",
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());
    });

    return {
      mapRef,
    };
    function addMarker(map) {
      const tt = window.tt;
      let location = [12.38754, 43.11174];
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
      let location = [12.38754, 43.11174];
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
  <div id="map" ref="mapRef"></div>
</template>

<style>
#map {
  height: 50vh;
  width: 50vw;
}
</style>
