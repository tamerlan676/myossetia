<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title Dzigojty_ka
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
          desc: '#Dzigojty_ka — '
        }
      },
      async fetch({ store, params }) {
        const options = {
          collectionName: 'Dzigojty_ka'
        }
          await store.dispatch("getCollection", options);
      },
      head(){
        return {
          title: 'Коллекция Dzigojty_ka от My Ossetia',
        }
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
          background-image: url('~/assets/images/dz-wrap.jpg');
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