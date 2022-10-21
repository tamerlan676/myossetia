<template lang="pug">
.category
  h1.title Браслеты 
  .category-flex
    .categories
      h3 Коллекции
      ul
        li
          nuxt-link(to="#") ФК Алания
        li
          nuxt-link(to="#") Коста Хетагуров
    .products-wrapper
      .product(v-for="(item, key) in wrappers" :key="key")
        nuxt-link(:to="`/categories/bracelets/${item.id}`")
          img.img(:src="item.acf.product_images_1")
        .info 
          .left
            h3 {{ item.title.rendered }}
          .right
            .old-price {{ item.acf.price * 1.5 }} ₽
            .price {{ item.acf.price_count }} ₽ 
        .sale Акция
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
      .products-wrapper{
        @media(min-width: 768px){
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
        }
        @media(min-width: 1200px){
          grid-template-columns: repeat(4, 1fr);
          width: 100%
        }
        .product{
          border: 1px solid rgb(241, 241, 241);
          margin-bottom: 20px;
          position: relative;
          @media(min-width: 768px){
            margin-bottom: 0;
          }
          img{
            max-width: 100%;
          }
        }
      }
      .info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        @media(min-width: 992px){
          padding: 16px;
        } 
        h3{
          margin-bottom: 5px;
        }
        .desc{
          font-size: 12px;
          color: grey
        }
        .right{
          width: 120px;
          text-align: right;
          .old-price{
            font-size: 14px;
            text-decoration: line-through;
          }
          .price{
            font-weight: 800;
            font-size: 18px;
            color: #499167;
          }
        }
      }
      .sale{
        position: absolute;
        background: #FC9E4F;
        padding: 5px 10px;
        font-size: 14px;
        left: 0;
        top:30px;
        color: #fff
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