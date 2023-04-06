<template>
  <div class="container-fluid">
  <div class="row">
    <header-component></header-component>
  </div>
  <div class="row">
    <router-view></router-view>
  </div>
  <div class="row">
    <footer-component></footer-component>
  </div>
</div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {

  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style></style>
