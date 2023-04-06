<template>
    <div class="row">

        <div class="col-3 mb-2" v-for="imgurl in productDetails.images" >
            <img :src="imgurl" :style="{ width: '200px' }" />

        </div>
        <div class="text-center mb-2">
            <h1>Product Title : {{ productDetails.title }}</h1>
        </div>
        <div class="text-center mb-2">
            <h3>Product Prize : {{ productDetails.price }}</h3>
        </div>
        <div class="text-center mb-2">
            <h6>Product Category : {{ productDetails.category }}</h6>
        </div>
        
        <div class="text-center mb-2">
           <router-link :to="`/purchase/${productDetails.title}`" para class="btn btn-primary">
            Buy Now
        </router-link>
            
        </div>
      
    </div>
</template>
<script>
import { getMyPhone } from '../services/Phone'
export default {
    name: 'DetailsView',
    data() {
        return {
            productDetails: {}
        }
    },
    async mounted() {
        const productId = this.$route.params['id'];
        this.productDetails = await getMyPhone(productId)
        
    }
}
</script>