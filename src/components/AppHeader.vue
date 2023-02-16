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
            <!-- <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/admin">Admin</a>
                        </li> -->
          </ul>
        </div>
        <!-- <div class="info">
                    <a href="#">Sign in</a>
                    <a href="#">Login</a>
                </div> -->
      </div>
    </nav>
    <!-- /Navbar -->
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
      flex-direction: row;
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>
