<template lang="pug">
.category
  .category-wrapper
  .category-info
    h1.title Чехлы на Air Pods
    .category-desc {{ desc }}
  .category-flex
    ProductsWrapper(:products="airpodsCases" folder="categories" category="airpods")
</template>
  
  <script>
import CaseCollections from '~/components/CaseCollections.vue';
    export default{
    name: "SlugCategory",
    components: { CaseCollections },
    data() {
      return {
        desc: 'Силиконовые чехлы с эксклюзивными принтами от My Ossetia, изготовлены из противоударного  силикона премиум качества. Материал достаточно плотный и в тоже время не громоздкий, отлично сидит в руке.  Наши кейсы идеально подходят для подарка близкому человеку, а так же себе - любимому! \n С любовью, My Ossetia !'
      }
    },
    async fetch({ store }) {
        await store.dispatch("getAirPods");
    },
    head(){
        return {
          title: 'Чехлы на Air Pods - My Ossetia',
        }
    },
    computed: {
        airpodsCases() {
            return this.$store.state.airpods;
        }
    },
    methods: {
        addToCart(e) {
            this.$store.commit("addToCart", e);
        },
    }
}
  </script>
  
  <style lang="scss" scoped>
.category{
  h1{
    font-size: 24px;
    margin-bottom: 16px;
  }
  .category-flex{
    display: flex;
    padding: 16px;
    @media(min-width: 1200px){
      padding: 30px;
    }
  }
  .materials{
    width: fit-content;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-left: 16px;
    @media(min-width: 1200px){
      padding-left: 30px;
    }
    button{
      background: #e5e5e5;
      text-transform: uppercase;
      font-weight: 500;
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
      transition: all .5s ease;
      &.active{
        background: #000;
        color: #fff
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .category-wrapper{
    width: 100%;
    height: 380px;
    background-image: url('~/assets/images/airpods-mob.jpg');
    background-size: cover;
    background-position: center;
    @media(min-width: 1200px){
      background-image: url('~/assets/images/airpods-wr.jpg');
    }
  }
  .category-info{
    padding: 32px 16px;
    white-space: pre-line;
    line-height: 1.5;
    @media(min-width: 1200px){
      width: 900px;
      padding: 32px;
    }
  }
}
  </style>