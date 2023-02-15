<script>
import AppHeader from './AppHeader.vue';
export default {
    name: 'HomePage',
    components: {
    AppHeader,
  }
}
</script>

<template>
    <div class="jumbo-container">
        <!-- Header -->
        <AppHeader />
        <main>
            <!-- Jumbotron -->
            <div class="jumbotron">
                <h1 class="text-light text-center mt-5 mb-5">Cerca l'appartamento che fa per te</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default">
                    <button type="button" class="btn btn-danger">Cerca</button>
                </div>

            </div>
            <!-- /Jumbotron -->
        </main>
    </div>

</template>

<style scoped lang="scss">
.jumbo-container {
    background-image: url(../img/jumbotron.jpeg);
    background-size: cover;

    main {
        .jumbotron {
            height: 100vh;
            width: 50%;
            margin: 0 auto;

            h1 {
                padding-top: 20%;
            }

            .input-group {
                padding-left: 6.5em;
                width: 600px;
            }
        }
    }
}
</style>