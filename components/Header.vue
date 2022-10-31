<template lang="pug">
.header
  .burger(@click='$emit("turnMenu")' :class="{active: activeBurger}")
    span
  nuxt-link(to="/")
    img.logo(src="~/assets/images/logo.png")
  .menu-lg
    ul.parent-ul
      li
        nuxt-link(to="/") Главная
      li.dropdown-item(@click="turnCatMenu()") Каталог
        ul.child-ul(:class="{active: catDroodown}")
          li
            nuxt-link(to="/categories/cases") Чехлы на телефоны
          li
            nuxt-link(to="/categories/wrappers") Обложки на паспорт
          li
            nuxt-link(to="/categories/cuples") Металлические кружки
          li
            nuxt-link(to="/categories/bracelets") Браслеты
          li
            nuxt-link(to="/categories/pines") Значки
      li.dropdown-item(@click="turnColMenu()") Коллекции
        ul.child-ul(:class="{active: collectionsDropdown }")
          li
            nuxt-link(to="/collections/hohag") Hohog_com
          li
            nuxt-link(to="/collections/dzigoi") Dzigojty_ka
          li
            nuxt-link(to="/collections/tembolat") Tembolat
          li
            nuxt-link(to="/collections/alania") Alania
          li
            nuxt-link(to="/collections/irondz") Irondzinad
      li
        nuxt-link(to="/about") Наши проекты
      li
        nuxt-link(to="/contacts") Контакты
      li
        nuxt-link(to="/about") О Нас
  .mob-sm
    .cart(@click='$emit("turnCart")')
      img(width="30px" src="~/assets/images/cart.svg")
      .count(v-if="cart.length > 0") {{ cart.length }}
</template>
<script>
  export default{
  name: 'HeaderComponent',
  props: {
      activeBurger: {
        type: Boolean,
        default: false
      },
  },
  data() {
    return{
      catDroodown: false,
      collectionsDropdown: false
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
      },
    cartLength() {
      return this.$store.state.cartLength
      }
    },
    methods: {
      turnCatMenu () {
        this.catDroodown = !this.catDroodown
        if(this.collectionsDropdown){
          this.collectionsDropdown = false
        }
      },
      turnColMenu () {
        this.collectionsDropdown = !this.collectionsDropdown
        if(this.catDroodown){
          this.catDroodown = false
        }
      }
    }
  }
  </script>

<style lang="scss">
.header{
  width: 100%;
  box-sizing: border-box;
  padding: 20px 16px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid rgb(230, 230, 230);
  z-index: 20;
  @media(min-width: 992px){
    padding: 20px 32px;
  }
  .logo{
    width: 100px;
    @media(min-width: 992px){
      width: 150px;
  }
  }
  .burger{
    width: 30px;
    height: 25px;
    position: relative;
    @media(min-width: 992px){
      display: none;
    }
    cursor: pointer;
    &::before{
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #000;
      transition: all .5s ease;
    }
    &::after{
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #000;
      bottom: 0;
      transition: all .5s ease;
    }
    span{
      width: 30px;
      height: 3px;
      background: #000;
      position: absolute;
      top: 11px;
      transition: all .5s ease;
    }
    &.active{
      span{
            display: none;
          }
        &:before{
          transform: rotate(40deg);
          bottom: 10px;
          background: rgb(124, 36, 36);
        }
        &:after{
          transform: rotate(-40deg);
          top: 12px;
          background: rgb(124, 36, 36);
        }
    }
    }
  .menu-lg{
    display: none;
    @media(min-width: 992px){
      display: block;
    }
    .parent-ul{
      list-style: none;
      display: flex;
      align-items: center;
      li{
        margin-right: 30px;
        &.dropdown-item{
          position: relative;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 12px;
          transition: all .5s ease;
          cursor: pointer;
          &:after{
            content: '';
            position: absolute;
            right: -12px;
            top: 5px;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #000;
          }
          &:hover{
            color: brown
          }
        }
        &:last-child{
          margin-right: 0;
        }
      }
      a{
        color: black;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        font-size: 12px;
        transition: all .5s ease;
        letter-spacing: .1rem;
        &:hover{
          color: brown
        }
      }
    }
    .child-ul{
      position: absolute;
      background: #fff;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      padding: 15px;
      width: 200px;
      top: 30px;
      z-index: 1;
      transition: all .5s ease;
      transform: matrix(1, 0, 0, 1, 3, -20);
      opacity: 0;
      pointer-events: none;
      li{
        margin-bottom: 12px;
      }
      &.active{
      opacity: 1;
      pointer-events: all;
      transform: matrix(1, 0, 0, 1, 3, 0);
      }
    }
  }
  .mob-sm{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cart{
      position: relative;
      cursor: pointer;
      .count{
        position: absolute;
        width: 12px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #F6D1AD;
        padding: 5px;
        font-size: 12px;
        font-weight: 500;
        top: 0;
        right: -10px;
      }
    }
  }
}
</style>
