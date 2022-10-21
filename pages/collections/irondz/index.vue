<template lang="pug">
.category
  h1.title My Ossetia x Irondzinad
  .collection-wrapper
  .category-flex
    CaseCollections
    .products-wrapper
      .product(v-for="(item, key) in collection" :key="key")
        nuxt-link(:to="`/collections/irondz/${item.id}`")
          img.img(:src="item.acf.product_images_1")
        .info 
          .left
            h3 {{ item.title.rendered }}
            .desc Под любую модель телефона
          .right
            .old-price {{ item.acf.price * 1.5 }} ₽
            .price {{ item.acf.price_count }} ₽ 
        .sale Акция
</template>
  
  <script>
import CaseCollections from '~/components/CaseCollections.vue';
    export default{
    name: "SlugCategory",
    components: { CaseCollections },
    async fetch({ store, params }) {
      const options = {
        collectionName: 'Irondzinad'
      }
        await store.dispatch("getCollection", options);
    },
    computed: {
        collection() {
            return this.$store.state.collection;
        }
    },
    methods: {
        addToCart(e) {
            this.$store.commit("addToCart", e);
        },
    },
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
      .collection-wrapper{
        width: 100%;
        height: 380px;
        background-image: url('~/assets/images/collection.jpg');
        background-size: cover;
        background-position: center;
        margin-bottom: 40px;
      }
      .category-flex{
        display: flex;
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
    }

  </style>