<template lang="pug">
.contacts
  h2 Наши контакты
  .text Вы можете связаться с нами любым удобным способом:
  .link(v-for="item in options")
    img(:src="item.img")
    a(:href="item.link" target="_blank") {{ item.text }}
  .divider
  h2 Точки продаж
  .text Купить нашу продукцию вы можете по следующим адресам:
  .adresses-wrapper
    .adress(v-for="point in adresses")
      .point-name {{ point.name }}
      .point-adress {{ point.adress }}
      a(:href="map" target="_blank") Посмотреть на карте

</template>

<script>
export default{
  name: 'ContactUs',
  data() {
    return {
      map: 'https://yandex.ru/maps/?um=constructor%3A5fedb0800bc765bf95c201bc0b0dc85baba827dbed9932897fcc04e8377ed223&source=constructorLink',
      options: [
        {
          text: '+7 989 137-27-27',
          img: require('~/assets/images/contacts/call.png'),
          link: 'tel:+79288597799'
        },
        {
          text: 'Написать в Telegram',
          img: require('~/assets/images/contacts/telegram.png'),
          link: '#'
        },
        {
          text: 'Написать в WhatsApp',
          img: require('~/assets/images/contacts/whats.png'),
          link: 'https://wa.me/79891372727'
        },
        {
          text: 'mail@myossetia.ru',
          img: require('~/assets/images/contacts/mail.png'),
          link: 'mailto:mail@myossetia.com'
        },
      ],
      adresses: [
      {
          name: 'My Ossetia',
          adress: 'г. Владикавказ, ул. Максима Горького, 23'
        },
        {
          name: 'Творческий центр Allon',
          adress: 'г. Москва, ул. 1 машиностроения 10'
        },
        {
          name: 'Магазин Фатима',
          adress: 'г. Владикавказ, Проспект Мира, 16'
        },
        {
          name: 'Центр развития народных промыслов',
          adress: 'г. Владикавказ, Проспект Мира, 34'
        },
        {
          name: 'Национальный музей Северной Осетии',
          adress: 'г. Владикавказ, Проспект Мира, 9'
        },
        {
          name: 'Книжный магазин Allon Billon',
          adress: 'г. Владикавказ, Проспект Мира, 12A'
        },
        {
          name: 'Рок Хостел',
          adress: 'г. Владикавказ, пер. Станиславского, 4'
        },
        {
          name: 'Бумеранг Отель',
          adress: 'г. Владикавказ, ул. Васо Абаева, 69'
        },
        {
          name: 'To bee Hip',
          adress: 'г. Владикавказ, ул. Международная улица, 2А'
        },
        {
          name: 'Бирагзанский Горячий Источник',
          adress: ''
        },
        {
          name: 'Chillawi',
          adress: 'Цейское ущелье, село Абайтикау'
        },
        {
          name: 'Отель 1950',
          adress: 'Цейское ущелье, село Абайтикау'
        },
        {
          name: 'Отель Сказка',
          adress: 'Цейское ущелье, Цей'
        },
        {
          name: 'Хостел Станиславского',
          adress: 'г. Владикавказ, пер. Станиславского, 8'
        },
        {
          name: 'Дом Книги',
          adress: 'г. Владикавказ, Тамаева, 40'
        },
        {
          name: 'Альпина парк',
          adress: 'РСО-Алания, село Кобан'
        },
        {
          name: '"Бавария"',
          adress: 'г. Владикавказ, ул. Тельмана, 45'
        },
        {
          name: 'Ресторан "Бавария"',
          adress: 'г. Владикавказ, ул. Цаликова, 25'
        },
        {
          name: 'Отель "Алания"',
          adress: 'РСО-Алания, село Кобан'
        },
        {
          name: 'Медовая ферма',
          adress: 'г. Владикавказ, Проспект Доватора, 21'
        },
      ]

    }
  },
  head(){
        return {
          title: 'Контактная информация My Ossetia',
        }
  },
}  
</script>

<style lang="scss">
.contacts{
  padding: 16px;
  @media(min-width: 1200px){
    padding-top: 32px;
    width: 1120px;
    margin: 0 auto 92px;
  }
  h2{
    margin-bottom: 16px;
    @media(min-width: 1200px){
      margin-bottom: 32px;
    }
  }
  .text{
    margin-bottom: 24px;
  }
  .divider{
    height: 40px;
  }
  .link{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img{
      width: 40px;
      margin-right: 10px;
    }
    a{
      color: grey
    }
  }
  .adresses-wrapper{
    display: flex;
    flex-direction: column;
    @media(min-width: 992px){
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .adress{
      margin-bottom: 24px;
      background: rgb(246, 246, 246);
      padding: 15px;
      &:first-child{
        background: rgb(245, 219, 142);
      }
      @media(min-width: 992px){
        width: 300px;
      }
      @media(min-width: 1200px){
        width: 46%;
      }
    .point-name{
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 18px;
    }
    .point-adress{
      margin-bottom: 8px;
    }
    a{
      color: rgb(85, 118, 159)
    }
  }
  }
}

</style>