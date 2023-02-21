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
          label: "Ricerca avanzata",
          routeName: "search",
        },
        {
          label: "Appartamenti",
          routeName: "apartments",
        },
      ],
      mobileNav: null,
      mobile: null,
      scrolledNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  },
};

</script>

<template><!-- Navbar -->
  <!-- <nav class="navbar">
          <div class="container-fluid d-flex align-items-center">
            <div class="logo">
              <a class="navbar-brand btn btn-warning" href="http://localhost:8000">BoolBnB</a>
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
        </nav> -->
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="d-flex justify-content-between pt-3">
      <div class="logo">
        <a href="http://localhost:8000">BOOL<span>bnb</span></a>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile" class="nav-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link" aria-current="page">{{ item.label
            }}</router-link>
          </li>
          <li class="pb-1">
            <a href="http://localhost:8000/register">Registrati</a>
          </li>
        </ul>
      </div>
      <div class="icon-hamburger">
        <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{ 'active-icon': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link" aria-current="page">{{ item.label
            }}</router-link>
          </li>
          <li>
            <a href="http://localhost:8000/register">Registrati</a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style lang="scss">
//header {
//height: 100px;
//
//.container-fluid {
//  height: 100px;
//}
//.info {
//  ul {
//    display: flex;
//    list-style-type: none;
//    flex-direction: row;
//    li {
//      margin: 0 10px;
//    }
//  }
//}
//}
header {
  width: 100%;
  color: white;
  background-color: rgba($color: #303658, $alpha: 0.25);
  position: fixed;
  z-index: 100;
  transition: all 0.5s ease;

  nav {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    position: relative;
    transition: all 0.5s ease;

    @media (min-width:1140px) {
      max-width: 1140px;
    }

    ul,
    .nav-link {
      font-weight: 550;
      color: white;
      list-style: none;
      text-decoration: none;
      margin-bottom: 0;
    }

    li {
      text-transform: uppercase;
      margin-left: 35px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 14px;
    }

    .nav-link,
    a {
      font-size: 14px;
      transition: all 0.5s ease;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #303658;
        border-color: #303658;
      }
    }

    .logo {
      display: flex;
      align-items: center;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon-hamburger {
      height: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: all 0.5s ease;
      }
    }

    .active-icon {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      background-color: #303658;
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 280px;
      height: 100%;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        margin-top: 20px;

        .nav-link {
          color: white;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #303658;
  box-shadow: 0 4px 6px -1px rgba(48, 54, 88, 0.1), 0 2px 4px -1px rgba(48, 54, 88, 0.06);

  nav {
    padding: 8px 0;
  }
}
</style>
