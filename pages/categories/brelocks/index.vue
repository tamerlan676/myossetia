<template lang="pug">
.category
  .category-wrapper
  .category-info
    h1.title Брелоки
    .category-desc {{ desc }}
  //- .materials
  //-   button(:class="{active: material === 'Кожа'}" @click="changeMaterial('Кожа')" ) из кожи
  //-   button(:class="{active: material === 'ПВХ'}" @click="changeMaterial('ПВХ')") из ПВХ
  .category-flex
    ProductsWrapper(:products="brelocks" folder="categories" category="brelocks")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          // material: 'Кожа',
          desc: 'Брелоки от My Ossetia  из дерева - это отличный сувенир и прекрасный подарок для детей и взрослых. Оригинальный дизайн и красочность оформления придутся по вкусу ценителям оригинальных вещей. Изготовлен из экологически чистого материала - березовой фанеры. Окрашен безопасными красками на водной основе.'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getBrelocks')
      },
      head(){
        return {
          title: 'Брелки - My Ossetia'
        }
      },
      computed: {
        brelocks() {
          return this.$store.state.brelocks
        }
      },
      methods: {
        addToCart(e) {
          this.$store.commit('addToCart', e)
        },
        changeMaterial(material){
           this.$store.dispatch('changeMaterial', material)
           this.material = material
        }
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
    background-image: url('~/assets/images/brelki-wr.jpg');
    background-size: cover;
    background-position: center;
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