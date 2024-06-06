<template lang="pug">
.hero
  .text  10% скидка по промокоду:
  .promo MYOSSETIA10
  nuxt-link.btn(to="/catalog") Вперед за покупками!
</template>

<script>
  export default{
    name: 'HeroComp',
    props: {
      benefits: Array
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
.hero{
  overflow: hidden;
  position: relative;
  display: flex;
  background: url('~/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  @media(min-width: 992px){
    height: calc(100vh - 80px);
  }
  .text{
    color: #fff;
    @media(min-width: 992px){
      font-size: 30px;
    }
  }
  .promo{
      font-size: 40px;
      margin-bottom: 380px;
    @media(min-width: 992px){
      font-size: 90px;
    }
    color: #fff;
    font-weight: 900;
  }
  .btn{
    background: #e5e5e5;
    color: #000;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

}
</style>