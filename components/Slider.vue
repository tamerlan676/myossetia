<template lang="pug">
.slider
  VueSlickCarousel(:settings="settings" class="slider" v-if="slider") 
   .slide(v-for="(slide, id) in slider" :key="id" :style="{ 'background-image': 'url(' + slide.acf.slide + ')' }")
     h2.title {{ slide.title.rendered }}
     nuxt-link.sl-link(:to="slide.acf.slide_link") Читать Подробнее
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from 'axios'
  export default{
    name: 'SliderComponent',
    components: {
      VueSlickCarousel
    },
    data() {
      return {
        slider: null,
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
    created() {
      axios.get('https://ne404.ru/admin/wp-json/wp/v2/slider?_embed&per_page=100').then((res) => {this.slider = res.data;
      }
      )
    }
  }
</script>

<style lang="scss" scoped>
  .slider{
    z-index: 1;
    overflow: hidden;
    @media(min-width: 992px){
      height: calc(100vh - 120px);
    }
    .slide{
      width: 100%;
      height: 480px;
      position: relative;
      background-size: cover;
      background-position: bottom;
      overflow: hidden;
      &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
      }
      @media(min-width: 992px){
        height: 600px;
      }
      @media(min-width: 1200px){
        height: calc(100vh - 120px);
      }
      .title{
        position: absolute;
        z-index: 2;
        bottom: 150px;
        left: 16px;
        color: #fff;
        font-size: 24px;
        letter-spacing: 3px;
        text-transform: uppercase;
        @media(min-width: 992px){
          font-size: 32px;
          left: 40px;
        }
      }
      .sl-link{
        position: absolute;
        border: 1px solid #fff;
        padding: 10px;
        left: 16px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 500;
        bottom: 100px;
        letter-spacing: .2rem;
        @media(min-width: 992px){
          padding: 15px;
          left: 40px;
          bottom: 90px
        }
      }
    }
  }
</style>