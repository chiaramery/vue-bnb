<script>
import ApartmentDetails from "../pages/ApartmentDetails.vue";
export default {
  name: "AppCard",
  data() {
    return {
      baseUrl: "http://localhost:8000",
    };
  },
  components: {
    ApartmentDetails,
  },
  props: {
    apartment: Object,
  },
  computed: {},
};
</script>

<template>
  <div class="cards-bool">
    <div class="card-body">
      <div class="img-body">
        <img :src="`${baseUrl}/storage/${apartment.image}`" alt="">
      </div>
      <div class="title">
        <h4 class="t-card">{{ apartment.title }}</h4>
        <p class="s-card">{{ apartment.address }}</p>
      </div>
      <div class="more-info">
        <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" class="btn-cards"
          href="">More</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;

.cards-bool {
  margin-top: 100px;
  margin-left: 100px;
  width: 265px;
  height: 330px;

  :hover {
    box-shadow: -1px -1px 2px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    cursor: pointer;
  }

  .card-body {
    width: 100%;
    height: 100%;
    border-radius: 0 20px 0 20px;
    position: relative;

    /* After */
    &::after {
      content: '';
      background-color: black;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.3;
      border-radius: 0 20px 0 20px;
    }

    .img-body {
      width: 100%;
      height: 100%;
      border-radius: 0 20px 0 20px;
      background-color: aqua;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0 20px 0 20px;
      }
    }

    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 10px;
      z-index: 20;
      color: white;
      text-align: center;
      width: 100%;

      .t-card {
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }

      .s-card {
        font-size: 0.8rem;
      }
    }

    .more-info {
      width: 80%;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-cards {
        text-decoration: none;
        padding: 0.75rem 3.75rem;
        background-color: orange;
        border-radius: 0 20px 0 20px;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }

}
</style>
