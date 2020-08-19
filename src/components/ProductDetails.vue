<template>
  <div>
    <section v-if="error">
      {{error.message}}
    </section>
    <section v-else>
      <div v-if="loading">
          <h2>Loading...</h2>
      </div>
      <div v-else>
        <h2>{{product.name}}</h2>
        <img :src="product.imageUrl ? product.imageUrl : 'https://placeimg.com/200/200/tech'" width="200" style="float:right" />
        <h3>{{product.description}}</h3>
        <p>Price: {{product.price}}</p>
        <p>Fixed price? {{product.fixedPrice}}</p>
        <p>Discontinued? {{product.discontinued}}</p>
        <p>Modified date: {{product.modifiedDate | formatDate('MM/DD/YYYY hh:mm') }}</p>              
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                error: null,
                loading: false
            }
        },
        computed: {
            ...mapState(['product']), // map `this.product` to `this.$store.state.product`
        },
        props: {
            id: {
                type:Number,
                required:true
            }
        },
        methods: {
            ...mapActions(['fetchProduct']) // map `this.fetchProduct(this.id)` to `this.$store.dispatch('fetchProduct', this.id)`
        },
        created() {
          this.fetchProduct(this.id);
        }
    }
</script>

<style lang="scss" scoped>

</style>