<template lang="pug">
.article
  .article-wrapper
  .content
    h1.title Помоги диким животным
    .text {{ p1 }}
</template>

<script>
export default{
  name: 'BeregiOssetiu',
  data () {
    return {
      p1: 'СОБЕРИ МУСОР — ПОЛУЧИ ПОДАРОК❗ \n\n Северная Осетия — это ущелья, которые завораживают какой-то нереальной красотой, это леса и реки, водопады и горы. А еще это старинные поселения, которые много веков хранят энергетику тех, кто здесь когда-то жил, это религиозные памятники — многочисленные старинные храмы… и все это — на фоне гор мусора! \n\n Давайте вместе сохраним природу Осетии в первозданном виде!',

    }
  }
}  
</script>

<style scoped lang="scss">
.article{
  .article-wrapper{
    width: 100%;
    height: 200px;
    background-size: cover;
    background-image: url(~/assets/images/horses.jpg);
    margin-bottom: 32px;
    @media(min-width: 768px){
      height: 500px;
      background-position: top;
    }
  }
  .content{
    padding: 16px;
    @media(min-width: 1200px){
      width: 900px;
      margin: 0 auto;
    }
    .title{
      font-size: 24px;
      margin-bottom: 16px;
    }
    img{
      max-width: 100%;
      margin-bottom: 16px;
    }
    .text{
      margin-bottom: 16px;
      white-space: pre-line;
      line-height: 1.5;
    }
  }
}

</style>