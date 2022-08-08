<template>
  <div id="app">
    <div id="nav">
      <img
        src="https://thumbs.dreamstime.com/b/cooking-recipe-idea-logo-sheet-hat-as-bulb-inspiration-icon-illustration-202516492.jpg"
        width="150" height="150" alt="logo" style="width: 150px; height: 50px; object-fit: cover;"> &nbsp; &nbsp;

      <router-link :to="{ name: 'about' }">About Us</router-link> &nbsp; &nbsp; &nbsp;
      <router-link :to="{ name: 'main' }">Home</router-link> &nbsp; &nbsp; &nbsp;
      <router-link :to="{ name: 'search' }">Search</router-link> &nbsp; &nbsp; &nbsp;

      <span v-if="!$root.store.username">
        Guest:
        <router-link :to="{ name: 'register' }">Register</router-link> &nbsp; &nbsp; &nbsp;
        <router-link :to="{ name: 'login' }">Login</router-link> &nbsp; &nbsp; &nbsp;
      </span>
      <span v-else>
        <b-dropdown id="dropdown-1" text="Personal" class="m-md-2" variant="outline">
          <b-dropdown-item>
            <router-link :to="{ name: 'myrecipes' }">My Recipes</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'myfavorites' }">My Favorites</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'myfamily' }">My Family</router-link>
          </b-dropdown-item>
        </b-dropdown> &nbsp; &nbsp; &nbsp;

        Welcome back! {{ $root.store.username }} &nbsp; &nbsp; &nbsp;
        <b-button pill variant="warning" @click="Logout">Logout</b-button>
      </span>
    </div>
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
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: "Frank Ruhl Libre", Georgia, serif;
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
  font-weight: bold;

}



#nav a {

  font-size: larger;
  margin: 0px;
  color: black;
  font-family: "Frank Ruhl Libre", Georgia, sans-serif;
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