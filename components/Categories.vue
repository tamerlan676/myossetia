<template lang="pug">
.categories
  h3.block-title Категории
  .categories-wrapper
    nuxt-link.category(to=`/categories/cases` :style="{ 'background-image': 'url(' + caseImg + ')' }")
      h4.category-name Чехлы для телефонов
    nuxt-link.category(to="/categories/pines" :style="{ 'background-image': 'url(' + pineImg + ')' }")
      h4.category-name Пины
    nuxt-link.category(to="/categories/wrappers" :style="{ 'background-image': 'url(' + pasImg + ')' }")
      h4.category-name Обложки на паспорт
    nuxt-link.category(to="/categories/cuples" :style="{ 'background-image': 'url(' + cupleImg + ')' }")
      h4.category-name Металлические кружки
</template>

<script>
  export default{
    name: 'CategoriesComponent',
    data() {
      return {
        caseImg: require('~/assets/images/case-cat.jpg'),
        cupleImg: require('~/assets/images/cuplee-cat.jpg'),
        pineImg: require('~/assets/images/pins-cat.jpg'),
        pasImg: require('~/assets/images/pas-cat.jpg'),
      }
    }
  }
</script>

<style lang="scss" scoped>
.categories{
  padding: 40px 16px;
  @media(min-width: 1200px){
    padding: 120px 0;
  }
  .block-title{
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
    @media(min-width: 1200px){
      margin-bottom: 48px;
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
      width: 1120px;
      margin: 0 auto; 
      grid-template-columns: 1fr 1fr 1fr 1fr;
      
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
      height: 400px; 
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