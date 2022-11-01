<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title My Ossetia x Hohag
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    ProductsWrapper(:products="collection" folder="collections" category="dzigoi")
  </template>
    
    <script>
  import CaseCollections from '~/components/CaseCollections.vue';
      export default{
      name: "SlugCategory",
      components: { CaseCollections },
      data() {
        return {
          desc: '#Ирондзинад — это особая философия жизни, которая отвечала и отвечает по сей день на все вопросы бытия человека в мире, дает ориентиры в любой жизненной ситуации, отвечает на самые жгучие вопросы о смысле или бессмысленности всего человеческого существования. \n\n ИРОНДЗИНАД оказывает мощное влияние на всю жизнь осетин, их духовность и национальный склад мышления, национальный тип характера, особый формат культурного развития.\n 📱Ну а мы в свою очередь не можем пропустить этот фундаментальный пласт и не порадовать вас новыми тематическими кейсами❗️'
        }
      },
      async fetch({ store, params }) {
        const options = {
          collectionName: 'Dzigojty_ka'
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
        h1{
          font-size: 24px;
          margin-bottom: 24px;
        }
        .collection-wrapper{
          width: 100%;
          height: 380px;
          background-image: url('~/assets/images/collection.jpg');
          background-size: cover;
          background-position: center;
        }
        .collection-info{
          padding: 32px 16px;
          white-space: pre-line;
          line-height: 1.5;
          @media(min-width: 1200px){
            width: 900px;
            padding: 32px;
          }
        }
        .category-flex{
          display: flex;
          padding: 16px;
          @media(min-width: 1200px){
            padding: 32px;
          }
        }
      }
  
    </style>