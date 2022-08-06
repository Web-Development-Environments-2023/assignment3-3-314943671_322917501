<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
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
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        //console.log(this.$root.store.server_domain + "/recipes/random");
        const response = await this.axios.get(
          //this.$root.store.server_domain + "/recipes/random"
           "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        
        
        console.log("response", response);
        const recipes = response.data;
        console.log("recipes", recipes);
        console.log("recipes data", recipes.recipes);
        //this.recipes = [];
        this.recipes.push(...recipes.recipes);
         console.log("this.recipes", this.recipes);
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
