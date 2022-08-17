<template>
    <div class="container">
        <div v-if="recipe">
            <div class="recipe-header mt-3 mb-4">
                <h1>{{ recipe.title }}</h1>
                <img :src="recipe.image" class="center" />
            </div>
            <div class="recipe-body">
                <div class="wrapper">
                    <div class="wrapped">
                        <div class="mb-3">
                            <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
                            <div>Likes: {{ recipe.popularity }} likes</div>
                        </div>
                        Ingredients:
                        <ul>
                            {{ recipe.ingrediants }}
                            {{ recipe.Ingredients }}
                        </ul>
                    </div>

                    <div class="wrapped">
                        Instructions:
                        <ol>
                            {{ recipe.instractions }}
                            {{ recipe.instructions }}
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
            recipe: null,
        };
    },

    mounted() {
        this.recipe = this.$route.params.name
        console.log(this.recipe, "Myrecipe");
        console.log(this.recipe.vegan,"vegan");
        console.log(this.recipe.vegetarian,"vegetarian");
        console.log(this.recipe.glutenFree, "gluten free");
        console.log(this.recipe.instructions, "instructions");
        console.log(this.recipe._instructions, "_instructions");
        console.log(this.recipe.extendedIngredients, "extendedIngredients");
        console.log(this.recipe.analyzedInstructions, "analyzedInstructions");
        console.log(this.recipe.ingredients, "ingredients");
    },
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
