<template lang="pug">
.category
  //- .category-wrapper
  .category-info
    h1.title Постеры
    .category-desc {{ desc }}
  .category-flex
    ProductsWrapper(:products="posters" folder="categories" category="posters")
</template>
  
  <script>
    export default{
    name: "SlugCategory",
    data() {
      return {
        desc: 'Украсьте свой интерьер яркими и запоминающимися изображениями знаковых мест — от исторических памятников до захватывающих видов нашего прекрасного края. \n Наши постеры — это не только красивые картины, но и отличный способ сохранить воспоминания о любимых уголках Осетии. \n Погрузитесь в атмосферу нашей Родины и создайте уникальный интерьер с помощью наших ярких и качественных постеров.'
      }
    },
    async fetch({ store }) {
        await store.dispatch("getPosters");
    },
    head(){
        return {
          title: 'Постеры - My Ossetia',
        }
    },
    computed: {
        posters() {
            return this.$store.state.posters;
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
    background-image: url('~/assets/images/mob-xs.jpg');
    background-size: cover;
    background-position: center;
    @media(min-width: 1200px){
      background-image: url('~/assets/images/wr-mob.jpg');
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