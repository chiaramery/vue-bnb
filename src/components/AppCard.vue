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
  <div class="ms-5 card mb-4" style="width: 18rem">
    <div class="card-body">
      <img
        :src="`${baseUrl}/storage/${apartment.image}`"
        class="card-img-top"
        alt="..."
      />
      <h5 class="card-title">{{ apartment.title }}</h5>
      <p class="card-text">{{ apartment.rooms }}</p>
      <p class="card-text">{{ apartment.beds }}</p>
      <p class="card-text">{{ apartment.address }}</p>
      <router-link
        :to="{ name: 'apartmentDetails', params: { slug: apartment.slug } }"
        class="btn btn-primary"
        href=""
        >Maggiori Dettagli</router-link
      >
    </div>
  </div>
</template>

<style lang="scss"></style>
