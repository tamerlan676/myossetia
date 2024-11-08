<template lang="pug">
.category
  .category-wrapper
  .category-info
    h1.title Термосы
    .category-desc {{ desc }}
  .category-flex
    ProductsWrapper(:products="termosi" folder="categories" category="termosi")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          desc: 'Коллекция термосов и термокружек с нашими дизайнерскими принтами ни кого не оставят равнодушными'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getTermoses')
      },
      head(){
        return {
          title: 'Термосы - My Ossetia',
        }
      },
      computed: {
        termosi() {
          return this.$store.state.termosi
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
  h1{
    font-size: 24px;
    margin-bottom: 16px;
  }
  .category-flex{
    display: flex;
    padding: 16px;
    @media(min-width: 1200px){
      padding: 30px;
    }
  }
  .materials{
    width: fit-content;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-left: 16px;
    @media(min-width: 1200px){
      padding-left: 30px;
    }
    button{
      background: #e5e5e5;
      text-transform: uppercase;
      font-weight: 500;
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
      transition: all .5s ease;
      &.active{
        background: #000;
        color: #fff
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .category-wrapper{
    width: 100%;
    height: 380px;
    background-image: url('~/assets/images/termos-mob.jpg');
    background-size: cover;
    background-position: center;
    @media(min-width: 768px){
      background-image: url('~/assets/images/termos.jpg');
    }
  }
  .category-info{
    padding: 32px 16px;
    white-space: pre-line;
    line-height: 1.5;
    @media(min-width: 1200px){
      width: 900px;
      padding: 32px;
    }
  }
}

  </style>