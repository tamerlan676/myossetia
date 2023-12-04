<template lang="pug">
.products-wrapper
  .product(v-for="(item, key) in products" :key="key")
    nuxt-link(:to="`/${folder}/${category}/${item.id}`")
      img.img(:src="item.acf.product_images_1")
    .info 
      .left
        h3 {{ item.title.rendered }}
      .right
        .old-price {{ item.acf.price * 1.5 }} ₽
        .price {{ item.acf.price_count }} ₽ 
    .sale Акция
    .sale-dt Акция
  //- slot(name="constructor")
</template>

<script>
  export default{
    name: 'ProductsWrapper',
    props: {
      products: Array,
      folder: String, // Переменная папки. Либо категории (categories) либо коллекции (collections)
      category: String // Название папки внутри категории или коллекции
    }
  }
</script>

<style lang="scss" scoped>
.products-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-bottom: 120px;
  }
  .product{
    border: 1px solid rgb(241, 241, 241);
    position: relative;
    overflow: hidden;
    img{
      max-width: 100%;
      @media(min-width: 1200px){
        width: 100%;
        object-fit: cover;
      } 
    }
    .info{
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        @media(min-width: 992px){
          padding: 16px;
        } 
        h3{
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: normal;
          @media(min-width: 768px){
            font-size: 16px;
          }
        }
        .desc{
          font-size: 12px;
          color: grey
        }
        .right{
          text-align: left;
          .old-price{
            font-size: 14px;
            text-decoration: line-through;
          }
          .price{
            font-weight: 500;
            font-size: 18px;
            color: #499167;
          }
        }
      }
      .sale{
        position: absolute;
        background: #fdaa65;
        padding: 5px 10px;
        font-size: 14px;
        right: 0;
        bottom:15px;
        color: #fff;
        @media(min-width: 768px){
          display: none;
        }
      }
  .sale-dt{
        display: none;
        position: absolute;
        background: #fdaa65;
        padding: 5px 10px;
        font-size: 14px;
        left: 0;
        top: 30px;
        color: #fff;
        @media(min-width: 992px){
          display: block;
        }
      }
  }
}
</style>