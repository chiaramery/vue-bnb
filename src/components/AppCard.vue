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
        <img :src="`${baseUrl}/storage/${apartment.image}`" alt="" />
      </div>
      <div class="title">
        <div v-if="apartment.is_active" class="favorite">
          <i class="fas fa-star me-2"></i>
          <span>In primo piano</span>
        </div>
        <h4 class="t-card">{{ apartment.title }}</h4>
        <p class="s-card">{{ apartment.address }}</p>
      </div>
      <div class="more-info">
        <router-link
          :to="{ name: 'single-apartment', params: { slug: apartment.slug } }"
          class="btn-cards"
          href=""
          >Dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;

.cards-bool {
  width: 100%;
  height: 330px;

  &:hover {
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
      content: "";
      background-color: black;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.5;
      border-radius: 0 20px 0 20px;
    }
    .favorite {
      position: absolute;
      top: 150px;
      width: 100%;
      padding: 10px 0;
      color: rgb(248, 255, 43);
      background-color: rgba($color: #303658, $alpha: 0.65);
      left: 50%;
      transform: translateX(-50%);

      i {
        animation: star infinite 1s;
        @keyframes star {
          from {
            transform: scale(1);
            color: rgb(183, 188, 34);
          }

          to {
            transform: scale(1.3);

            color: rgb(248, 255, 43);
          }
        }
      }
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
        background-color: #ec2b46;
        border-radius: 0 20px 0 20px;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
}
</style>
