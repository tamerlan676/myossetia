<template lang="pug">
.main
  Slider
  Categories
  Hits(:hits="hits")
  Mission
  .blog 
    h2 #MYOSSETIACares
    .desc Давайте вместе изменим в к лучшему отношение к&#160;природе нашего региона.
    .blog-wrapper 
      .article
        nuxt-link(to="articles/beregi") 
          img(src="~/assets/images/beregi.webp")
        .title Береги Осетию
        .article-desc Давайте вместе сохраним природу Осетии в первозданном виде!	
      .article
        nuxt-link(to="#") 
          img(src="~/assets/images/horses.jpg")
        .title Помогаем диким животным
        .article-desc Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста.						
      .article
        nuxt-link(to="articles/sdai") 
          img(src="~/assets/images/musor.jpg")
        .title Сдай чехол и получи скидку
        .article-desc Сдай свой старый чехол и получи скидку 10% на всю нашу продукцию. Изменить мир – это реально. Стоит только начать с себя!						
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
  width: 100%;
  padding: 80px 16px;
  box-sizing: border-box;
  @media(min-width: 1200px){
    padding: 120px 0;
  }
  h2{
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
    @media(min-width: 1200px){
      margin-bottom: 16px;
    }
  }
  .desc{
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    @media(min-width: 1200px){
      font-size: 20px;
      width: 600px;
      margin: 0 auto 40px;
    }
  }
  .blog-wrapper{
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
    .desc{
    width: 100%;
    text-align: center;
    }
    .article{
      margin-bottom: 40px;
      text-align: center;
      @media(min-width: 768px){
        margin-bottom: 0;
      }
      &:last-child{
        margin-bottom: 0;
      }
      img{
        width: 100%;
        margin-bottom: 8px;
        height: 380px;
        object-fit: cover;
        @media(min-width: 1200px){
          height: 400px;
        }
      }
      .title{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .article-desc{
        color: #807E7E
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
