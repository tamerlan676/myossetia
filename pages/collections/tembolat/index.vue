<template lang="pug">
.category
  .collection-wrapper
  .collection-info
    h1.title My Ossetia x Tembolat
    .collection-desc {{ desc }}
  .category-flex
    CaseCollections
    .products-wrapper
      .product(v-for="(item, key) in collection" :key="key")
        nuxt-link(:to="`/collections/tembolat/${item.id}`")
          img.img(:src="item.acf.product_images_1")
        .info 
          .left
            h3 {{ item.title.rendered }}
          .right
            .old-price {{ item.acf.price * 1.5 }} ₽
            .price {{ item.acf.price_count }} ₽ 
        .sale Акция
    </template>
      
      <script>
    import CaseCollections from '~/components/CaseCollections.vue';
        export default{
        name: "SlugCategory",
        components: { CaseCollections },
        data() {
          return {
            desc: 'Мы бережно обращаемся  с национальным наследием, по-своему интерпретируем культурный код Осетии, и без лишней скромности заявляем, что хотим покорить мир. И знаете почему? \n\n Потому что мы запускаем беспрецедентную коллаборацию с художником и дизайнером Темболатом Гугкаевым @tembolagugkaev Которого многие на родине знают как одного из основателей национального арт-пространства @portalvl \n\n Но довольно слов. Наслаждайтесь  же нашей коллаборацией! И жадно впитывайте каждый принт, каждый арт, которыми мы уже гордимся.'
          }
        },
        async fetch({ store, params }) {
          const options = {
            collectionName: 'Tembolat'
          }
            await store.dispatch("getCollection", options);
        },
        computed: {
            collection() {
                return this.$store.state.collection;
            }
        },
        methods: {
            addToCart(e) {
                this.$store.commit("addToCart", e);
            },
        },
    }
      </script>
      
      <style lang="scss" scoped>
        .category{
          h1{
            font-size: 24px;
            margin-bottom: 24px;
          }
          .collection-wrapper{
            width: 100%;
            height: 380px;
            background-image: url('~/assets/images/temb-wr.webp');
            background-size: cover;
            background-position: center;
          }
          .collection-info{
            padding: 32px 16px;
            white-space: pre-line;
            line-height: 1.5;
            @media(min-width: 1200px){
              width: 900px;
              padding: 32px;
            }
          }
          .category-flex{
            display: flex;
            padding: 16px;
            @media(min-width: 1200px){
              padding: 32px;
            }
          }
          .products-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
    width: 100%
  }
  .product{
    border: 1px solid rgb(241, 241, 241);
    position: relative;
    transition: all .5s ease;
    &:hover{
      transform: translateY(-20px);
    }
    img{
      max-width: 100%;
    }
    .info{
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        @media(min-width: 768px){
          display: flex;
        }
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
          @media(min-width: 768px){
            text-align: right;
          }
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
        background: #FC9E4F;
        padding: 5px 10px;
        font-size: 14px;
        left: 0;
        top:30px;
        color: #fff;
        opacity: 0.6;
      }
  }
}
        }
    
      </style>