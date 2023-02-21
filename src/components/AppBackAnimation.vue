<script>

export default {
    name: "AppBackAnimations",
    data() {
        return {
            animationScroll: null,
        };
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<template>
    <div class="square"></div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;



.square {
    position: fixed;
    width: 70px;
    height: 100vh;
    background-color: #303658a0;
    right: 300px;
    top: 0;
    z-index: -1;



    &::after {
        content: '';
        position: absolute;
        background-color: #30365869;
        right: -100%;
        top: 0;
        width: 50%;
        height: 100%;
    }

    &::before {
        content: '';
        position: absolute;
        background-color: #3036583e;
        right: -175%;
        top: 0;
        width: 25%;
        height: 100%;
    }


}
</style>