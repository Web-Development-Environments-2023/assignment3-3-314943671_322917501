<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <div class="fetures">
          <b-list-group-item v-if="recipe.vegan">
            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegans
          </b-list-group-item>
          <div v-if="recipe.vegetarian">
            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegetarians
          </div>
          <b-list-group-item v-if="recipe.glutenFree">
            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>Gluten Free
          </b-list-group-item>
        </div>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            </div>
            Ingredients:
            <ul>
              <li v-for="(r, index) in recipe.ingrediants" :key="index + '_' + r.id">
                {{ r.original }}
              </li>
            </ul>
            <ul>
                {{ recipe.ingrediants }}
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe.instractions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
            <ol>
                {{ recipe.instractions }}
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      try {
        response = await this.axios.get(
          "https://test-for-3-2.herokuapp.com/recipes/info",
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree
      };

      this.recipe = _recipe;
        console.log(this.recipe, "recipePage");
        console.log(this.recipe.vegan,"vegan");
        console.log(this.recipe.vegetarian,"vegetarian");
        console.log(this.recipe.glutenFree, "gluten free");
        console.log(this.recipe.instructions, "instructions");
        console.log(this.recipe._instructions, "_instructions");
        console.log(this.recipe.extendedIngredients, "extendedIngredients");
        console.log(this.recipe.analyzedInstructions, "analyzedInstructions");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.wrapped {
  width: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* .recipe-header{

} */
</style>