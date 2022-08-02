<template>
  <div class="container">
    <br />
    <h1 class="title">Search Page</h1>
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
          <b-button class="btn btn-default" type="submit" variant="primary">Submit</b-button>
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
          <b-button :to="{ name: 'recipe', params: { recipeId: r.id } }" variant="primary">Go To Instructions</b-button>
        </b-card>
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

export default {
  name: "SearchPage",
  components: {
    //RecipePreview,
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
    };
  },

  mounted() {
    // console.log("mounted");
    this.cuisines.push(...cuisine);
    this.diets.push(...diet);
    this.intolerances.push(...intolerance);
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
        //console.log(response);
        const recipes = response.data.results;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
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
      //this.form.email = "";
      //this.form.name = "";
      //this.form.food = null;
      //this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
