<template lang="pug">
.articles
    h1 Полезные статьи о фруктах и овощах
    article.article(v-for="article in 10") 
        nuxt-link.link(to="#")
            .img
            .info 
                h2 10 чехлов, которые помогут мебели прослужить дольше
                .tags Фрукты / Апельсин / Еда

</template>
    
    <script>
    export default{
        name: 'ArticlesPage',
        data() {
            return {
            }
        },
        head(){
            return {
              title: 'Полезные статьи о фруктах и овощах'
            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .articles{
        padding: 16px;
        @media(min-width: 992px){
            padding: 40px 32px;
        }
        @media(min-width: 1200px){
            width: 900px;
            margin: 0 auto;
        }
        h1{
            margin-bottom: 24px;
            font-size: 24px;
        }
        .article{
            border-top: 1px solid rgb(236, 236, 236);
            border-bottom: 1px solid rgb(236, 236, 236);
            padding: 16px 0;
            margin-bottom: 8px;
            .link{
                display: flex;
                h2{
                    color: #000;
                    transition: all .5s ease;
                    margin-bottom: 8px;
                }
                .tags{
                    font-size: 12px;
                    color: gray
                }
                &:hover{
                    h2{
                        color: red
                    }
                }
            }
            .img{
                width: 72px;
                height: 72px;
                margin-right: 10px;
                display: block;
                flex: none;
                @media(min-width: 768px){
                    width: 220px;
                    height: 100px;
                }
                img{
                    width: 100%;
                    object-fit: cover;
                    height: 72px;
                    @media(min-width: 768px){
                        height: 100px;
                    }
                }
            }
            .info{
                h2{
                    font-size: 18px;
                    line-height: 26px;
                }
            }
        }
        
    }
    
    </style>