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
        <router-link :to="{ name: 'myrecipes' }">My Recipes</router-link> |
        <router-link :to="{ name: 'myfavorites' }">My Favorites</router-link> |
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
    }}
    };
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
html{
  height: 100%;
}

body{
  margin: 0;
  padding: 0;
  height: 100%;
}
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
