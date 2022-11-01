<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title My Ossetia x Tembolat
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    ProductsWrapper(:products="collection" folder="collections" category="tembolat")
    </template>
      
      <script>
    import CaseCollections from '~/components/CaseCollections.vue';
        export default{
        name: "SlugCategory",
        components: { CaseCollections },
        data() {
          return {
            desc: 'Мы бережно обращаемся  с национальным наследием, по-своему интерпретируем культурный код Осетии, и без лишней скромности заявляем, что хотим покорить мир. И знаете почему? \n\n Потому что мы запускаем беспрецедентную коллаборацию с художником и дизайнером Темболатом Гугкаевым @tembolagugkaev Которого многие на родине знают как одного из основателей национального арт-пространства @portalvl \n\n Но довольно слов. Наслаждайтесь  же нашей коллаборацией! И жадно впитывайте каждый принт, каждый арт, которыми мы уже гордимся.'
          }
        },
        async fetch({ store, params }) {
          const options = {
            collectionName: 'Tembolat'
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
            background-image: url('~/assets/images/temb-wr.webp');
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