<template lang="pug">
.default
  .banner НОВИНКИ ЗИМЫ УЖЕ В КАТАЛОГЕ!
  Header(@turnMenu="turnMenu" :activeBurger="activeBurger" @turnCart="turnCart")
  .mob-menu(:class="{active: menuActive}")
    header
      .menu Меню
      img( width="30px" src="~/assets/images/close.svg" @click="turnMenu")
    ul.parent-ul
        li(@click="turnMenu")
          nuxt-link(to="/") Главная
        li.dropdown-item Каталог
          ul.child-ul
            li(@click="turnMenu")
              nuxt-link(to="/categories/cases") Чехлы на телефоны
            li(@click="turnMenu")
              nuxt-link(to="/categories/wrappers") Обложки
            li(@click="turnMenu")
              nuxt-link(to="/categories/pines") Значки
            li(@click="turnMenu")
              nuxt-link(to="/categories/bracelets") Браслеты
            li(@click="turnMenu")
              nuxt-link(to="/categories/cuples") Кружки
            li(@click="turnMenu")
              nuxt-link(to="/categories/popsockets") Попсокеты
        li.dropdown-item Коллекции
          ul.child-ul
            li(@click="turnMenu")
              nuxt-link(to="/collections/hohag") Hohog_com
            li(@click="turnMenu")
              nuxt-link(to="/collections/dzigoi") Dzigojty_ka
            li(@click="turnMenu")
              nuxt-link(to="/collections/tembolat") Tembolat
            li(@click="turnMenu")
              nuxt-link(to="/collections/alania") Alania
            li(@click="turnMenu")
              nuxt-link(to="/collections/irondz") Irondzinad
        li(@click="turnMenu")
          nuxt-link(to="/articles") Наши проекты
        li(@click="turnMenu")
          nuxt-link(to="/contacts") Контакты
  CartPanel(:class="{active: cartActive}" @turnCart="turnCart")
  Nuxt
  Footer
</template>

<script>
// import Snowf from 'vue-snowf'
import CartPanel from '~/components/CartPanel.vue';

  export default{
    name: "DefaultLayout",
    components: { CartPanel },
    data() {
        return {
            activeBurger: false,
            menuActive: false,
            cartActive: false
        };
    },
    mounted() {
      this.$store.commit('setCart',)
    },
    methods: {
        turnMenu() {
            this.menuActive = !this.menuActive;
            this.activeBurger = !this.activeBurger;
            if (this.cartActive) {
                this.cartActive = false;
                this.fixBody()
            }
        },
        turnCart() {
            this.cartActive = !this.cartActive;
            if (this.menuActive && this.activeBurger) {
                this.menuActive = false;
                this.activeBurger = false;
            }
            this.fixBody()
        },
        fixBody(){
          if(this.cartActive === true){
            const x=window.scrollX;
            const y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
          }
          if(this.cartActive === false){
            window.onscroll=function(){};
          }
        }
    },
}
</script>

<style lang="scss" scoped>
  .default{
    .banner{
      height: 40px;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 13px;
      letter-spacing: .2rem;
      @media(min-width: 1200px){
        font-size: 16px;
      }
    }
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
      top: 0;
      background: #fff;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      padding-bottom: 20px;
      @media(min-width: 992px){
        display: none;
      }
      &.active{
        left: 0;
      }
      header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        padding: 16px;
        img{
          cursor: pointer;
        }
      } 
      .parent-ul{
        li{
          padding: 10px 24px;
          border-bottom: 1px solid rgb(231, 231, 231);
          &.dropdown-item{
            font-weight: bold;
            font-size: 16px;
            color: #000;
            text-transform: uppercase;
          }
        }
        a{
          font-weight: 800;
          font-size: 16px;
          color: #000;
          text-transform: uppercase;
        }
      }
      .child-ul{
        margin-top: 20px;
        padding-left: 20px;
        li{
          padding-left: 0;
          &:last-child{
          border-bottom: none;
          }
          a{
            font-size: 14px;
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
</style>