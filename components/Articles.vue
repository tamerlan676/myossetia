<template lang="pug">
.articles
    h2 Новости и статьи
    .articles-wrapper 
        article.article(v-for="article in articles") 
            nuxt-link.img(:to="`/articles/${article.id}`")
                img(:src="article.acf.image" :alt="article.title.rendered")
            .info
                .date {{ article.acf.date }}
                h3.title {{ article.title.rendered }}
    //- nuxt-link.all-blog(to="/articles") Читать все статьи
                   
</template>
  
  <script>
  export default{
      name: 'ArticlesOnMain',
      props: {
          articles: Array,
          category: String // Название папки внутри категории или коллекции
        },
      data() {
          return {
  
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
  .articles{
      padding: 40px 24px;
      h2{
          text-align: center;
          margin-bottom: 40px;
          @media(min-width: 992px){
              font-size: 28px;
          }
      }
      @media(min-width: 768px){
          padding: 80px 32px;
      }
      .articles-wrapper{
              margin-bottom: 32px;
          @media(min-width: 768px){
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 20px;
          }
          @media(min-width: 992px){
              grid-template-columns: 1fr 1fr 1fr;
          }
          @media(min-width: 1200px){
              width: 1120px;
              margin: 0 auto 32px;
          }
          .article{
              margin-bottom: 24px;
              @media(min-width: 768px){
                  margin-bottom: 0;
              }
              .img{
              height: 200px;
              display: block;
              margin-bottom: 8px;
              border-radius: 10px;
              overflow: hidden;
              img{
                  width: 100%;
                  height: 200px;
                  object-fit: cover;
                  }
              }
              .date{
                  font-size: 12px;
                  color: gray;
                  margin-bottom: 10px;
              }
              .title{
                  font-size: 18px;
              }
  
          }
      }
      .all-blog{
          text-align: center;
          display: block;
          color: #8ed081;
      }
  
  }
  </style>