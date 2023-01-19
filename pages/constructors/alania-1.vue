<template lang="pug">
.main
  .enter-name(v-if="step === 1") 
    .label Введите имя или фамилию, которые нужно нанести на чехол.
    input(placeholder="ВВЕДИТЕ ИМЯ" v-model="name")
    .button.next(@click="step = 2", location.href="#") ДАЛЕЕ
  .enter-name(v-if="step === 2") 
    .label Введите номер, который нужно нанести на чехол.
    input(placeholder="ВВЕДИТЕ НОМЕР" v-model="number")
    .button.next(@click="callMagic()") ДАЛЕЕ
  .magic(v-if="step === 3")
    .text Сейчас на ваших глазах происходит футбольная магия
    img.ball(src="~/assets/images/ball.svg")
  .final(v-if="step === 4") 
    .case 
      .name {{ name }}
      .number {{ number }}
    button.new(@click="step = 'options'") ЗАКАЗАТЬ
    button.new(@click="step = 1") ИЗМЕНИТЬ
  .options(v-if="step === 'options'") 
        .description
        .option
          h4 1. Выберите модель телефона
          select(v-model="model")
            option(disabled value="") Выберите один из вариантов
            option(v-for="(item, key) in getModels" :key="key") {{ item }}
          a.not-model(href="https://wa.me/79288597799" target="_blank") Моей модели нет в списке
        .option
          h4 2. Выберите цвет чехла
          .colors
            input.black(type="radio" name="color" id="color1" value="Черный" v-model="color")
            input.white(type="radio" name="color" id="color2" value="Прозрачный" v-model="color")
        button.add-to-cart(@click="addToCart(product)" :class="{ active: model !== '' }") Добавить в корзину
        a.back-to-collection(href="/collections/alania") Вернуться к коллекции

</template>

<script>
export default{
  name: 'FootbolkaPage',
  layout: 'no-footer',
  data() {
    return {
      step: 1,
      name: '',
      number: '',
      model: '',
      color: 'Черный'
    }
  },
  methods: {
    callMagic(){
      this.step = 3;
      setTimeout(() => {
        this.step = 4
      }, "1000")
    },
    addToCart(product) {
      this.$store.commit('addToCart', product)
      this.addedMessage = true
      setTimeout(() => {
        this.addedMessage = false
      }, 1500)
    },
  },
  computed: {
    getItem() {
      return this.$store.state.mobileCases.filter(item => item.id === +this.$route.params.id)[0]
    },
    getModels() {
      return this.$store.state.models
    },
    product() {
      return {
        title: 'Конструктор 1',
        id: 123321,
        model: this.model,
        color: this.color,
        price: 500,
        price_count: 500,
        quantity: 1,
        img: require('~/assets/images/num-case.png'),
        shirtName: this.name,
        shirtNumber: this.number
      }
    }
  },
}  
</script>

<styles scoped lang="scss">
  .main{
    .title{
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      .xs{
        margin: 0 auto 24px;
        max-width: 100%;
        display: block;
      }
      .desc{
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 24px;
        @media(min-width: 992px){
          width: 645px;
          margin: 0 auto 24px;
        }
      }
      .btn{
        background: #EF913A;
        width: 100%;
        height: 60px;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        letter-spacing: 5px;
        border-radius: 5px;
        @media(min-width: 768px){
          width: 300px;
          margin: 0 auto;
        }
      }
    }
    .enter-name{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px;
      height: 80vh;
      .label{
        font-size: 20px;
        margin-bottom: 48px;
        text-align: center;
        font-weight: 500;
      }
      input{
        border: none;
        border-bottom: 4px solid #D9D9D9;
        width: 100%;
        height: 60px;
        text-align: center;
        font-weight: light;
        letter-spacing: 1.5px;
        font-size: 18px;
        outline: none;
        margin-bottom: 60px;
      }
      .next{
        background: #000000;
        width: 100%;
        height: 60px;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        letter-spacing: 5px;
        margin-bottom: 8px;
        @media(min-width: 768px){
          width: 300px;
          margin: 0 auto;
        }
      }
    }
    .magic{
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px;
      box-sizing: border-box;
      .text{
        text-align: center;
        font-size: 18px;
      }
      .ball{
        width: 100px;
        transform: rotate(45deg);
        margin: 20px auto;
        animation: zoom-rotate 5s linear infinite;
        // animation-direction: alternate;
      }
      @keyframes zoom-rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .final{
      padding: 16px;
      .case{
        width: 294px;
        height: 560px;
        background-image: url(~/assets/images/constructors/constructor-1.svg);
        margin: 30px auto 30px;
        position: relative;
        background-size: cover;
        .name{
          position: absolute;
          width: 100%;
          padding: 0 3px;
          top: 260px;
          box-sizing: border-box;
          font-weight: bold;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          font-size: 25px;
          font-family: 'GeoMd';
        }
        .number{
          position: absolute;
          width: 100%;
          top: 260px;
          box-sizing: border-box;
          font-weight: bold;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          font-size: 180px;
          font-family: 'GeoBold';
        }
      }
      .new{
        background: #000000;
        width: 100%;
        height: 60px;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        letter-spacing: 5px;
        margin-bottom: 8px;
        @media(min-width: 768px){
          width: 300px;
          margin: 0 auto;
        }
      }
    }
    .options{
      margin: 0 auto;
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
      height: 80vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
    .option{
      margin-bottom: 32px;
      h4{
        margin-bottom: 10px;
      }
      select{
        width: 100%;
        font-size: 16px;
        padding: 5px;
        height: 40px;
        margin-bottom: 4px;
        border: 2px solid #000;
        color: #000;
        background: transparent;
        border-radius: 5px;
        @media(min-width: 768px){
          width: 300px;
        }
      }
      .not-model{
        margin-bottom: 16px;
        display: block;
      }
      .custom-model{
        width: 100%;
        height: 40px;
        padding: 5px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 2px solid #000;
        @media(min-width: 768px){
          width: 300px;
        }
      }
      .not-model{
        font-size: 13px;
        color: #6d6d6d
      }
      cursor: pointer;
      .colors{
        display: flex;
        align-items: center;
        .black{
          position: relative;
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          margin-right: 12px;
          &:before{
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 100%;
            top: -1px;
            left: -1px;
            background: rgb(44, 44, 44);
            cursor: pointer;
            border: 1px solid #e5e5e5
            }
            &:checked{
              &:before{
                border: 3px solid #67AAF9
              }
            }
          }
        .white{
          position: relative;
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          &:before{
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 100%;
            top: -1px;
            left: -1px;
            background: rgb(247, 247, 247);
            cursor: pointer;
            border: 1px solid #e5e5e5
            }
            &:checked{
              &:before{
                border: 3px solid #67AAF9
              }
            }
          }
      }
    }
    .description{
      margin-bottom: 24px;
    }
  }
  .add-to-cart{
    width: 100%;
    background: #e5e5e5;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 800;
    transition: .5s ease;
    margin-bottom: 24px;
    pointer-events: none;
    @media(min-width: 768px){
          width: 300px;
    }
    &.active{
      background: orange;
      pointer-events: all;
    }
  }
  .back-to-collection{
    display: block;
    margin: 0 auto;
    width: fit-content;
    color: #3468ac
  }
  }

</styles>