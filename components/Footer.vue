<template lang="pug">
.footer
  .footer-wrapper
    .block
        img(src="~/assets/images/logo_footer.png")
        .email mail@myossetia.ru
    .block 
      ul.menu
        li(v-for="item in menu1")
          nuxt-link(:to="item.link") {{ item.title }}
    .block 
      ul.menu
        li(v-for="item in menu2")
          nuxt-link(:to="item.link") {{ item.title }}
    .block 
      ul.menu
        li(v-for="item in menu3")
          nuxt-link(:to="item.link") {{ item.title }}
  .copyright © 2025 WWW.MYOSSETIA.RU
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
              title: 'О нашей компании',
              link: '/about'
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
              title: 'Контакты',
              link: '/contacts'
            },
            {
              title: 'Политика конфиденциальности',
              link: '/policy'
            },
          ],
          menu2:[
            {
              title: 'Чехлы на телефоны',
              link: '/categories/cases'
            },
            {
              title: 'Обложки на паспорт',
              link: '/categories/wrappers'
            },
            {
              title: 'Металлические кружки',
              link: '/categories/cuples'
            },
            {
              title: 'Браслеты',
              link: '/categories/bracelets'
            }
          ],
          menu3:[
            {
              title: 'Hohag_com',
              link: '/collections/hohag'
            },
            {
              title: 'Dzigojty_ka',
              link: '/collections/dzigoi'
            },
            {
              title: 'Tembolat',
              link: '/collections/tembolat'
            },
            {
              title: 'Alania',
              link: '/collections/alania'
            },
            {
              title: 'Irondzinad',
              link: '/collections/irondz'
            }
          ]
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
  .footer{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background: #000;
    .footer-wrapper{
      margin-bottom: 24px;
      padding: 40px 0;
      @media(min-width: 992px){
        width: 1120px;
        margin: 0 auto;
        padding: 80px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, .12)
      }
      .block{
        text-align: center;
        border-bottom:  1px solid rgba(0, 0, 0, .12);
        padding: 0;
        @media(min-width: 992px){
          border-bottom: none;
          padding: 20px;
        }
        img{
          width: 150px;
        }
    }
    .menu{
      display: none;
      @media(min-width: 992px){
        display: block;
      }
      li{
        margin-bottom: 16px;
        text-align: center;
        @media(min-width: 992px){
          text-align: left;
        }
      }
      a{
        font-weight: 300;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: .2rem;
        &:hover{
          color: #c49d6e
        }
      }
    }
    }
    .email{
      color: #fff
    }
    .copyright{
      text-align: center;
      padding: 0 2rem;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: .2rem;
      color: #fff;
      padding-bottom: 40px;
    }
  }
  </style>