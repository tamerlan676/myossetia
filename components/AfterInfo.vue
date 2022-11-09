<template lang="pug">
.after-info
  .price-info Цена действительна только для сайта и может отличаться от цен в розничных магазинах
  .benefits
    .benefit(v-for="item in list")
      img(:src="item.icon") 
      p {{ item.text }}
</template>

<script>
  export default{
    name: 'CartPanel',
    props: [

    ],
    data() {
      return {
        list: [
          {
            icon: require('~/assets/images/benefits/brilliant.svg'),
            text: 'Эксклюзивный дизайн'
          },
          {
            icon: require('~/assets/images/benefits/point.svg'),
            text: 'Бесплатная доставка от 2500 рублей'
          },
          {
            icon: require('~/assets/images/benefits/thumb-up.svg'),
            text: 'Высокое качество материалов и печати'
          },
          {
            icon: require('~/assets/images/benefits/heart.svg'),
            text: 'Из Осетии с любовью!'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.after-info{
  .price-info{
    margin-bottom: 32px;
    font-size: 14px;
  }
  .benefits{
    .benefit{
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      font-size: 14px;
      &:last-child{
        margin-bottom: 0;
      }
      img{
        margin-right: 8px;
        width: 20px;
      }
    }
  }
}
</style>