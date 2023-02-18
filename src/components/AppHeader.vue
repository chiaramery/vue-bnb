<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Search Apartments",
          routeName: "search",
        },
        {
          label: "Apartments",
          routeName: "apartments",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container-fluid d-flex align-items-center">
        <div class="logo">
          <a class="navbar-brand btn btn-warning" href="#">BoolBnB</a>
        </div>

        <div class="info">
          <ul>
            <li
              class="nav-item btn btn-warning d-flex"
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <router-link
                :to="{ name: item.routeName }"
                class="nav-link"
                aria-current="page"
                >{{ item.label }}</router-link
              >
            </li>
            <li>
              <a
                class="nav-item btn btn-warning d-flex"
                href="http://localhost:8000/register"
                >Registrati</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  height: 100px;

  .container-fluid {
    height: 100px;
  }
  .info {
    ul {
      display: flex;
      list-style-type: none;
      flex-direction: row;
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>
