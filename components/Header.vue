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
    width: 140px;
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
      margin-right: 140px;
    }
    .parent-ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
    }
    li {
      color: #000;
      display: block;
      position: relative;
      transition-duration: 0.5s;
      padding: 10px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .1rem;
      font-weight: bold;
      a {
        color: #000;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: .1rem;
        font-weight: bold;
        transition: all .5s ease;
      }
      &:hover{
        background: #c49d6e;
        color: #fff;
	      cursor: pointer;
      }
    }

    .child-ul {
      background: #c49d6e;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 1s ease;
      pointer-events: none;
      left: 0;
      width: 200px;
      padding: 10px;
      transform: matrix(1, 0, 0, 1, 3, -20);
      a{
        width: 100%;
        display: block;
        color: #fff;
        transition: all .5s ease;
        &:hover{
          color: brown;
        }
      }
    }

    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      pointer-events: all;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 10);
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
