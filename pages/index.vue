<template lang="pug">
.main
  Hero
  Categories
  Hits(:hits="hits")
  Reviews
  Mission
  Questions
  Articles(:articles="articles")

</template>

<script>  
import Categories from '~/components/Categories.vue'
import Mission from '~/components/Mission.vue'
  export default {
    name: 'MainPage',
    components: { Categories, Mission },
    layout: 'default',
    data () {
      return {
        query: '',
        suggestions: null
      }
    },
    async fetch ({ store }) {
        await store.dispatch('getHits')
        await store.dispatch('getArticles')
    },
    computed: {
      products() {
          return this.$store.state.products
      },
      cart() {
        return this.$store.state.cart
      },
      hits() {
        return this.$store.state.hits
      },
      articles() {
      return this.$store.state.articles
      },
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      addToCart(e) {
        this.$store.commit('addToCart', e)
      }
    }
  }
  </script>

<style lang="scss" scoped>
</style>
