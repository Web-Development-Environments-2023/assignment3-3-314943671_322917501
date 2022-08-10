<template>
  <div class="container">
    <br />
    <h1 class="title text-center">Main Page</h1>
    <RecipePreviewList title="Random Recipes" random="true" class="RandomRecipes center" />
    <router-link v-if="!$root.store.username" to="/login" tag="button" class="btn btn-primary">You need to Login to vue this</router-link>
    
    <RecipePreviewList title="Last Viewed Recipes" random="false" :class="{
      RandomRecipes: false,
      blur: !$root.store.username,
      center: true
    }" disabled></RecipePreviewList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
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
