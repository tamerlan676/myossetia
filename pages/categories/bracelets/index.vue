<template lang="pug">
.category
  h1.title Браслеты 
  .category-flex
    ProductsWrapper(:products="wrappers")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      async fetch ({ store }) {
        await store.dispatch('getBracelets')
      },
      computed: {
        wrappers() {
          return this.$store.state.bracelets
        }
      },
      methods: {
        addToCart(e) {
          this.$store.commit('addToCart', e)
        },
      }
    }
  </script>
  
  <style lang="scss" scoped>
    .category{
      padding: 32px 16px;
      h1{
        font-size: 24px;
        margin-bottom: 24px;
        @media(min-width: 1200px){
          text-align: center;
        }
      }
      .category-flex{
        display: flex;
      }
    }

  </style>