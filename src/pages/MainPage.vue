<template>
  <div class="container">
    <br />
    <!--<h1 class="title text-center">Main Page</h1>-->
    <div class="recipes">
    <RecipePreviewList title="Explore these  recipes" random="true" class="RandomRecipes center" />
    <!--<router-link v-if="!$root.store.username" to="/login" tag="button" class="btn btn-primary">You need to Login to vue this</router-link>-->
    <div v-if="!$root.store.username">
    <LoginPage/></div>
    <div v-else>
    <RecipePreviewList title="Last Viewed Recipes" random="false" :class="{
      RandomRecipes: false,
      blur: !$root.store.username,
      center: true,
    }" style="display: grid;" disabled></RecipePreviewList>
    </div>
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "./LoginPage.vue";
export default {
  components: {
    RecipePreviewList,
    LoginPage
}};
</script>

<style lang="scss" scoped>

.container{
  margin-left: 0;
  max-width: -webkit-fill-available;
}
.RandomRecipes {
  margin: 10px 0 10px;
  width:100vmin
}
.recipes {
  min-height: 400px;
  display: flex;
  // justify-content: center;
   //width: max-content;
   //justify-content: space-between;
}

.blur {
  -webkit-filter: blur(5px);
  /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}


</style>
