<template lang="pug">
.category
  .category-wrapper
  .category-info
    h1.title Магниты
    .category-desc {{ desc }}
  .materials
    button(:class="{active: material === 'Виниловые'}" @click="changeMagnetsMaterial('Виниловые')" ) Виниловые
    button(:class="{active: material === 'Металлические'}" @click="changeMagnetsMaterial('Металлические')") Металлические
    button(:class="{active: material === 'На холсте'}" @click="changeMagnetsMaterial('На холсте')") На холсте

  .category-flex
    ProductsWrapper(:products="magnets" folder="categories" category="magnets")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          material: 'Виниловые',
          desc: 'Брелоки от My Ossetia  из дерева - это отличный сувенир и прекрасный подарок для детей и взрослых. Оригинальный дизайн и красочность оформления придутся по вкусу ценителям оригинальных вещей. Изготовлен из экологически чистого материала - березовой фанеры. Окрашен безопасными красками на водной основе.'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getMagnets')
      },
      head(){
        return {
          title: 'Магниты - My Ossetia'
        }
      },
      computed: {
        magnets() {
          return this.$store.state.magnets
        }
      },
      methods: {
        addToCart(e) {
          this.$store.commit('addToCart', e)
        },
        changeMagnetsMaterial(material){
           this.$store.dispatch('changeMagnetsMaterial', material)
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
    background-image: url('~/assets/images/magnets-wrap.jpg');
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