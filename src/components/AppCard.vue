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
      <h5 class="card-title">{{ apartment.title }}</h5>
      <p class="card-text">{{ apartment.rooms }}</p>
      <p class="card-text">{{ apartment.beds }}</p>
      <p class="card-text">{{ apartment.address }}</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
