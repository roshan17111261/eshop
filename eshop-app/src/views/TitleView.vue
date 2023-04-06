<template>
    <div>
        <div id="1" v-if="!show">
            <div class="row">
                <h1> You're about to purchase : {{ $route.params.title }} </h1>
            </div>
            <div class="row">
                <form>
                    <div class="form-group col-4 mb-2">
                        <label for="inputid">Customer Name</label>
                        <input type="text" class="form-control" placeholder="Enter your name" name="inputid">
                    </div>
                    <div class="form-group col-4 mb-2">
                        <label for="email">Enter your email-id</label>
                        <input type="email" class="form-control" placeholder="example@email.com" name="email">
                    </div>
                    <div class="form-group col-4 mb-2">
                        <label for="number">Phone number</label>
                        <input type="number" inputmode="numeric" min="0" class="form-control" name="number">
                    </div>
                    <div class="form-group col-4 mb-2">
                        <button @click="submit" type="button" class="btn btn-secondary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div id="2">
            <h1 v-if="show">Thank you for Purchasing order</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TitleView',
    data() {
        return {
            producDetail: {},
            show: ""

        }
    },
    methods: {
        submit() {
            this.show = true
        }
    }
} 
</script>