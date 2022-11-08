<template lang="pug">
.team
  h2 Наша команда
  .team-desc тут будет описание этого блока и информация о том, что каждый может оказаться здесь
  .team-wrap
    .team-wrapper.scroll-right
      nuxt-link.team-item(v-for="item in 10" to="/#" target="_blank")
        .nickname @amina
        img(src="~/assets/images/amina.jpg")
</template>

<script>
  export default{
    name: 'CategoriesComponent',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
.team{
  padding: 80px 16px;
  overflow: hidden;
  @media(min-width: 992px){
    padding: 120px;
    margin-bottom: 120px;
  }
  h2{
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
    @media(min-width: 992px){
      font-size: 32px;
    }
  }
  .team-desc{
    text-align: center;
    margin-bottom: 40px;
  }
  .team-wrap{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      width: 100px;
      height: 100%;
      right: 0;
      z-index: 5;
      background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(255, 255, 255));
    }
    &:after{
      content: '';
      position: absolute;
      width: 100px;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 5;
      background-image: linear-gradient(to left, rgba(255,0,0,0), rgb(255, 255, 255));
    }
  }
  .team-wrapper{
    display: flex;
    will-change: transform;
    width: calc(200px * 14 + 13 * 24px);
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-name: left-effect;
    animation-play-state: running;
    .scroll-left{
      animation-name: left-effect;
    }
    @keyframes left-effect {
      0%{
        transform: translateX(0);
      }
      100%{
        transform: translateX(-50%);
      }
      
    }
    .team-item{
      width: 26.25rem;
      height: 15.75rem;
      overflow: hidden;
      margin: 0 12px;
      text-align: center;
      will-change: transform;
      transition: transform 400ms ease-out;
      position: relative;
      img{
        width: 100%;
        object-fit: cover;
      }
      .nickname{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
        background: #000;
        opacity: 0.4;
        transition: all .5s ease;
        @media(min-width: 992px){
          opacity: 0;
        }
      }
      &:hover{
        .nickname{
          opacity: 0.7;
        }
      }
    }
  }
}
</style>