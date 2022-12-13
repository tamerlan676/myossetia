<template lang="pug">
.categories
  h3 Коллекции
  ul
    li
      nuxt-link(to="/collections/hohag") Hohag_com
    li
      nuxt-link(to="/collections/dzigoi") Dzigojty_ka
    li
      nuxt-link(to="/collections/tembolat") Tembolat 
    li
      nuxt-link(to="/collections/alania") Alania
    li
      nuxt-link(to="/collections/irondz") Irondzinad
    li
      nuxt-link(to="/collections/alborov") Atsamaz Alborov
</template>

<script>
  export default{
    name: 'CasesCollections',
  }
</script>

<style lang="scss" scoped>
  .categories{
  display: none;
  position: sticky;
  top: 120px;
  height: fit-content;
  @media(min-width: 1200px){
    display: block;
    width: 300px;
    margin-right: 24px;
  }
  h3{
    margin-bottom: 32px;
    font-size: 24px;  
  }
  ul{
    list-style: none;
  }
  li{
    margin-bottom: 24px;
  }
  a{
    color: #000;
    font-weight: 600;
    transition: all .5s ease;
    &:hover{
      color: brown;
    }
  }
  }
</style>