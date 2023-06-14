<template lang="pug">
.default
  Header(@turnMenu="turnMenu" :activeBurger="activeBurger" @turnCart="turnCart")
  .mob-menu(:class="{active: menuActive}")
    ul.parent-ul
        li.parent-li(@click="checkMenuElem(item)" v-for="item in menu") 
            nuxt-link.parent-a(:to="item.link") {{ item.title }}
            .icon(v-if="item.subitems" :class="{ turned: item.sub }")
            ul.child-ul(:class="{ active: item.sub }")
              li(v-for="subitem in item.subitems" @click="turnMenu")
                nuxt-link(:to="subitem.link") {{ subitem.title }}
    .socials
      a(href="https://www.instagram.com/myossetia.store/" target="_blank")
        img(style="height: 30px;" src="~/assets/images/contacts/insta.svg")
      a(href="https://vk.com/myossetia" target="_blank")
        img(style="height: 30px;" src="~/assets/images/contacts/vk.svg")
      a(href="https://t.me/myossetia" target="_blank")
        img(style="height: 30px;" src="~/assets/images/contacts/tlg.svg")
               
  CartPanel(:class="{active: cartActive}" @turnCart="turnCart")
  Nuxt
  Footer
  .floating-call-btn 
      a(target="_blank" href="https://wa.me/79288597799")
        .pulse
          img(width="60px" src="~/assets/images/fl-wts.svg")
</template>

<script>
// import Snowf from 'vue-snowf'
import CartPanel from '~/components/CartPanel.vue';

  export default{
    name: "DefaultLayout",
    components: { CartPanel },
    data() {
        return {
            menu: [
              {
                title: 'Главная',
                link: '/',
              },
              {
                title: 'О Нашей компании',
                link: '/about',
              },
              {
                title: 'Каталог',
                link: '#',
                sub: false,
                subitems: [
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
                  },
                  {
                    title: 'Пины',
                    link: '/categories/pines'
                  },
                  {
                    title: 'Брелоки',
                    link: '/categories/brelocks'
                  },
                  {
                    title: 'Открытки',
                    link: '/categories/cards'
                  },
                  // {
                  //   title: 'Значки',
                  //   link: '/categories/pines'
                  // },
                  {
                    title: 'Попсокеты',
                    link: '/categories/popsockets'
                  },
                ]
              },
              {
                title: 'Коллекции',
                link: '#',
                sub: false,
                subitems: [
                {
                    title: 'Дарья Орлова',
                    link: '/collections/artlova'
                  },
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
                  },
                  {
                    title: 'Atsamaz Alborov',
                    link: '/collections/alborov'
                  },
                ]
              },
              {
                title: 'Контакты',
                link: '/contacts'
              }
            ],
            activeBurger: false,
            menuActive: false,
            cartActive: false
        };
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
        turnMenu() {
            this.menuActive = !this.menuActive;
            this.activeBurger = !this.activeBurger;
            if (this.cartActive) {
                this.cartActive = false;
                this.fixBody()
            }
        },
        checkMenuElem(item){
          if(item.subitems){
            item.sub = !item.sub
          }else{
            location.href = item.link;
            this.turnMenu()
          }
        },
        turnCart() {
            this.cartActive = !this.cartActive;
            if (this.menuActive && this.activeBurger) {
                this.menuActive = false;
                this.activeBurger = false;
            }
            // this.fixBody()
        },
        // fixBody(){
        //   if(this.cartActive === true){
        //     const x=window.scrollX;
        //     const y=window.scrollY;
        //     window.onscroll=function(){window.scrollTo(x, y);};
        //   }
        //   if(this.cartActive === false){
        //     window.onscroll=function(){};
        //   }
        // }
    },
}
</script>

<style lang="scss" scoped>
  .default{
    position: relative;
    .mob-menu{
      position: fixed;
      width: 100%;
      height: 100%;
      left: -100%;
      transition: all .5s ease;
      box-sizing: border-box;
      overflow-y: scroll;
      z-index: 20;
      top: 78px;
      background: #fff;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      padding-bottom: 20px;
      @media(min-width: 992px){
        display: none;
      }
      &.active{
        left: 0;
      }
      .parent-ul{
        padding: 16px;
        .parent-li{
          font-size: 18px;
          padding: 10px;
          border-bottom: 1px solid rgb(205, 205, 205);
          position: relative;
          .parent-a{
            font-weight: 500;
            text-transform: uppercase;
            color: #000
          }
          .icon{
            position: absolute;
            top: 20px;
            width: 10px;
            height: 10px;
            background-size: contain;
            right: 10px;
            background-repeat: no-repeat;
            background-image: url(~/assets/images/next.svg);
            transition: all .3s linear;
            transform: rotate(90deg);
            &.turned{
              transform: rotate(-90deg);
            }
          }
        }
      }
      .child-ul{
        transition: all .5s ease;
        transform: translateY(-22px);
        overflow: hidden;
        pointer-events: none;
        opacity: 0;
        max-height: 0;
        li{
            padding: 10px 20px;
            a{
              color: #000
            }
          }
        &.active{
          margin-top: 10px;
          overflow: hidden;
          transform: translateY(0);
          pointer-events: all;
          opacity: 1;
          max-height: 300px;
        }
      }
      .socials{
        width: 130px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
    }
    .floating-call-btn{
          position: fixed;
          bottom: 10%;
          right: 15px;
          z-index: 100;
          .pulse {
            width: 55px;
            height: 55px;
            border-radius: 50px;
            background: #1ba916;
            animation: pulse 1500ms infinite;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 #1ba916;
          }
          100% {
            box-shadow: 0 0 0 17px #fbb32f01;
          }
        }
        }
  }
</style>