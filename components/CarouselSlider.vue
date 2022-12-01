<template lang="pug">
.slider
  .wrapper(:style="{'margin-left': '-' + (100 * currentSlide) + '%'}")
    .slide(v-for="(slide, id) in slider" :key="id" :style="{ 'background-image': 'url(' + slide.acf.slide + ')'}")
      h2.title {{ slide.title.rendered }}
      nuxt-link.sl-link(:to="slide.acf.slide_link") Читать Подробнее
  .next(@click="nextSlide")
    img(src="~/assets/images/next-arrow.svg")
  .prev(@click="prevSlide" v-if="currentSlide > 0")
    img(src="~/assets/images/prev-arrow.svg")
  .dots
    .dot(v-for="(item, id) in 3" :class="{'active': currentSlide === id}")
</template>

<script>
import axios from 'axios'
  export default{
    name: 'CaroselSlider',
    data() {
      return {
        slider: null,
        currentSlide: 0
      }
    },
    created() {
      axios.get('https://ne404.ru/admin/wp-json/wp/v2/slider?_embed&per_page=100').then((res) => {this.slider = res.data;
      }
      )
    },
    mounted(){
      const vm = this;
      setInterval(function () {
        if(vm.currentSlide < 3){
          vm.currentSlide = vm.currentSlide + 1
        }
        if(vm.currentSlide === 3){
          vm.currentSlide = 0
        }
      }, 10000)
    },
    methods: {
      nextSlide() {
        this.currentSlide = this.currentSlide + 1
        if(this.currentSlide === 3){
          this.currentSlide = 0
        }
      },
      prevSlide() {
        this.currentSlide = this.currentSlide - 1
        console.log(this.currentSlide)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider{
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    @media(min-width: 992px){
      height: calc(100vh - 120px);
    }
    .wrapper{
      width: 100%;
      display: flex;
      transition: all 1s ease;
    }
    .slide{
      width: 100%;
      height: 480px;
      position: relative;
      background-size: cover;
      background-position: bottom;
      overflow: hidden;
      flex: none;
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
        font-size: 20px;
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
    .next{
      position: absolute;
      width: 40px;
      height: 60px;
      right: 10px;
      top: 40%;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .prev{
      position: absolute;
      width: 40px;
      height: 60px;
      left: 10px;
      top: 40%;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .dots{
      display: flex;
      width: fit-content;
      position: absolute;
      bottom: 40px;
      left: 16px;
      @media(min-width: 768px){
        left: 40px;
      }
      .dot{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background: #fff;
        opacity: 0.5;
        margin-right: 10px;
        &.active{
          opacity: 1;
        }
      }
    }
  }
</style>