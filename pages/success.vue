<template lang="pug">
.success
  img(src="~/assets/images/success.svg")
  .title Заказ принят
  .text Спасибо, что выбрали нас. Совсем скоро мы свяжемся с Вами для подтверждения заказа. Всего хорошего!
  nuxt-link.back(to="/") Вернуться на главную
</template>

<script>
export default{
  name: 'SuccessPage',
  head(){
        return {
          title: 'Успешный заказ My Ossetia',
        }
  },
}  
</script>

<styles lang="scss" scoped>
.success{
  padding: 80px 16px;
  text-align: center;
  @media(min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  img{
    width: 200px;
    opacity: 0.8;
  }
  .text{
    font-size: 16px;
    margin-bottom: 24px;
  }
  .back{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 15px;
    background-color: #2B7841;
    box-sizing: border-box;
    text-transform: uppercase;
    color: #fff;
    justify-content: center;
    border-radius: 5px;
    font-weight: 500;
    transition: all .5s ease;
    &:hover{
      opacity: 0.8;
    }
  }
}
</styles>