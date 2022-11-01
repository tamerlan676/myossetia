<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title My Ossetia x FC Alania
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    ProductsWrapper(:products="collection" folder="collections" category="alania")
</template>
  
  <script>
import CaseCollections from '~/components/CaseCollections.vue';
    export default{
    name: "SlugCategory",
    components: { CaseCollections },
    data() {
      return {
        desc: 'Наша любимая команда имеет замечательную историю, которая включается в себя яркие футбольные моменты. Когда-то мы были чемпионами и верим, что это произойдет вновь. \n\n Если вы ярый фанат барсов, то эта коллекция именно для вас.'
      }
    },
    async fetch({ store, params }) {
      const options = {
        collectionName: 'Alania'
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
        background-image: url('~/assets/images/alania-wr.webp');
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