<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title My Ossetia x Дарья Орлова
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    ProductsWrapper(:products="collection" folder="collections" category="artlova")
    //-   template(v-slot:constructor)
    //-     .product(v-for="item in constructors")
    //-       nuxt-link(to="/constructors/alania-1")
    //-         img.img(:src="item.img" style="max-width: 100%")
    //-       .info 
    //-         .left
    //-           h3 {{ item.title }}
    //-         .right
    //-           .old-price {{ item.oldPrice}} ₽
    //-           .price {{ item.price }} ₽ 
    //-       //- .sale Конструктор
    //-       .sale-dt Конструктор

</template>
  
  <script>
import CaseCollections from '~/components/CaseCollections.vue';
    export default{
    name: "SlugCategory",
    components: { CaseCollections },
    data() {
      return {
        desc: 'Рады представить совместную коллекцию кейсов на ваши телефоны с талантливым художником из Санкт Петербурга Дарьей Орловой. Она работает над иллюстрациями для журналов и медиа- изданий, а также собственными проектами, один из которых воплотился в нашей новой коллекции. Вдохновившись эстетикой быта и традициями Осетии, она создала серию иллюстраций, посвящённую значимым явлениям нашей культуры.',
      }
    },
    async fetch({ store, params }) {
      const options = {
        collectionName: 'Artlova'
      }
        await store.dispatch("getCollection", options);
    },
    head(){
        return {
          title: 'Коллекция Artlova от My Ossetia',
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
        background-image: url('~/assets/images/artlova.jpg');
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