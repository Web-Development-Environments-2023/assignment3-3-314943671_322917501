<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">
      <img src="./assets/homepage_icon+logo.png" width="150" height="100" alt="logo" style="width: 130px;height: 50px;object-fit: cover;left: 1%;">
      </router-link>
      
      <router-link :to="{ name: 'main' }">Home</router-link> &nbsp; &nbsp; &nbsp;
      <router-link :to="{ name: 'search' }">Search</router-link> &nbsp; &nbsp; &nbsp;
      <router-link :to="{ name: 'about' }">About Us</router-link> &nbsp; &nbsp; &nbsp;

      <span v-if="!$root.store.username">
        Hello Guest! &nbsp; &nbsp;
        <router-link :to="{ name: 'register' }">Register</router-link> &nbsp; &nbsp; &nbsp;
        <router-link :to="{ name: 'login' }">Login</router-link> &nbsp; &nbsp; &nbsp;
      </span>
      <span v-else>
        <b-dropdown id="dropdown-1" text="Personal" class="m-md-2" size="lg" style="font-size: x-large;" variant="outline">
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
        <b-button pill variant="warning" @click="Logout" style="font-size: x-large;">Logout</b-button>
      </span>
      <label class="toggle" style="font-family:'Frank Ruhl Libre', Georgia, serif; font-size : medium">
        <input type="checkbox" @click="toggleDarkLight()" style="display: left;">        
        <span class="slider round"></span>
      </label>
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
    }, toggleDarkLight(){
      var element = document.body;
      element.classList.toggle("dark-mode");
    }}
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
  font-family: 'IBM Plex Mono';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: #2c3e50;
  min-height: 100vh;
  //background: #ebebeb;
}

#nav {
  padding: 30px;
  text-align: center; 
  box-shadow: 0 0 10px 1px #85D2D6;
  display:-webkit-inline-box;
  z-index: 999;
  width: -webkit-fill-available;
  font-family: 'Hi Melody';
  font-size: xx-large;
}

a {
    color: black; 
    text-decoration: none;
    background-color: transparent;
}

#nav li a{
  margin: 0;
}

#nav a {

  font-size: xx-large;
  margin: 15px;
  font-family: 'Hi Melody';
}
#nav span{
  right: 5%;
  position: absolute;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.slider::before{
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left:4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  font-size:medium;
  content: '🌙';
}
input:checked + .slider{
  background-color: white;
}
input:checked + .slider::before{
  background-color: #170D2B;
  padding:2%;
  font-size:medium;
  content: '☀️';
}
input:focus + .slider{
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider::before{
  transform: translateX(26px);
}
.slider.round{
  border-radius: 34px;
}
.slider.round::before{
  border-radius: 50%;
}
.toggle{
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  position: absolute;
  right: 0;
}
.dark-mode{
  background: #170D2B;
  color: rgba(255, 255, 255, 0.801);
}
.toggle input{
  opacity: 1;
  width: 0;
  height: 0;
}
.slider{
  position: absolute;
  cursor:pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #170D2B;
  -webkit-transition: .4s;
  transition: .4s;
}
.title{
  color:inherit;
}
.dark-mode a{
  color:#88C0D0
}

.dark-mode .form-control{
  background-color: #434C5E;
  color:white;
}

.dark-mode .form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

.dark-mode .custom-select {
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    vertical-align: middle;
    background:#434C5E url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23fff%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat;
    border: 1px solid #ced4da;
}
.dark-mode .dropdown-menu {
    background-color: #313842;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
}
.dark-mode .btn-primary{
  color: inherit;
}
.dark-mode .dropdown-toggle{
  color:inherit;
}
.dark-mode .card-body{
  background-color: #207C80;
}
.dark-mode .list-group-item{
  background-color: inherit;
}
.list-group-item{
  background-color: inherit;
  padding: 15px;
  border: none;
}
.card{
  display: -webkit-box;
  background-color: inherit;
  border: none;
  //width: 40%;
  //border-radius: 20%;
}
.card-body{
  width: 35vmin;
  background-color: #85D2D6;
  border-top-right-radius: 20%;
  border-bottom-right-radius: 20%;
  // border: solid;
  // border-left-style: none;
  // border-color: #207C80;
  // border-width: thick;
}
.dark-mode .card-img-top{
  border-color: #207C80;
}
.card-img-top{
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  border: solid;
  border-color: #85D2D6;
  border-right-style: none;
  border-width: thick;
  height: -webkit-fill-available;
}
.dark-mode .card{
  background-color: inherit;
  border: none;
}
.row{
  display: grid;
}
// .dark-mode .b-toast-success .toast .toast-header{
//   background-color: #313842;
//   border-bottom-color: #170D2B;
// }
// img {
//     width: 150px;
//     height: 50px;
//     object-fit: cover;
// }
</style>