<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Search Apartments',
                    routeName: 'search'
                },
            ]
        }
    }
}
</script>

<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar">
            <div class="container-fluid">
                <div class="logo">
                    <a class="navbar-brand" href="#">BoolBnB</a>
                </div>
            
                <div class="info">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link" aria-current="page">{{ item.label }}</router-link>
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

<style>
</style>