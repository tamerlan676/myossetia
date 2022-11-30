<template lang="pug">
.add-message(:class="{ active: addedMessage }") ✓ Товар добавлен в корзину
</template>

<script>
  export default{
    name: 'AddMessage',
    props: { 
       addedMessage: Boolean
      }
  }
</script>

<style lang="scss" scoped>
.add-message{
  background: rgb(87, 87, 87);
  color: #fff;
  padding: 15px;
  position: absolute;
  width: fit-content;
  top: -100%;
  left: 50%;
  z-index: 100;
  transition: all .5s ease;
  border-radius: 5px;
  &.active{
    top: 25%;
    margin-left: -150px;
    @media(min-width: 992px){
      top: 10%;
    }
  }
}
</style>