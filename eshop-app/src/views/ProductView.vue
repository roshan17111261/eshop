<template>
  <div>
    <div class="row">

      <div v-for="product in products" class="col-4 mb-3">
        <router-link :to="'detail/' + product.id">
          <img :src="product.images[0]" title="product.title" v-bind:style="{ width: '160px', height: '160px' ,cursor:'pointer',}" />
        </router-link>
          <h3>{{ product.title }}</h3>
       
      </div>
    </div>

  </div>
</template>
<script>
import { getPhones } from '../services/Phone'
export default {
  name: 'ProductView',
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    this.products = await getPhones();
  }
}
</script>
