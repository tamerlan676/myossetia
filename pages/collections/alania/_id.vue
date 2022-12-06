<template lang="pug">
.main
  .breadcrumbs
    .back
      nuxt-link(to="/categories/cases")
        img(src="~/assets/images/back.svg")
    ul.breadcrumbs-dt
      li
        nuxt-link(to="/") Главная
      li
        nuxt-link(to="/collections/alania/") Коллекция "Алания"
      li {{ getItem.title.rendered }}
  AddMessage(:addedMessage="addedMessage")
  .item
    .wrapper
      h1.product-title {{ getItem.title.rendered }}
      .slider
        VueSlickCarousel(:settings="settings" class="slider") 
          .slide 
            img(:src="getItem.acf.product_images_1")
          .slide(v-if="getItem.acf.product_images_2") 
            img(:src="getItem.acf.product_images_2")
      .info
        h1.product-mob-title {{ getItem.title.rendered }}
        .prices 
          .old {{ getItem.acf.price * 1.5 }} ₽
          .current {{ getItem.acf.price }} ₽
        .options 
          .description {{ getItem.acf.description }}
          .option
            h4 1. Выберите модель телефона
            select(v-model="model")
              option(disabled value="") Выберите один из вариантов
              option(v-for="(item, key) in getModels" :key="key") {{ item }}
            .not-model Моей модели нет в списке
          .option
            h4 2. Выберите цвет чехла
            .colors
              input.black(type="radio" name="color" id="color1" value="Черный" v-model="color")
              input.white(type="radio" name="color" id="color2" value="Прозрачный" v-model="color")
        button.add-to-cart(@click="addToCart(product)" :class="{ active: model !== '' }") Добавить в корзину
    .rcommended
  .customers 
    h2 Довольные покупатели
    .customers-wrapper
      .customer(v-for="item in 5")
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      id: this.$route.params.id,
      model: '',
      color: 'Черный',
      addedMessage: false,
      settings: {
        "dots": true,
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": true
      }
    }
  },
  async fetch ({ store }) {
        await store.dispatch('getMobileCases')
  },
  computed: {
    getItem() {
      return this.$store.state.mobileCases.filter(item => item.id === +this.$route.params.id)[0]
    },
    oldPrice() {
      return this.$store.state.mobileCases.filter(item => item.id === +this.$route.params.id)[0].acf.price * 1.3
    },
    getModels() {
      return this.$store.state.models
    },
    product() {
      return {
        title: this.getItem.title.rendered,
        id: this.id,
        model: this.model,
        color: this.color,
        price: +this.getItem.acf.price,
        price_count: +this.getItem.acf.price_count,
        quantity: +this.getItem.acf.quantity,
        img: this.getItem.acf.product_images_1
      }
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product)
      this.addedMessage = true
      setTimeout(() => {
        this.addedMessage = false
      }, 1500)
    },
  }
}
</script>

<styles scoped lang="scss">
.item{
  padding: 16px;
  @media(min-width: 992px) {
      padding: 32px;;
  }
  @media(min-width: 1200px) {
      margin: 0 auto;
      width: 1120px;
      padding: 0;
  }
  .product-title{
    font-size: 24px;
    margin-bottom: 16px;
    @media(min-width: 992px) {
      display: none;
    }
  }
  .product-mob-title{
    display: none;
    @media(min-width: 992px) {
      display: block;
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
  .wrapper{
    @media(min-width: 992px) {
      display: flex;
    }
  }
  .prices{
    margin-bottom: 24px;
    .old{
      text-decoration: line-through;
      margin-right: 10px;
      opacity: 0.8;
      font-size: 14px;
    }
    .current{
      font-weight: 800;
      font-size: 18px;
      color: #499167;
    }
  }
  .slider{
    @media(min-width: 992px){
      width: 500px;
    }
    @media(min-width: 992px){
      width: 600px;
      margin-right: 24px;
    }
  }
  .slide{
    width: 100%;
    img{
      max-width: 100%;
      @media(min-width: 768px){
        width: 100%;
        object-fit: cover;
        height: 750px;
      }
      @media(min-width: 992px){
        height: 600px;
      }
    }
  }
  .slick-prev, .slick-next{
    &:before{
      content: '';
    }
  }
  .slick-prev{
    left: -10px;
    z-index: 15;
    width: 17px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(~/assets/images/prev.svg);
    @media(min-width: 992px){
      left: 20px;
    }
  }
  .slick-next{
    right: -10px;
    z-index: 15;
    width: 17px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(~/assets/images/next.svg);
    @media(min-width: 992px){
      right: 20px;
    }
  }
  .options{
    .option{
      margin-bottom: 32px;
      h4{
        margin-bottom: 10px;
      }
      select{
        width: 100%;
        font-size: 16px;
        padding: 5px;
        height: 40px;
        margin-bottom: 4px;
        border: 2px solid #000;
        color: #000;
        background: transparent;
        border-radius: 5px;
        @media(min-width: 768px){
          width: 300px;
        }
      }
      .not-model{
        margin-bottom: 16px;
      }
      .custom-model{
        width: 100%;
        height: 40px;
        padding: 5px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 2px solid #000;
        @media(min-width: 768px){
          width: 300px;
        }
      }
      .not-model{
        font-size: 13px;
        color: #6d6d6d
      }
      cursor: pointer;
      .colors{
        display: flex;
        align-items: center;
        .black{
          position: relative;
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          margin-right: 12px;
          &:before{
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 100%;
            top: -1px;
            left: -1px;
            background: rgb(44, 44, 44);
            cursor: pointer;
            border: 1px solid #e5e5e5
            }
            &:checked{
              &:before{
                border: 3px solid #67AAF9
              }
            }
          }
        .white{
          position: relative;
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          &:before{
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 100%;
            top: -1px;
            left: -1px;
            background: rgb(247, 247, 247);
            cursor: pointer;
            border: 1px solid #e5e5e5
            }
            &:checked{
              &:before{
                border: 3px solid #67AAF9
              }
            }
          }
      }
    }
    .description{
      margin-bottom: 24px;
    }
  }
  .add-to-cart{
    width: 100%;
    background: #e5e5e5;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 800;
    transition: .5s ease;
    margin-bottom: 24px;
    @media(min-width: 768px){
          width: 300px;
    }
    &.active{
      background: orange;
    }
  }
}
.customers{
  padding: 16px;
  @media(min-width: 1200px){
    padding: 32px;
  }
  h2{
    font-size: 24px;
    margin-bottom: 24px;
  }
  .customers-wrapper{
    display: flex;
    overflow: auto;
    width: 100%;
    @media(min-width: 1200px){
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .customer{
      width: 300px;
      height: 300px;
      background: url('~/assets/images/amina.jpg');
      background-size: cover;
      flex: 0 0 auto;
      @media(min-width: 1200px){
        width: 100%;
        height: 400px;
      }
    }
  }
}
.breadcrumbs{
  display: flex;
  width: 100%;
  padding: 15px;
  background: #f7f7f7;
  box-sizing: border-box;
  @media(min-width: 768px){
    padding: 16px 32px;
  }
  .back{
    img{
      height: 25px;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
  .breadcrumbs-dt{
    display: none;
    @media(min-width: 768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      li{
        margin-right: 24px;
        position: relative;
        text-transform: uppercase;
        &:last-child{
          font-weight: 600;
          margin-right: 0;
        }
        a{
          color: rgb(95, 95, 95)
        }
        :before{
          position: absolute;
          content: '/';
          top: 0;
          right: -15px;
        }
      }
    }
  }
  @media(min-width: 1200px){
    margin-bottom: 48px;
  }
}
</styles>