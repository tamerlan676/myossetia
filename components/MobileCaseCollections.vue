<template lang="pug">
.categories
  ul
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
</template>

<script>
  export default{
    name: 'MobileCasesCollections',
  }
</script>

<style lang="scss" scoped>
  .categories{
  display: flex;
  margin-bottom: 24px;
  overflow-x: scroll;
  @media(min-width: 768px){
    margin: 0 auto 24px;
    width: fit-content; 
  }
  @media(min-width: 1200px){
    display: none;
  }
  ul{
    list-style: none;
    display: flex;
  }
  li{
    margin-right: 24px;
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
::-webkit-scrollbar {

width: 0px;

}
</style>