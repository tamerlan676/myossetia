<template lang="pug">
.banner(:style="{ 'background-image': 'url(' + img + ')' }")
  .banner-text {{ text }}
</template>

<script>
  export default{
    name: 'HitsComponent',
    props: {
      img: String,
      text: String
    }
  }
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 400px;
  background: #000;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  @media(min-width: 992px){
    height: 500px;
  }
  &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.7;
        z-index: -1;
  }
  .banner-text{
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: .2rem;
    @media(min-width: 992px){
      width: 670px;
      margin: 0 auto;
      font-size: 32px;
      line-height: 40px;  
    }
  }
}
</style>