<template lang="pug">
.slider
  .wrapper(:style="listPosition")
    .slide(v-for="(slide, id) in slider" :key="id" :style="{ 'background-image': 'url(' + slide.acf.slide + ')'}")
      h2.title {{ slide.title.rendered }}
      nuxt-link.sl-link(:to="slide.acf.slide_link") {{ slide.acf.button_text }}
      .test(v-html="slide.acf.test_field") {{ slide.acf.test_field }}
  .next(@click="nextSlide" v-if="currentSlide < 2")
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
        currentSlide: 0,
        touch: {
          startX: 0,
          endX: 0
        }
      }
    },
    computed: {
      listLength() {
        return { width: this.cards.length * 100 + '%' };
      },
      listPosition() {
        return { transform: 'translateX(-'+ this.currentSlide * 100 +'%)' };
      }
    },
    created() {
      axios.get('https://myossetia.ru/admin/wp-json/wp/v2/slider?_embed&per_page=100').then((res) => {this.slider = res.data;
      }
      )
    },
    mounted(){
      this.$el.addEventListener('touchstart', event => this.touchstart(event))
      this.$el.addEventListener('touchmove', event => this.touchmove(event))
      this.$el.addEventListener('touchend', () => this.touchend())
    },
    methods: {
      touchstart(event) {
        this.touch.startX = event.touches[0].clientX;
        this.touch.endX = 0;
      },
      touchmove(event) {
        this.touch.endX = event.touches[0].clientX;
      },
      touchend() {
        if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
          return;
        if(this.touch.endX < this.touch.startX)
          this.nextSlide()
        else
        this.prevSlide()
      },
      nextSlide() {
        if(this.currentSlide < 2){
          this.currentSlide = this.currentSlide + 1
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
      height: calc(100vh - 80px);
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
        height: calc(100vh - 80px);
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
      img{
        width: 10px;
        @media(min-width: 992px){
          width: 20px;
        }
      }
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
      img{
        width: 10px;
        @media(min-width: 992px){
          width: 20px;
        }
      }
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