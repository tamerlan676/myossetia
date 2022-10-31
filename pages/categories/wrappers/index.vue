<template lang="pug">
.category
  h1.title Обложки на паспорт 
  .category-flex
    CaseCollections
    .products-wrapper
      .product(v-for="(item, key) in wrappers" :key="key")
        nuxt-link(:to="`/categories/wrappers/${item.id}`")
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
        await store.dispatch('getWrappers')
      },
      computed: {
        wrappers() {
          return this.$store.state.wrappers
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
    .products-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
    width: 100%
  }
  .product{
    border: 1px solid rgb(241, 241, 241);
    position: relative;
    transition: all .5s ease;
    &:hover{
      transform: translateY(-20px);
    }
    img{
      max-width: 100%;
    }
    .info{
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        @media(min-width: 768px){
          display: flex;
        }
        @media(min-width: 992px){
          padding: 16px;
        } 
        h3{
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: normal;
          @media(min-width: 768px){
            font-size: 16px;
          }
        }
        .desc{
          font-size: 12px;
          color: grey
        }
        .right{
          text-align: left;
          @media(min-width: 768px){
            text-align: right;
          }
          .old-price{
            font-size: 14px;
            text-decoration: line-through;
          }
          .price{
            font-weight: 500;
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
        color: #fff;
        opacity: 0.6;
      }
  }
}

  </style>