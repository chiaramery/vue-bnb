<script>
export default {
    name: 'HomePage',
}
</script>

<template>
    <div class="jumbo-container">
        <header>
            <!-- Navbar -->
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="logo">
                        <a class="navbar-brand text-light" href="#">BoolBnB</a>
                    </div>
                    <div class="info">
                        <a href="#">Sign in</a>
                        <a href="#">Login</a>
                    </div>
                </div>
            </nav>
            <!-- /Navbar -->
        </header>
        <!-- Jumbotron -->
        <div class="jumbotron">
            <h1 class="text-center mb-5">Cerca l'appartamento che fa per te</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default">
                <button type="button" class="btn btn-danger">Cerca</button>
            </div>

        </div>
        <!-- /Jumbotron -->
    </div>
    <main>
        <div class="container mt-3">
            <section id="apartment-promotion">
                <div class="d-flex justify-content-center">
                    <h3 class="m-1">Appartamenti in evidenza</h3>
                    <button type="button" class="btn btn-outline-danger">Vedi tutti</button>
                </div>

                <div class="card mt-5 mb-5" style="width: 16rem;">
                    <img src="../img/prova-app.jpg" class="card-img-top" alt="prova-app.jpg">
                    <div class="card-body">
                        <h5>Card title</h5>
                        <p>beds<i class="fa-solid fa-bed"></i></p>
                        <p>shower<i class="fa-solid fa-shower"></i></p>
                        <p>dot<i class="fa-solid fa-location-dot"></i></p>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">
.jumbo-container {
    background-image: url(../img/jumbotron.jpg);
    background-size: cover;

    header {

        .info {
            margin: 1em;

            a {
                margin-right: 1em;
                padding: .5em;
                color: white;
                text-decoration: none;
            }
        }
    }

    .jumbotron {
        height: 680px;
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

    main {
        background-color: rgb(238 238 238);
    }
}

main {
    #apartment-promotion {
        h3 {
            padding-right: 3em;
        }
    }
}
</style>