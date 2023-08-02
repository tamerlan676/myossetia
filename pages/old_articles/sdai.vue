<template lang="pug">
.article
  .article-wrapper
  .content
    h1.title Сдай свой старый чехол и получи скидку.
    .text {{ p1 }}
    br
    h3 Почему мы делаем это?
    .text {{ p2 }}
</template>

<script>
export default{
  name: 'BeregiOssetiu',
  data () {
    return {
      p1: 'Сдай свой старый чехол и получи скидку 10% на всю нашу продукцию. Изменить мир – это реально. Стоит только начать с себя!',
      p2: 'Потому что, откровенно говоря, в мире и так достаточно мусора. Огромное количество мусора в окружающей среде загрязняет наши города, душит нашу дикую природу и отравляет питьевую воду – и мы полны решимости что-то с этим делать.',
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
    background-image: url(~/assets/images/per.webp);
    margin-bottom: 32px;
    @media(min-width: 768px){
      height: 400px;
      background-position: center;
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