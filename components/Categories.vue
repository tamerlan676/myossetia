<template lang="pug">
.categories
  h3.block-title Категории
  .categories-wrapper
    nuxt-link.category(to=`/categories/cases` :style="{ 'background-image': 'url(' + caseImg + ')' }")
      h4.category-name Чехлы для телефонов
    nuxt-link.category(to="/categories/popsockets" :style="{ 'background-image': 'url(' + popImg + ')' }")
      h4.category-name Попсокеты
    nuxt-link.category(to="/categories/wrappers" :style="{ 'background-image': 'url(' + pasImg + ')' }")
      h4.category-name Обложки на паспорт
    nuxt-link.category(to="/categories/cuples" :style="{ 'background-image': 'url(' + cupleImg + ')' }")
      h4.category-name Металлические кружки
    nuxt-link.category(to=`/categories/brelocks` :style="{ 'background-image': 'url(' + brelCat + ')' }")
      h4.category-name Брелоки
    nuxt-link.category(to="/categories/bracelets" :style="{ 'background-image': 'url(' + bracCat + ')' }")
      h4.category-name Браслеты
    nuxt-link.category(to="/categories/pines" :style="{ 'background-image': 'url(' + pinesCat + ')' }")
      h4.category-name Пины
    nuxt-link.category(to="/categories/cards" :style="{ 'background-image': 'url(' + cardCat + ')' }")
      h4.category-name Открытки
</template>

<script>
  export default{
    name: 'CategoriesComponent',
    data() {
      return {
        caseImg: require('~/assets/images/case-cat.jpg'),
        cupleImg: require('~/assets/images/cuplee-cat.jpg'),
        popImg: require('~/assets/images/popscockets.png'),
        pasImg: require('~/assets/images/pas-cat.jpg'),
        brelCat: require('~/assets/images/brel-cat.jpg'),
        bracCat: require('~/assets/images/brac-cat.jpg'),
        pinesCat: require('~/assets/images/pincat.jpg'),
        cardCat: require('~/assets/images/card-cat.jpg'),
      }
    }
  }
</script>

<style lang="scss" scoped>
.categories{
  padding: 40px 16px;
  @media(min-width: 1200px){
    padding: 120px 0 60px;
  }
  .block-title{
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
    @media(min-width: 1200px){
      margin-bottom: 40px;
      font-size: 32px;
    }
  }
  .categories-wrapper{
    display: grid;
    grid-gap: 20px;
    @media(min-width: 768px){
      grid-template-columns: 1fr 1fr;
    }
    @media(min-width: 992px){
      margin: 0 auto; 
    }
    @media(min-width: 1200px){
      width: 100%;
      padding: 0 40px;
      margin: 0 auto; 
      grid-template-columns: 1fr 1fr 1fr 1fr;
      box-sizing: border-box;
      
    }
    .category{
    width: 100%;
    overflow: hidden;
    height: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    transition: all .5s ease;
    background-position: center;
    @media(min-width: 992px){
      height: 400px; 
    }
    @media(min-width: 1200px){
      height: 500px; 
    }
    &:before{
      content: '';
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #000;
      opacity: 0.4;
      z-index: 1;
      transition: all .5s ease;
    }
    &:hover{
      &:before{
        opacity: 0.3;
      }
    }
    .category-name{
      color: #fff;
      z-index: 2;
      font-size: 20px;
      @media(min-width: 992px){
        font-size: 24px; 
      }
    }
  }

  }
}
</style>