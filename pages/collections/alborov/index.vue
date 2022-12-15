<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title Atsamaz Alborov
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    ProductsWrapper(:products="collection" folder="collections" category="alborov")
    </template>
      
      <script>
    import CaseCollections from '~/components/CaseCollections.vue';
        export default{
        name: "SlugCategory",
        components: { CaseCollections },
        data() {
          return {
            desc: 'Молодой, но стремительно набирающий популярность, художник из Осетии - Ацамаз Алборов в своем стиле рисует знаменитых по всему миру персонажей кино, мультфильмов и комиксов. \n Но помимо Ведьмака и Джокера вы можете найти рисунки и осетинских героев'
          }
        },
        async fetch({ store, params }) {
          const options = {
            collectionName: 'Atsa Alborov'
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
            background-image: url('~/assets/images/alb-wr.jpg');
            background-size: cover;
            background-position: center;
          }
          .collection-desc{
            white-space: pre-line;
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