<template>
    <div class="container">
        <br />
        <h1 class="title text-center">My Family Recipes</h1>
      
        <div v-if="recipes.length > 0">
            <br />
            Number of results: {{ recipes.length }}

            <div class="results" v-for="r in recipes" :key="r.id">
                <b-card :title="r.title" :img-src="r.image" img-alt="Image" img-top tag="article" class="mb-2 card">
                    <b-list-group flush>
                        <b-list-group-item>Number of Likes: {{ r.popularity }}</b-list-group-item>
                        <b-list-group-item>Time To Make: {{ r.readyInMinutes }}</b-list-group-item>
                        <b-list-group-item v-if="r.vegan == 'true'">
                            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>for vegans
                        </b-list-group-item>
                        <b-list-group-item v-if="r.vegetarian == 'true'">
                            <b-icon icon="check-circle" scale="1" variant="success"></b-icon>for vegetarians
                        </b-list-group-item>
                    </b-list-group>
                    <b-button :to="{ name: 'myrecipe', params: { name: r } }" variant="primary">Go To Instructions</b-button>
                </b-card>
            </div>
        </div>

        <div v-else-if="searched">
            No recipes found.
        </div>
    </div>
</template>

<script>

import _ from 'lodash';

export default {
    name: "MyRecipes",
    components: {

    },
    data() {
        return {
            form: {
                title: '',
                image: '',
                time: null,
                servings: null,
                ingredients: '',
                instructions: '',
                vegetarian: false,
                vegan: false,
                glutenFree: false,
            },
            show: true,
            recipes: [],
            sortby: 'likes',
            searched: false,
        };
    },

    mounted() {
        this.updateRecipes();
    },

    methods: {
        async updateRecipes() {
            try {
                const response = await this.axios.get(
                    this.$root.store.server_domain + "/users/familyRecipes"
                    // "https://test-for-3-2.herokuapp.com/recipes/random"
                );

                const recipes = response.data;
                this.recipes = [];
                this.recipes.push(...recipes);
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
    width: 40%;
}
</style>
