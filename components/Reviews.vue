<template lang="pug">
section.reviews
    h2.section-title(v-html="title") {{ title }}
    .reviews-wrapper
        .review(v-for="(review, i) in reviews" :key="i")
            .header 
                .name {{ review.name }}
            .main
                //- img.circle(:src="review.img" @click="index = i")
                .text {{ review.text }}
    a.btn(target="_blank" href="https://yandex.ru/maps/org/my_ossetia/103083105936/reviews/?ll=44.681053%2C43.029665&z=16") читать все отзывы
</template>
      
      <script>
      export default {
          name: 'ReviewsComp',
        data() {
          return {
              title: `Наши клиенты остаются довольными <br> Вот доказательства:`,
            reviews: [ 
              {
                  name: 'Тамерлан',
                  text: 'Широкий ассортимент современных сувенирных товаров. Бренд выделяется своими дизайнерскими решениями и идеями. Современные ребята, развивают свой продукт оффлайн и онлайн) '
              },
              {
                  name: 'Alina Loparyova',
                  text: 'Замечательный проект! Заходила в магазинчик, когда была во Владикавказе, набрала себе милых мелочей и кружку 🥰 не оказалось на мою модель телефона чехла, который мне понравился, но ребята быстро сделали его для меня и отправили в Москву♥️ считаю что ребята делают большое дело, изготавливая столь качественную продукцию, чтобы используя ее, люди теплыми мыслями возвращались к любимой Осетии🤍'
              },
              {
                  name: 'Айгуль М.',
                  text: 'Покупаю в этом магазине чехлы на смартфоны, качество отличное🔥красивые, с оригинальным дизайном, приятные на ощупь😊 большой ассортмент. Значки со мной во всех поездках, радуют❤️ Всегда быстрая доставка в С.-Петербург📨'
              },
              {
                  name: 'Екатерина Кемпер',
                  text: 'MyOssetia - это больше, чем магазин сувениров. Это, в первую очередь, люди, к которым хочется возвращаться. Клиентоориентированность 💯 Это про вкус и стиль. Это с любовью к Осетии 💔🏔️'
              },
              {
                  name: 'Yuji K.',
                  text: 'Очень хорошие товары. Делают все качественно. Доставка работает прекрасно. Даже могут сделать чехол под ваш дизайн. За это отдельное спасибо💔 Ребята молодцы. Всем советую к приобретение их товаров!!!'
              },
              {
                  name: 'Алина',
                  text: 'Очень красивые и интересные сувениры, классно передающие атмосферу Осетии. Покупала чехлы как себе, так и на подарки, все остались в восторге!'
              },
            ],
            index: null,
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      .reviews{
          padding: 40px 16px;
          @media(min-width: 1200px){
              width: 1120px;
              padding: 120px 0;
              margin: 0 auto;
          }
          .section-title{
            margin-bottom: 16px;
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
          p{
              margin-bottom: 40px;
          }
          .reviews-wrapper{
              @media(min-width: 992px){
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-gap: 20px;
                  margin-bottom: 40px;
              }
              @media(min-width: 1200px){
                  width: 1120px;
                  margin: 0 auto 40px;
              }
              .review{
                  background: #F5F5F5;
                  border-radius: 15px;
                  padding: 24px;
                  margin-bottom: 20px;
                  @media(min-width: 992px){
                      margin-bottom: 0;
                  }
                  .header{
                      display: flex;
                      justify-content: flex-end;
                      margin-bottom: 16px;
                      .name{
                        font-weight: 800;
                      }
                  }
                  .main{
                      display: flex;
                      .circle{
                          width: 60px;
                          height: 60px;
                          border-radius: 100%;
                          margin-right: 20px;
                          cursor: pointer
                      }
                  }
              }
          }
          .btn{
            background: #000;
            color: #fff;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            @media(min-width: 768px){
              width: 300px;
              margin: 0 auto;
            }
          }
          .transp-btn{
              border: 1px solid #000;
              color: #000;
              @media(min-width: 992px){
                  width: 300px;
                  margin: 0 auto;
              }
          }
      }
      </style>