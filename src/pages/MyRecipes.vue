<template>
    <div class="container">
        <br />
        <h1 class="title">My Recipes</h1>
        <div>
            <b-button v-b-modal.modal-1>Add Recipe</b-button>

            <b-modal id="modal-1" centered title="Add New Recipe" hide-footer>
                <p class="my-4">Please enter in english and follow instructions</p>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.title" placeholder="Enter title" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Picture:" label-for="input-2"
                        description="Make sure it's valid HTTP path.">
                        <b-form-input id="input-2" v-model="form.image" placeholder="Enter path" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label="Preparation Time (Minutes):" label-for="input-5">
                        <b-form-input id="input-5" v-model="form.time" type="number"
                            placeholder="Enter preparation time" required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="Number of Servings:" label-for="input-6">
                        <b-form-input id="input-6" v-model="form.servings" type="number" placeholder="Enter servings"
                            required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-7" label="Ingredients:" label-for="input-7">
                        <b-form-input id="input-7" v-model="form.ingredients" placeholder="Enter Ingredients" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-8" label="Instructions:" label-for="input-8">
                        <b-form-input id="input-8" v-model="form.instructions" placeholder="Enter Instructions"
                            required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" class="justify-content-center">
                        <b-form-checkbox v-model="form.vegetarian" value="true">vegetarian</b-form-checkbox>
                        <b-form-checkbox v-model="form.vegan" value="true">vegan</b-form-checkbox>
                        <b-form-checkbox v-model="form.glutenFree" value="true">gluten free</b-form-checkbox>
                    </b-form-group>

                    <div class="row justify-content-center">
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
            </b-modal>
        </div>

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
                //console.log(this.$root.store.server_domain + "/recipes/random");
                const response = await this.axios.get(
                    this.$root.store.server_domain + "/users/myRecipes"
                    // "https://test-for-3-2.herokuapp.com/recipes/random"
                );

                const recipes = response.data;
                this.recipes = [];
                this.recipes.push(...recipes);

                // console.log(this.recipes); //////////
            } catch (error) {
                console.log(error);
            }
        },

        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
            console.log(this.form)
            //need to check validation
            this.sendRequst();
        },


        async sendRequst() {
            try {
                const response = await this.axios.post(
                    this.$root.store.server_domain +
                    `/users/myRecipes`,
                    {
                        title: this.form.title,
                        readyInMinutes: this.form.time,
                        image: this.form.image,
                        vegan: this.form.vegan,
                        vegetarian: this.form.vegetarian,
                        glutenFree: this.form.glutenFree,
                        ingredients: this.form.ingredients,
                        instructions: this.form.instructions,
                        servings: this.form.servings
                    }
                );
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        },

        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.title = '',
                this.form.image = '',
                this.form.time = null,
                this.form.servings = null,
                this.form.ingredients = '',
                this.form.instructions = '',
                this.form.vegetarian = false,
                this.form.vegan = false,
                this.form.glutenFree = false,
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
