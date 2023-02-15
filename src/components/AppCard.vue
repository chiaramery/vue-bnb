<script>
export default {
  name: "AppCard",
  data() {
    return {
      baseUrl: "http://localhost:8000",
    };
  },
  props: {
    apartment: Object,
  },
  computed: {},
};
</script>

<template>
  <div class="ms-5 card mb-4" style="width: 18rem;">
    <div class="card-body">
      <img :src="`${baseUrl}/storage/${apartment.image}`" class="card-img-top" alt="..." />
      <h5 class="card-title mt-3 mb-3 text-center">{{ apartment.title }}</h5>
      <p class="card-text"><i class="fa-solid fa-person-booth"></i> {{ apartment.rooms }}</p>
      <p class="card-text"><i class="fa-solid fa-bed"></i> {{ apartment.beds }}</p>
      <p class="card-text"><i class="fa-solid fa-location-dot"></i> {{ apartment.address }}</p>
      <router-link :to="{ name: 'apartmentDetails', params: { slug: apartment.slug } }" class="btn btn-secondary"
        href="">Maggiori Dettagli</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
