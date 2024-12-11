<template lang="pug">
.hero
  .text  10% скидка по промокоду:
  .promo MYOSSETIA10
  nuxt-link.btn(to="/categories/cases") Перейти к коллекции
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
  background: url('~/assets/images/best.jpg');
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
    opacity: 0;
    @media(min-width: 992px){
      font-size: 30px;
    }
  }
  .promo{
      font-size: 40px;
      margin-bottom: 400px;
      opacity: 0;
    @media(min-width: 992px){
      font-size: 90px;
      margin-bottom: 480px;
    }
    color: #fff;
    font-weight: 900;
  }
  .btn{
    background: #ad872d;
    color: #fff;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

}
</style>