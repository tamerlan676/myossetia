<template lang="pug">
.categories
  h3.block-title Сувениры
  .categories-wrapper
    nuxt-link.category(to=`/categories/cases`)
      h4.category-name Чехлы для телефонов
    nuxt-link.category(to="/categories/pines")
      h4.category-name Пины
    nuxt-link.category(to="/categories/wrappers")
      h4.category-name Обложки на паспорт
    nuxt-link.category(to="/categories/cuples")
      h4.category-name Металлические кружки
    nuxt-link.category(to="/categories/bracelets")
      h4.category-name Браслеты
</template>

<script>
  export default{
    name: 'CategoriesComponent'
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
      grid-template-columns: 1fr 1fr;
      
    }
    .category{
    width: 100%;
    overflow: hidden;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/images/cat.jpg);
    background-size: cover;
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
      opacity: 0.6;
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
      font-size: 24px;
    }
  }

  }
}
</style>