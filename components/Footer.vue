<template lang="pug">
.footer
  .footer-wrapper
    .block
        img(src="~/assets/images/logo.png")
        .email mail@myossetia.ru
    .block 
      ul.menu
        li(v-for="item in menu1")
          nuxt-link(:to="item.link") {{ item.title }}
    .block 
      ul.menu
        li(v-for="item in menu1")
          nuxt-link(:to="item.link") {{ item.title }}
    .block 
      ul.menu
        li(v-for="item in menu1")
          nuxt-link(:to="item.link") {{ item.title }}
  .copyright © 2022 WWW.MYOSSETIA.RU
</template>

<script>
  export default{
    name: 'MissionComponent',
    data() {
      return {
        menu1:[
          {
            title: 'Главная',
            link: '/'
          },
          {
            title: 'Каталог',
            link: '#'
          },
          {
            title: 'Коллекции',
            link: '#'
          },
          {
            title: 'Наши проекты',
            link: '#'
          },
          {
            title: 'О нас',
            link: '#'
          },
          {
            title: 'Контакты',
            link: '#'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  background: rgba(0, 0, 0, .04);
  padding: 16px;
  overflow: hidden;
  box-sizing: border-box;
  @media(min-width: 992px){
    padding: 60px 0;
  }
  .footer-wrapper{
    margin-bottom: 24px;
    @media(min-width: 992px){
      width: 1120px;
      margin: 0 auto 32px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, .12);
    }
    .block{
      text-align: center;
      padding: 20px;
      border-bottom:  1px solid rgba(0, 0, 0, .12);
      @media(min-width: 992px){
        border-bottom: none;
      }
  }
  .menu{
    li{
      margin-bottom: 16px;
      text-align: center;
      @media(min-width: 992px){
        text-align: left;
      }
    }
    a{
      font-weight: 300;
      color: grey;
      text-transform: uppercase;
      font-size: 14px;
      &:hover{
        color: #000
      }
    }
  }
  }
  .copyright{
    text-align: center;
    padding: 0 2rem;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .2rem;
  }
}
</style>