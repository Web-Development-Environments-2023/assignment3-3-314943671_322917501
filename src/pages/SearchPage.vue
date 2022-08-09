<template>
  <div class="container">
    <br />
    <h1 class="title text-center">Search Page</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-input v-model="form.query" placeholder="Search for recipe"></b-form-input>
        <br />
        <br />
        <b-form-group label-cols-sm="3" label="cuisine:" label-for="cuisine">
          <b-form-select id="cuisine" v-model="form.cuisine" :options="cuisines"></b-form-select>
        </b-form-group>
        <br />
        <b-form-group label-cols-sm="3" label="diet:" label-for="diet">
          <b-form-select id="diet" v-model="form.diet" :options="diets"></b-form-select>
        </b-form-group>
        <br />
        <b-form-group label-cols-sm="3" label="intolerance:" label-for="intolerance">
          <b-form-select id="intolerance" v-model="form.intolerance" :options="intolerances"></b-form-select>
        </b-form-group>
        <br />
        <b-form-group label-cols-sm="3" id="input-group-3" label="Number of Results:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.numResults" :options="foods"></b-form-select>
        </b-form-group>
        <div class="row justify-content-center">
          <b-button class="btn btn-default" type="submit" variant="primary">Search</b-button>
          <b-button class="btn btn-default" type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>

    <div v-if="recipes.length > 0">
      Order By:
      <select v-model="sortby">
        <option value="likes">Likes</option>
        <option value="timetomake">Time to make</option>
      </select>
      <br />
      Number of results: {{ recipes.length }}

      <div class="results" v-for="r in orderedRecipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :favorites="favorites" :watched="watched" />
        <!-- <b-card :title="r.title" :img-src="r.image" img-alt="Image" img-top tag="article" class="mb-2 card">
          <b-list-group flush>
            <b-list-group-item>Likes: {{ r.aggregateLikes }} &nbsp; &nbsp; Time To Make: {{ r.readyInMinutes
            }}
            </b-list-group-item>
            

            <b-list-group-item v-if="watched.includes(r.id.toString())">
              <b-icon icon="eye" scale="1"></b-icon>Watched before!
            </b-list-group-item>

            <b-list-group-item v-if="r.vegan">
              <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegans
            </b-list-group-item>
            <b-list-group-item v-if="r.vegetarian">
              <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegetarians
            </b-list-group-item>
            <b-list-group-item v-if="r.glutenFree">
              <b-icon icon="check-circle" scale="1" variant="success"></b-icon>Gluten Free
            </b-list-group-item>
          </b-list-group>
          <b-button :to="{ name: 'recipe', params: { recipeId: r.id } }" variant="primary">Go To Instructions</b-button>

          <b-button disabled variant="secondary" v-if="favorites.includes(r.id.toString())">Added to favorites!</b-button>
          <b-button variant="secondary" v-else v-on:click="addToFavorites(r.id)">Add to favorites</b-button>

        </b-card> -->
      </div>
    </div>

    <div v-else-if="searched">
      No recipes found.
    </div>

  </div>
</template>

<script>
import cuisine from "../assets/cuisine";
import intolerance from "../assets/intolerance";
import diet from "../assets/diet";
import _ from 'lodash';
import RecipePreview from "../components/RecipePreview.vue";

export default {
  name: "SearchPage",
  components: {
    RecipePreview,
  },
  data() {
    return {
      form: {
        query: "",
        cuisine: "",
        intolerance: "",
        diet: "",
        numResults: null,
      },

      text: "",
      cuisines: [{ value: null, text: "", disabled: true }],
      diets: [{ value: null, text: "", disabled: true }],
      intolerances: [{ value: null, text: "", disabled: true }],
      foods: [{ text: "", value: null }, "5", "10", "15"],

      recipes: [],
      sortby: 'likes',
      searched: false,
      favorites: [],
      watched: [],
    };
  },

  mounted() {
    this.cuisines.push(...cuisine);
    this.diets.push(...diet);
    this.intolerances.push(...intolerance);
    this.getFavorites();
    this.getWatched();
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
    onSubmit(event) {
      event.preventDefault();
       alert(JSON.stringify(this.form));
      this.sendRequst();
    },

    async sendRequst() {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain +
          `/recipes/search/query/${this.form.query}/amount/${this.form.numResults}`,
          {
            cuisine: this.form.cuisine,
            intolerance: this.form.intolerance,
            diet: this.form.diet,
          }
        );
        const recipes = response.data.results;
        this.recipes = [];
        this.recipes.push(...recipes);
        this.searched = true;
      } catch (error) {
        console.log(error);
      }
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.query = "";
      this.form.cuisine = "",
        this.form.intolerance = "",
        this.form.diet = "",
        this.form.numResults = null,
        this.searched = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    async getFavorites() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favoritesId"
        );

        const recipes = response.data;
        // var result = recipes.map(recipe => (recipe.id));
        this.favorites = [];
        this.favorites.push(...recipes);
        // console.log(this.favorites);
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
        // var result = recipes.map(recipe => (recipe.recipe_id));
        this.watched = [];
        this.watched.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async addToFavorites(id) {
      try {
        const response = await this.axios.post(this.$root.store.server_domain + `/users/favorites`,
          {
            recipeId: id,
          }
        );
        this.getFavorites();
      } catch (error) {
        console.log(error);
      }
    }
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
