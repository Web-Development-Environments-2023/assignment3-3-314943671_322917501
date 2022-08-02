<template>
  <div id="app">
    <div id="nav">
      <img src="https://thumbs.dreamstime.com/b/cooking-recipe-idea-logo-sheet-hat-as-bulb-inspiration-icon-illustration-202516492.jpg" width="150" height="150" alt="logo" style="width: 150px; height: 50px; object-fit: cover;">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link> |
      <router-link :to="{ name: 'search' }">Search</router-link> |
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        Guest:
        <router-link :to="{ name: 'register' }">Register</router-link> |
        <router-link :to="{ name: 'login' }">Login</router-link> |
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button> |
      </span>
    </div>
    <div class="column is-1">
        <!-- theme switcher -->
        <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
        <label for='theme-switch'>
            <span v-if="darkMode === true">
                <img alt="logo" src="./assets/images/sun.png" width="40">
            </span>
            <span v-else>
                <img alt="logo" src="./assets/images/moon.png" width="40">
            </span>
        </label>
    </div>
  <section class="hero is-medium has-text-centered">
    <div class="hero-body">
        <div class="container">
            <h1 class="title dynamic-title">
                <span v-if="darkMode === true">Dark Theme</span>
                <span v-else>Light Theme</span>
            </h1>
        </div>
    </div>
  </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    data() {
    return {
        darkMode: false,
    }},
   mounted() {
    // set page title
    document.title = 'Multiple Themes in Vue.js';

    // set 'app-background' class to body tag
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");

    // check for active theme
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === 'dark') {
        htmlElement.setAttribute('theme', 'dark')
        this.darkMode = true
    } else {
        htmlElement.setAttribute('theme', 'light');
        this.darkMode = false
    }
},
    watch: {
        darkMode: function () {
            // add/remove class to/from html tag
            let htmlElement = document.documentElement;

            if (this.darkMode) {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        }
    }
      }
    };
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: "Frank Ruhl Libre",Georgia,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #ebebeb;
}

#nav {
  padding: 30px;
  text-align: left; 
  box-shadow: 0 0 10px 1px rgba(32, 120, 0, 0.5);
  background: #fff;
 
}



#nav a {
  font-weight: bold;
  font-size: larger;
  margin: 30px;
  color: black;
  font-family: "Frank Ruhl Libre", Georgia,sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

// img {
//     width: 150px;
//     height: 50px;
//     object-fit: cover;
// }

</style>
