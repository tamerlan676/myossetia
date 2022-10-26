<template lang="pug">
.category
  MobileCaseCollections
  h1.title Чехлы 
  .category-flex
    CaseCollections
    ProductsWrapper(:products="mobileCases")
</template>
  
  <script>
import CaseCollections from '~/components/CaseCollections.vue';
    export default{
    name: "SlugCategory",
    async fetch({ store }) {
        await store.dispatch("getMobileCases");
    },
    computed: {
        mobileCases() {
            return this.$store.state.mobileCases;
        }
    },
    methods: {
        addToCart(e) {
            this.$store.commit("addToCart", e);
        },
    },
    components: { CaseCollections }
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
        .categories{
          display: none;
          position: sticky;
          top: 20px;
          @media(min-width: 1200px){
            display: block;
            width: 300px;
            margin-right: 24px;
          }
          h3{
            margin-bottom: 32px;
            font-size: 24px;  
          }
          ul{
            list-style: none;
          }
          li{
            margin-bottom: 24px;
          }
          a{
            color: #000;
            font-weight: 600;
            transition: all .5s ease;
            &:hover{
              color: brown;
            }
          }
        }
      }
      // .hit{
      //   position: absolute;
      //   background: #67AAF9;
      //   padding: 5px 10px;
      //   font-size: 14px;
      //   left: 0;
      //   bottom:29%;
      //   color: #fff
      // }
    }

  </style>