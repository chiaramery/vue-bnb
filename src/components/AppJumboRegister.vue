<script>
export default {
    name: 'AppJumboRegister'
}
</script>

<template>
    <div class="cont-jumbo">
        <div class="img-jumbo">
            <h2>Registrati sul nostro sito</h2>
            <a href="http://localhost:8000/register" class="btn-register">Registrati</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.cont-jumbo {
    width: 100%;
    background-color: rgb(251, 251, 251);
    margin-top: 5rem;
    margin-bottom: 5rem;

    .img-jumbo {
        width: 100%;
        height: 400px;
        background-image: url(../img/jumbotron.jpg);
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
        transition: all 0.5s ease-in-out;
        overflow: hidden;



        .btn-register {
            padding: 0.8rem 1.6rem;
            background-color: orangered;
            border-radius: 0.5rem;
            text-decoration: none;
            position: absolute;
            bottom: 30px;
            left: 50%;
            z-index: 100;
            transition: all 0.6s ease-in;
            color: white;
            transform: translateX(-50%);
            visibility: hidden;
            opacity: 0;
        }

        &:hover .btn-register {
            visibility: visible;
            opacity: 1;
        }


        &::after {
            width: 100%;
            height: 100%;
            background-color: black;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            opacity: 0.4;
            z-index: 10;
        }

        h2 {
            width: 140%;
            position: absolute;
            left: 110%;
            font-size: 110px;
            text-transform: uppercase;
            font-weight: 900;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-color: rgba(202, 201, 201, 0.716);
            animation: moveup 20s infinite ease-in-out;
            opacity: 1;
            z-index: 20;

            @keyframes moveup {
                from {
                    left: 110%;
                }

                to {
                    left: -130%;
                }

            }
        }
    }
}

@media screen and (max-width:1410px) {
    .img-jumbo {
        h2 {
            font-size: 90px;
        }
    }
}

@media screen and (max-width:977px) {
    .img-jumbo {
        h2 {
            font-size: 70px;
        }
    }
}

@media screen and (max-width:776px) {
    .img-jumbo {
        height: 500px;

        h2 {
            font-size: 35px;
        }
    }
}
</style>