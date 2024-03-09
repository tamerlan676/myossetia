<template lang="pug">
.contacts
  h2 Политика конфиденциальности
  .text Ознакомьтесь с политикой конфиденциальности
  a(href="/policy.pdf" target="_blank") Скачать политику конфиденциальности

</template>

<script>
export default{
  name: 'ContactUs',
  data() {
    return {

    }
  },
  head(){
        return {
          title: 'Политика конфиденциальности My Ossetia',
        }
  },
}  
</script>

<style lang="scss">
.contacts{
  padding: 16px;
  @media(min-width: 1200px){
    padding-top: 32px;
    width: 1120px;
    margin: 0 auto 92px;
  }
  h2{
    margin-bottom: 16px;
    @media(min-width: 1200px){
      margin-bottom: 32px;
    }
  }
  .text{
    margin-bottom: 24px;
  }
  .divider{
    height: 40px;
  }
  .link{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img{
      width: 40px;
      margin-right: 10px;
    }
    a{
      color: grey
    }
  }
  .adresses-wrapper{
    display: flex;
    flex-direction: column;
    @media(min-width: 992px){
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .adress{
      margin-bottom: 24px;
      background: rgb(246, 246, 246);
      padding: 15px;
      &:first-child{
        background: rgb(245, 219, 142);
      }
      @media(min-width: 992px){
        width: 300px;
      }
      @media(min-width: 1200px){
        width: 46%;
      }
    .point-name{
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 18px;
    }
    .point-adress{
      margin-bottom: 8px;
    }
    a{
      color: rgb(85, 118, 159)
    }
  }
  }
}

</style>