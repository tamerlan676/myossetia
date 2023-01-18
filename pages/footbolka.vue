<template lang="pug">
.main
  .title(v-if="step === 1") 
    img.xs(src="~/assets/images/footbolka/1.svg")
    .desc Укажи свою фамилию и номер и посмотри как будет выглядеть твой чехол
    button.btn(@click="step = 2") НАЧНЕМ!
  .enter-name(v-if="step === 2") 
    .label Введите имя или фамилию, которые нужно нанести на чехол.
    input(placeholder="ВВЕДИТЕ ИМЯ" v-model="name")
    .button.next(@click="step = 3") ДАЛЕЕ
  .enter-name(v-if="step === 3") 
    .label Введите номер, который нужно нанести на чехол.
    input(placeholder="ВВЕДИТЕ НОМЕР" v-model="number")
    .button.next(@click="callMagic()") ДАЛЕЕ
  .magic(v-if="step === 4")
    .text Сейчас на ваших глазах происходит футбольная магия
    img.ball(src="~/assets/images/ball.svg")
  .final(v-if="step === 5") 
    .case 
      .name {{ name }}
      .number {{ number }}
    button.new(@click="step = 2") ПО НОВОЙ
</template>

<script>
export default{
  name: 'FootbolkaPage',
  data() {
    return {
      step: 1,
      name: 'гоиргобиани',
      number: '27'
    }
  },
  methods: {
    callMagic(){
      this.step = 4;
      setTimeout(() => {
        this.step = 5
      }, "5000")
    }
  }
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
        height: 531px;
        background-image: url(../assets/images/footbolka/empty-football-case.svg);
        margin: 30px auto 30px;
        position: relative;
        .name{
          position: absolute;
          width: 100%;
          padding: 0 3px;
          top: 150px;
          box-sizing: border-box;
          font-weight: bold;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          font-size: 25px;
        }
        .number{
          position: absolute;
          width: 100%;
          top: 185px;
          box-sizing: border-box;
          font-weight: bold;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          font-size: 125px;
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
  }

</styles>