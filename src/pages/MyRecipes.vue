<template>
    <div class="container">
        <br />
        <h1 class="title">My Recipes</h1>

        <div>
            <b-button v-b-modal.modal-1>Add Recipe</b-button>


            <b-modal id="modal-1" centered title="Add New Recipe">
                <p class="my-4">Please enter in english and follow instructions</p>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.email" placeholder="Enter title" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Picture:" label-for="input-2" description="Make sure it's valid HTTP path.">
                        <b-form-input id="input-2" v-model="form.name" placeholder="Enter path" required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label="Preparation Time:" label-for="input-5" description="How much it takes to make the recipe.">
                        <b-form-input id="input-5" v-model="form.time" type="number" placeholder="Enter preparation time" required></b-form-input>
                    </b-form-group>


                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                        <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                            :aria-describedby="ariaDescribedby">
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-modal>
        </div>

        <div v-if="recipes.length > 0">
            <br />
            Number of results: {{ recipes.length }}

            <div class="results" v-for="r in orderedRecipes" :key="r.id">
                <b-card :title="r.title" :img-src="r.image" img-alt="Image" img-top tag="article" class="mb-2 card">
                    <b-list-group flush>
                        <b-list-group-item>Number of Likes: {{ r.popularity }}</b-list-group-item>
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
        //RecipePreview,
    },
    data() {
        return {
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true,


            recipes: [],
            sortby: 'likes',
            searched: false,
        };
    },

    mounted() {
        // console.log("mounted");
        this.updateRecipes();
        // console.log($v);
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
                //console.log(this.$root.store.server_domain + "/recipes/random");
                const response = await this.axios.get(
                    this.$root.store.server_domain + "/users/myRecipes"
                    // "https://test-for-3-2.herokuapp.com/recipes/random"
                );


                // console.log(response);
                const recipes = response.data;
                this.recipes = [];
                this.recipes.push(...recipes);
                // console.log(this.recipes);
            } catch (error) {
                console.log(error);
            }
        },

        onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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
