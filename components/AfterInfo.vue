<template lang="pug">
.after-info
  //- .price-info Цена действительна только для сайта и может отличаться от цен в розничных магазинах
  .benefits
    .benefit(v-for="item in benefits")
      img(:src="item.icon") 
      p {{ item.text }}
</template>

<script>
  export default{
    name: 'CartPanel',
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
.after-info{
  margin-bottom: 40px;
  .price-info{
    margin-bottom: 32px;
    font-size: 14px;
  }
  .benefits{
    .benefit{
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      font-size: 14px;
      white-space: pre-line;
      &:last-child{
        margin-bottom: 0;
      }
      img{
        margin-right: 8px;
        width: 25px;
      }
    }
  }
}
</style>