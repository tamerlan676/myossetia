<template lang="pug">
article.article(v-if="getItem")
    header
        h1 {{ getItem.title.rendered }}
        .date {{ getItem.acf.date }}
    .image 
        img(:src="getItem.acf.image" :alt="getItem.title.rendered")
    .content
        p(v-html="getItem.acf.text")  {{ getItem.acf.text }}
</template>
          
    <script>
    export default {
      data() {
        return {
          id: this.$route.params.id,
          addedMessage: false,
          counter: false
        }
      },
      async fetch ({ store }) {
          await store.dispatch('getArticles')
    },
      head(){
            return {
              title: this.getItem.acf.seo_title,
              meta: [
                    { 
                        hid: 'description', 
                        name: 'description', 
                        content: this.getItem.acf.seo_desc 
                    },
                  ]
            }
      },
      computed: {
        getItem() {
          return this.$store.state.articles.filter(item => item.id === +this.$route.params.id)[0]
        }
      }
    }
    </script>
          
    <style scoped lang="scss">
    .article{
      padding-top: 32px;
      @media(min-width: 992px){
        width: 900px;
        margin: 0 auto 40px;
      }
      header{
        padding: 16px;
        @media(min-width: 992px){
          padding: 0
        }
      }
      h1{
        margin-bottom: 10px;
      }
      .date{
        color: gray;
        margin-bottom: 24px;
      }
      .image{
        width: 100%;
        margin-bottom: 24px;
        @media(min-width: 768px){
          height: 400px;
        }
        img{
          width: 100%;
          object-fit: cover;
          @media(min-width: 768px){
            height: 400px;
        }
        }
      }
      .content{
        padding: 16px;
        @media(min-width: 992px){
          padding: 0
        }
        strong{
          color: red!important
        }
      }
    }
    </style>