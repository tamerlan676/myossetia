<template lang="pug">
.category
  .category-wrapper
  .category-info
    h1.title Попсокеты
    .category-desc {{ desc }}
  .category-flex
    ProductsWrapper(:products="popsockets" folder="categories" category="popsockets")
</template>
  
  <script>
    export default{
      name: 'SlugCategory',
      data () {
        return {
          desc: 'Попсокет (держатель для телефона) - это универсальный аксессуар, способный не только украсить смартфон, но и обеспечить максимальное удобство в ходе его эксплуатации. Гибкий аксессуар легко фиксируется на задней крышке телефона с помощью надёжного и качественного двухстороннего скотча и выполняет сразу несколько задач. В разложенном виде сокет позволяет удобно зафиксировать пальцы при создании селфи, выступает в качестве устойчивой подставки для телефона при просмотре видео.  Также такой аксессуар как попсокет сделает более удобным простое держание смартфона в руке.'
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getPopsockets')
      },
      computed: {
        popsockets() {
          return this.$store.state.popsockets
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
    background-image: url('~/assets/images/pop-wr.jpg');
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