<script>
import ApartmentMap from "../components/ApartmentMap.vue";
export default {
  name: "ApartmentDetails",

  components: {
    ApartmentMap,
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col col-6 card border">
        <div class="m-2">
          <!-- <img src="" alt=""> -->
          <h2>immagine</h2>
        </div>
      </div>

      <div class="col col-6">
        <div class="card mt-2">
          <h2 class="text-center mt-3">Titolo appartamento</h2>
          <div class="description-wrapper">
            <div class="d-flex justify-content-center">
              <a class="text-dark mx-3" href=""
                >Via del bengodi 23 rimini italy</a
              >
            </div>

            <ul class="d-flex my-5">
              <li>Numero di stanze</li>
              <li>
                <i class="fa-solid fa-bed"></i>
                Numero di letti
              </li>
              <li>
                <i class="fa-solid fa-bath"></i>
                Numero di bagni
              </li>

              <li>
                <i class="fa-solid fa-house"></i>
                Metri quadrati
              </li>
            </ul>
            <hr />
            <h5 class="text-center mt-4">Servizi offerti:</h5>
            <ul class="d-flex justify-content-center">
              <li>WiFi</li>
              <li>Posto Macchina</li>
              <li>Piscina</li>
              <li>Portineria</li>
              <li>Sauna</li>
              <li>Vista Mare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ApartmentMap />
  </div>
</template>

<style lang="scss">
.container {
  margin-top: 80px;
  .row {
    margin: 0 auto;
    background-color: antiquewhite;
    .col {
      min-height: 50vh;
      .card {
        .description-wrapper {
          width: 80%;
          margin: 1.5rem auto;
          text-align: center;
          ul {
            margin-top: 1em;
            justify-content: space-between;
            li {
              list-style-type: none;
              margin: 1.5em;
            }
          }
          hr {
            width: 70%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
