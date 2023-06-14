<template lang="pug">
.questions
    h2.section-title Ответы на часто задаваемые вопросы
    .question-block(v-for="item in questions") 
        .question(@click=" item.open = !item.open") 
            .text {{ item.question }}
            .plus(:class="{ rotate: item.open === true }")
        .answer(:class="{ open: item.open === true }") {{ item.answer }}
</template>
        
        <script>
        export default {
            name: 'QuestionsAnswers',
            data() {
                return {
                    questions: [
                        {
                            question: 'Откуда берутся ваши сувениры?',
                            answer: 'Некоторые сувениры мы производим самостоятельно в специально оборудованном цеху. А часть сувениров нам поставляют проверенные потавщики, с которыми мы работаем уже несколько лет',
                            open: false
                        },
                        {
                            question: 'Где можно приобрести ваши сувениры?',
                            answer: 'Наши сувениры вы можете заказать на сайте онлайн, либо приобрести в точках продаж во Владикавказе и даже в Москве',
                            open: false
                        },
                        {
                            question: 'А цена зависит от того, где покупать?',
                            answer: 'Мы устанавливаем единую цены на всю продукцию во всех точках.',
                            open: false
                        },
                        {
                            question: 'Могу ли я приобрести вашу продукцию по оптовой цене',
                            answer: 'У нас есть специальные предложения для оптовых покупателей. Напишите нам чтобы получить их',
                            open: false
                        },
                        {
                            question: 'У вас есть доставка по России?',
                            answer: 'Мы можем отправить ваш заказ любым удобным способом. СДЕК, Почта России и другие транспортные компании.',
                            open: false
                        },
                    ]
                }
            }
        
        }
        </script>
        
        <style lang="scss" scoped>
        .questions{
           padding: 40px 24px;
           @media(min-width: 1200px){
                width: 1120px;
                margin: 0 auto;
                padding: 120px 0;
           }
           .section-title{
            margin-bottom: 24px;
           }
           .section-title::before{
                position: absolute;
                content: '';
                width: 350px;
                height: 8px;
                bottom: 14px;
                background: #FDDF55;
                display: block;
                z-index: -1;
            }
           .question-block{
                border-bottom: 2px solid #9D9D9D;
                color: #9D9D9D;
                overflow: hidden;
                position: relative;
                .question{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    height: 50px;
                    .plus{
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        font-family: "Light";
                        background: #e5e5e5;
                        border-radius: 100%;
                        background: url(../assets/images/plus.svg);
                        background-size: cover;
                        transition: all .5s ease;
                        opacity: 0.5;
                        &.rotate{
                            transform: rotate(45deg);
                        }
                    }
                }
           }
           .answer{
                height: 0;
                transition: all .5s ease;
                color: #000;
                &.open{
                    height: fit-content;
                    padding: 15px 0;
                }
           }
        }
        
        </style>