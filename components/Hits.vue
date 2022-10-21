<template lang="pug">
.hits 
  h2 Хиты продаж
  .hits-wrapper 
    .product(v-for="(item, key) in 4" :key="key")
        nuxt-link(:to="`/categories/cases/54`")
          img.img(src="~/assets/images/case-bg.jpg")
        .info 
          .left
            h3 Наименование товара
            .desc Под любую модель телефона
          .right
            .old-price 1000 ₽
            .price 800 ₽ 
        .sale Акция
</template>

<script>
  export default{
    name: 'HitsComponent'
  }
</script>

<style lang="scss" scoped>
.hits{
  padding: 40px 16px;
  @media(min-width: 1200px){
    padding: 60px 0;
  }
  h2{
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;
    @media(min-width: 1200px){
      margin-bottom: 48px;
    }
  }
}
.hits-wrapper{
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media(min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
    width: 1120px;
    margin: 0 auto;
  }
  .product{
    border: 1px solid rgb(241, 241, 241);
    margin-bottom: 20px;
    position: relative;
    transition: all .5s ease;
    @media(min-width: 768px){
      margin-bottom: 0;
    }
    @media(min-width: 1200px){
      width: 100%;
    }
    img{
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    &:hover{
      transform: translateY(-20px);
    }
  }
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media(min-width: 992px){
      padding: 16px;
    }
    h3{
      margin-bottom: 5px;
    }
    .desc{
      font-size: 12px;
      color: grey
    }
    .right{
      width: 100%;
      text-align: right;
      .old-price{
        font-size: 14px;
        text-decoration: line-through;
      }
      .price{
        font-weight: 800;
        font-size: 18px;
        color: #499167;
      }
    }
  }
  .sale{
    position: absolute;
    background: #FC9E4F;
    padding: 5px 10px;
    font-size: 14px;
    left: 0;
    top:30px;
    color: #fff
  }
}
</style>