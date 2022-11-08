<template lang="pug">
.mission 
  .info
    h3 Кто мы?
    h2 Наша миссия
    p {{ text }}
    nuxt-link.mission-link(to="#") подробнее
</template>

<script>
  export default{
    name: 'MissionComponent',
    data () {
      return {
        text: 'Сверхзадача проекта My Ossetia мотивировать и вдохновлять людей на путешествия, на любовь к нашему региону и заботу о нём, на сохранение исторического кода, который мы трансформируем и вкладываем в производимый нами продукт.'
      }
    }
  }
</script>

<style lang="scss" scoped>
.mission{
  width: 100%;
  height: 440px;
  background-image: url('~/assets/images/mission.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 16px;
  box-sizing: border-box;
  @media(min-width: 992px){
    height: 520px;
  }
  z-index: 1;
  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    top: 0;
    left: 0;
    z-index: -1;
  }
  // &:after{
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 300px;
  //   background-size: contain;
  //   // background-image: linear-gradient(to bottom, transparent, white);
  //   background-image: url(~/assets/images/misson-grad.png);
  //   bottom: 0;
  //   left: 0;
  //   z-index: -1;
  // }
  .info{
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    @media(min-width: 992px){
      background: #000;
      padding: 60px;
      width: 700px;
    }
  }
  h3{
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 14px;
  }
  h2{
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 16px;
  }
  .mission-link{
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 700;
    color: #fff;
  }
}
</style>