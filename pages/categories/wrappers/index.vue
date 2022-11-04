<template lang="pug">
.category
  h1.title Обложки на паспорт 
  .materials 
    button(:class="{active: material === 'ПВХ'}" @click="changeMaterial('ПВХ')") из ПВХ
    button(:class="{active: material === 'Кожа'}" @click="changeMaterial('Кожа')" ) из кожи
  .category-flex
    ProductsWrapper(:products="wrappers" folder="categories" category="wrappers")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          material: 'ПВХ'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getWrappers')
      },
      computed: {
        wrappers() {
          return this.$store.state.wrappers
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
      padding: 32px 16px;
      h1{
        font-size: 24px;
        margin-bottom: 16px;
        @media(min-width: 1200px){
          text-align: center;
        }
      }
      .category-flex{
        display: flex;
      }
      .materials{
        width: fit-content;
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        @media(min-width: 1200px){
          margin: 0 auto 24px;
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
    }

  </style>