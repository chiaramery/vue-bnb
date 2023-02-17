<script>
export default {
  name: "AppNotfound",
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <main>
    <section>
      <h1 class="mt-5 mb-3 text-center">404 NOT FOUND</h1>
      <div class="text-center">
        <a @click.prevent="goHome()" class="btn btn-primary" href=""
          >Torna nella pagina home</a
        >
      </div>
    </section>
  </main>
</template>

<style lang="scss"></style>
