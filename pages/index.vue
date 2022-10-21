<template lang="pug">
.main
  Slider
  Categories
  Hits
  .blog 
    h2 Блог
    .blog-wrapper 
      .article(v-for="i in 3")
        nuxt-link(to="#") 
          img(src="~/assets/images/horses.jpg")
        .title Помогаем диким животным
        .date 23.12.2022
    nuxt-link.all-articles(to="/articles") Все статьи

</template>

<script>  
import Categories from '~/components/Categories.vue'
  export default {
    name: 'MainPage',
    components: { Categories },
    layout: 'default',
    data () {
      return {
        query: '',
        suggestions: null
      }
    },
    computed: {
      products() {
          return this.$store.state.products
      },
      cart() {
        return this.$store.state.cart
      }
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
.blog{
  background: rgb(219, 219, 219);
  width: 100%;
  padding: 80px 16px;
  box-sizing: border-box;
  h2{
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
    @media(min-width: 1200px){
      margin-bottom: 48px;
    }
  }
  .blog-wrapper{
      margin-bottom: 32px;
    @media(min-width: 768px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    @media(min-width: 992px){
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media(min-width: 1200px){
      width: 1120px;
      margin: 0 auto 32px;
    }
    .article{
      margin-bottom: 32px;
      @media(min-width: 768px){
        margin-bottom: 0;
      }
      &:last-child{
        margin-bottom: 0;
      }
      img{
        max-width: 100%;
        margin-bottom: 8px;
      }
      .title{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .date{
        font-size: 14px;
        color: #807E7E;
      }
    }
  }
  .all-articles{
    background: #000;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    display: block;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    @media(min-width: 768px){
      width: fit-content;
    }
}
}
</style>
