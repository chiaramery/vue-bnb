<script>
import ApartmentDetails from "../pages/ApartmentDetails.vue";
export default {
  name: "AppList",
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

<template><!-- <div class="cards-bool">
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
</div> -->
  <div class="super-card">
    <div class="title-card">
      <h3>{{ apartment.title }}</h3>
      <p>{{ apartment.address }}</p>
      <p>{{ apartment.square_meters }} Mq</p>
      <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" class="btn-register"
        href="">More</router-link>
    </div>
    <div class="img-card">
      <img :src="`${baseUrl}/storage/${apartment.image}`" alt="">
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;



.super-card {
  box-shadow: -1px 1px 5px -1px rgba(31, 31, 31, 0.49);
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  z-index: 5;



  .title-card {
    width: 300px;
    height: 100%;
    text-align: center;
    position: relative;
    background-color: #f1f3f9;
    z-index: 30;

    h3 {
      margin-top: 2rem;
      color: #303658;
      font-weight: 900;
    }

    p {
      margin-top: 1rem;
      color: #f14d63;
      font-weight: 300;
    }
  }



  .img-card {
    width: calc(100% - 300px);
    height: 100%;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .btn-register {
    position: absolute;
    width: 60%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem 1rem;
    background-color: #EC2B46;
    border-radius: 0.5rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }



}


@media screen and (max-width:776px) {
  .super-card {


    .title-card {
      width: 100%;
      background-color: rgba(255, 255, 255, 0);

      h3 {
        color: white;
      }

      p {
        color: white;
      }
    }

    .img-card {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 10;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: black;
        opacity: 0.4;
        z-index: 12;
      }
    }
  }
}
</style>