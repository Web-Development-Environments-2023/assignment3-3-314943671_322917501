<template>
  <div class="container text-center">
    <br />
    <h1 class="title">About Us</h1>
    <div class="row">
      <div class="col">
        <b-img :src="require('../assets/lidor.jpg')" v-bind="mainProps" rounded="circle" alt="Circle image">
        </b-img>
        <br />
        <br />
        <h5>Lidor Ashtamker</h5>
        <p></p>
      </div>
      <div class="col">
        <b-img :src="require('../assets/chen.jpg')" v-bind="mainProps" rounded="circle" alt="Circle image">
        </b-img>
        <br />
        <br />
        <h5>Chen "Guess Who?" Kolely</h5>
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <br />
        <br />
        <h4>Our previous works</h4>
        <br />
        <b-link target="_blank" rel="noopener noreferrer"
          href="https://web-development-environments-2022.github.io/322917501/">Lidor's website</b-link>
        <br />
        <br />
        <b-link target="_blank" rel="noopener noreferrer"
          href="https://web-development-environments-2022.github.io/314943671/">Chen's website</b-link>
        <br />
        <br />
        <b-link target="_blank" rel="noopener noreferrer"
          href="https://web-development-environments-2022.github.io/assignment2-314943671_322917501/">Pacman game
        </b-link>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      mainProps: { blank: false, blankColor: '#777', width: 200, height: 200, class: 'm1' }
    }
  }
}
</script>

<style>
</style>