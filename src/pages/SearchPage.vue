<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <div>
      <b-form-input v-model="text" placeholder="Search for recipe"></b-form-input>
      <br>
      <b-form-group label-cols-sm="3" label="cuisine:" label-for="cuisine">
        <b-form-select id="cuisine" :options="cuisine"></b-form-select>
        <b-form-invalid-feedback>
          Cuisine is required
        </b-form-invalid-feedback>
      </b-form-group>
      <br>
      <b-form-group label-cols-sm="3" label="diet:" label-for="diet">
        <b-form-select id="diet" :options="diet"></b-form-select>
        <b-form-invalid-feedback>
          diet is required
        </b-form-invalid-feedback>
      </b-form-group>
      <br>
      <b-form-group label-cols-sm="3" label="intolerance:" label-for="intolerance">
        <b-form-select id="intolerance" :options="intolerance"></b-form-select>
        <b-form-invalid-feedback>
          intolerance is required
        </b-form-invalid-feedback>
      </b-form-group>

    </div>
  </div>
</template>

<script>
import cuisine from "../assets/cuisine";
import intolerance from "../assets/intolerance";
import diet from "../assets/diet";

export default {
  data() {
    return {
      text: "",
      cuisine: [{ value: null, text: "", disabled: true }],
      diet: [{ value: null, text: "", disabled: true }],
      intolerance: [{ value: null, text: "", disabled: true }],
    };
  },

  mounted() {
    // console.log("mounted");
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolerance.push(...intolerance);
    // console.log($v);
  },
};
</script>
