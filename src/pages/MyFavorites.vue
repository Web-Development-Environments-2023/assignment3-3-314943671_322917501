<template>
    <div class="container">
        <br />
        <h1 class="title text-center">My Favorites</h1>

        <div v-if="recipes.length > 0">
            <br />
            <h4> Number of results: {{ recipes.length }}</h4>

            <b-row>
            <b-col v-for="r in orderedRecipes" :key="r.id">
                <b-card :title="r.title" :img-src="r.image" img-alt="Image" img-top tag="article" class="mb-2 card">
                    <b-list-group flush>
                        <b-list-group-item>Number of Likes: {{ r.aggregateLikes }}</b-list-group-item>
                        <b-list-group-item>Time To Make: {{ r.readyInMinutes }}</b-list-group-item>
                        <b-list-group-item v-if="r.vegan">
                            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>for vegans
                        </b-list-group-item>
                        <b-list-group-item v-if="r.vegetarian">
                            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>for vegetarians
                        </b-list-group-item>
                    </b-list-group>
                    <b-button :to="{ name: 'recipe', params: { recipeId: r.id } }" variant="primary">Go To Instructions
                    </b-button>
                    <!--<b-button variant="secondary" v-on:click="addToFavorites(recipe.id)">Remove from favorites</b-button>-->
                </b-card>
            </b-col>
            </b-row>
        </div>

        <div v-else-if="searched">
            No recipes found.
        </div>

    </div>
</template>

<script>

import _ from 'lodash';

export default {
    name: "MyFavorites",
    components: {
        //RecipePreview,
    },
    data() {
        return {

            recipes: [],
            sortby: 'likes',
            searched: false,
        };
    },

    mounted() {
        this.updateRecipes();
    },

    computed: {
        orderedRecipes: function () {
            if (this.sortby == 'timetomake')
                return _.orderBy(this.recipes, 'readyInMinutes');
            else
                return _.orderBy(this.recipes, 'aggregateLikes', 'desc');
        }
    },

    methods: {
        async updateRecipes() {
            try {
                const response = await this.axios.get(
                    this.$root.store.server_domain + "/users/favorites"
                    // "https://test-for-3-2.herokuapp.com/recipes/random"
                );
                const recipes = response.data;
                this.recipes = [];
                this.recipes.push(...recipes);
            } catch (error) {
                console.log(error);
            }
        },
        async removeFromFavorites(id) {
      try {
        if (this.$root.store.username) {
          const response = await this.axios.delete(this.$root.store.server_domain + `/users/favorites`,
            {
              recipeId: id,
            }
          );
          this.$root.toast("Removed from favorites", "Recipe was added successfully", "success");
          this.getFavorites();
        }/*
        else {
          this.$root.toast("Add to favorites", "You need to login to add recipes to favorites", "info");
        }*/
      } catch (error) {
        console.log(error);
      }
    },
    },
};
</script>

<style scoped>
.btn {
    margin: 0 10px;
}

.results {
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top: 10px;
}

.card {
    width: 15vmax;
}
</style>
