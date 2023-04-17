<template lang="pug">
.category
  .category-wrapper
  .category-info
      h1.title Пины 
      .category-desc {{ desc }}
  .category-flex
    ProductsWrapper(:products="pines" folder="categories" category="pines") 
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          desc: 'Пин эмалированный - это аксессуар, который может стать ярким украшением на вашей одежде или сумке. Он изготовлен из металла и покрыт слоем эмали, что придает ему стойкость к истиранию и сохраняет яркость цветов на долгое время. Носите пин на одежде, рюкзаке или сумке, чтобы выделиться из толпы и добавить индивидуальности вашему образу. Эмалированный пин - это маленький, но стильный аксессуар, который может оживить любой наряд.'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getPines')
      },
      computed: {
        pines() {
          return this.$store.state.pines
        }
      },
      methods: {
        addToCart(e) {
          this.$store.commit('addToCart', e)
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
    background-image: url('~/assets/images/pines-wr.jpg');
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