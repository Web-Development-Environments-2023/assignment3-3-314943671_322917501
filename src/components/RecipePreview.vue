<template>
  <div class="results" style="display: table-caption;">

    <!-- <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
      </ul>
    </div> -->
    <b-card :title="recipe.title" :img-src="recipe.image" img-alt="Image" img-top tag="article" class="mb-2 card">
    <!-- <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" >
    <b-card-img :src="recipe.img"/> 
    </router-link> -->
    <div class="features">
      <b-list-group flush>
        <b-list-group-item>Likes: {{ recipe.aggregateLikes }} &nbsp; Time To Make: {{
            recipe.readyInMinutes
        }}
        </b-list-group-item>


        <b-list-group-item v-if="watched.includes(recipe.id.toString())">
          <b-icon icon="eye" scale="1"></b-icon>Watched before!
        </b-list-group-item>

        <b-list-group-item v-if="recipe.vegan">
          <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegans
        </b-list-group-item>
        <b-list-group-item v-if="recipe.vegetarian">
          <b-icon icon="check-circle" scale="1" variant="success"></b-icon>For Vegetarians
        </b-list-group-item>
        <b-list-group-item v-if="recipe.glutenFree">
          <b-icon icon="check-circle" scale="1" variant="success"></b-icon>Gluten Free
        </b-list-group-item>
      </b-list-group>
      </div>
      <b-button :to="{ name: 'recipe', params: { recipeId: recipe.id } }" variant="primary">Instructions
      </b-button>

      <b-button disabled variant="secondary" v-if="favorites.includes(recipe.id.toString())">Added!</b-button>
      <b-button variant="secondary" v-else v-on:click="addToFavorites(recipe.id)">Add to favorites</b-button>

    </b-card>

  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      // image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },

    favorites: {
      type: Array,
      required: true
    },

    watched: {
      type: Array,
      required: true
    }
  },
  methods: {
    async addToFavorites(id) {
      try {
        if (this.$root.store.username) {
          const response = await this.axios.post(this.$root.store.server_domain + `/users/favorites`,
            {
              recipeId: id,
            }
          );
          this.$root.toast("Add to favorites", "Recipe was added successfully", "success");
          this.getFavorites();
        }
        else {
          this.$root.toast("Add to favorites", "You need to login to add recipes to favorites", "info");
        }
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
        this.favorites.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>
.btn {
  margin: 2%;
}
/* .card {
  display: block;
  width: auto;
} */
.results {
  text-align: center;

  display: flex;
  align-items: center;
  /* padding-top: 10px; */
}

/* .card {
  width: 110%;
} */

/* 
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}

.recipe-preview>.recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
} */
</style>
