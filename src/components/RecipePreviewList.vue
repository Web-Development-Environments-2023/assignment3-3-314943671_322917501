<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :favorites="favoritesRecipes" :watched="watchedRecipes" />
      </b-col>
    </b-row>
    <div class="row">
      <div class="col">
        <b-button pill variant="primary" @click="updateRecipes()" class="center">More Recipes</b-button>
      </div>
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    random: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
      favoritesRecipes: [],
      watchedRecipes: [],

    };
  },
  mounted() {

    this.getFavorites();
    this.getWatched();
    if (this.random == "true")
      this.updateRecipes();
    else
      this.getLastViewed();

  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          //this.$root.store.server_domain + "/recipes/random"
           "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes.recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async getLastViewed() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/lastViewedRecipes"
          //  "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        const recipes = response.data;
        this.recipes = [];
        console.log(this.recipes);
        console.log(recipes);
        console.log(recipes.recipes);
        this.recipes.push(...recipes.recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async getFavorites() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favoritesId"
        );
        const recipes = response.data;
        this.favoritesRecipes.push(...recipes.recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async getWatched() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/watched"
        );
        const recipes = response.data;
        this.watchedRecipes.push(...recipes.recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
