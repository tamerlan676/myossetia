<template lang="pug">
.order
  h2 Оформление заказа
  form(@submit.prevent="submitForm")
   .order-wrapper
    .steps
      transition(name="slide-fade")
        .step(v-if="currentStep === 1") 
          .step-title 1. Имя и фамилия
          .field
            .name Имя*
            input.text-field(type="text" v-model="name" placeholder="Введите имя" require)
          .field
            .name Фамилия*
            input.text-field(type="text" v-model="familia" placeholder="Введите фамилию" require)
          .field
            .name Номер телефона*
            input.text-field(type="number" v-model="phone" placeholder="Введите номер телефона" require)
          button.next-step(type="button" @click="nextStepFirst()" :class="{active: name !== '' && familia !== '' && phone !== ''}") Следующий шаг
      transition(name="slide-fade")
        .step(v-if="currentStep === 2") 
          .step-title 2. Адрес доставки
          .field
            .name Город*
            input.text-field(type="text" v-model="city" @input="getDeliveryCities()" placeholder="Введите название города" require)
            .dadatas(v-if="deliveryCities") 
              span(v-for="tip in deliveryCities" @click="setDeliveryCity(tip)") {{ tip.value }}
          .field
            .name Улица*
            input.text-field(type="text" v-model="street" @input="getDeliveryStreets()" placeholder="Введите название улицы" require)
            .dadatas(v-if="deliveryStreets") 
              span(v-for="str in deliveryStreets" @click="setDeliveryStreet(str)") {{ str.value }}
          .field
            .name Номер дома*
            input.text-field(type="text" v-model="number" placeholder="Введите номер дома" require)
          .field
            .name Почтовый индекс*
            input.text-field(type="number" v-model="index" placeholder="Введите индекс" require)
          .field
            .name Квартира
            input.text-field(type="text" v-model="flat" placeholder="Введите номер квартиры")
          button.next-step(type="button" @click="nextStepSecond()" href="#" :class="{active: city !== '' && street !== '' && number !== ''}") Следующий шаг
          button.prev-step(type="button" @click="prevStep()") Назад
      transition(name="slide-fade")
        .step(v-if="currentStep === 3")  
          .step-title 3. Способ доставки
          .variant(@click="delVariant = 'Самовывоз'; changeDelPrice(0)" :class="{active: delVariant === 'Самовывоз' }")
            .variant-title 
              |Самовывоз
              br
              span(style="font-weight: normal; font-size: 13px") (по Владикавказу)
            .variant-desc  бесплатно
          .variant(@click="delVariant = 'Почта'; changeDelPrice(250)" :class="{active: delVariant === 'Почта' }")
            .variant-title Почта России
            .variant-desc  250 ₽.
          .variant(@click="delVariant = 'Курьер'; changeDelPrice(150)" :class="{active: delVariant === 'Курьер' }")
            .variant-title 
              | Доставка курьером
              br
              span(style="font-weight: normal; font-size: 13px") (по Владикавказу)
            .variant-desc  150 ₽.
          button.next-step(type="button" @click="nextStepThird()" :class="{active: delVariant !== ''}") Следующий шаг
          button.prev-step(type="button" @click="prevStep()") Назад
      transition(name="slide-fade")
        .step(v-if="currentStep === 4") 
          .step-title 4. Способ оплаты
          //- .variant(@click="paymentMethod = 'Банковской картой'" :class="{active: paymentMethod === 'Банковской картой' }")
          //-   .variant-title Банковской картой
          //- .variant(@click="paymentMethod = 'Наличными при получении'" :class="{active: paymentMethod === 'Наличными при получении' }")
          //-   .variant-title Наличными при получении
          .pay-info 
            | Пока вы можете оплатить заказ лишь при получении. 
            br
            | Вскоре мы добавим и другие способы оплаты.
          button.next-step(type="button" @click="userInfo = !userInfo" class="active") завершить
          button.prev-step(type="button" @click="prevStep()") назад
      .steps-status 
        .step-box(v-for="i  in 4" :class="{first: currentStep === 1, second: currentStep === 2, third: currentStep === 3, four: currentStep === 4}")
      .user-info(v-if="userInfo") 
        .desc Проверьте свои данные и если все верно, нажмите на кнопку "Отправить"
        h2 Ваши данные
        .line 
          span Имя
          span {{ name }}
        .line 
          span Фамилия
          span {{ familia }}
        .line(v-if="surname !== ''") 
          span Отчество
          span {{ surname }}
        .line 
          span Город
          span {{ city }}
        .line 
          span Улица
          span {{ street }}
        .line 
          span Индекс
          span {{ index }}
        .line 
          span Номер дома
          span {{ number }}
        .line(v-if="flat !== ''") 
          span Квартира
          span {{ flat }}
        .line(v-if="index !== ''") 
          span Индекс
          span {{ index }}
        .line(v-if="phone !== ''") 
          span Номер телефона
          span {{ phone }}
        .line(v-if="delVariant !== ''") 
          span Способ доставки
          span {{ delVariant }}
        button.submit-btn(type="submitForm") Отправить
    .order-info 
      h3 Ваш заказ
      .products
        .product(v-for="product in cart")
          img(:src="product.img")
          .title {{ product.title }}
          .count x {{ product.quantity }} 
          .pr-price {{ product.price }} ₽
      .delivery(v-if="delVariant === 'Почта'") 
        .del-var Почта России
        .de-price 250 ₽
      .delivery(v-if="delVariant === 'Курьер'") 
        .del-var Курьер
        .de-price 150 ₽
      .price
        .total Итого
        .total-price {{ priceWithDelivery }} ₽
      .promocode-zone(v-if="!promocodeActivated")
        input(type="text" v-model="promocode" placeholder="Введите промокод")
        button(type="button" @click="usePromocode") Применить
      .message(v-if="promocodeActivated") Промокод на скидку 10% применился!
      .errorMessage(v-if="promocodeError") Недействительный промокод
</template>

<script>
import VueDadata from 'vue-dadata';
import axios from 'axios'
export default{
  name: 'OrderComponent',
  components: {
    VueDadata
  },
  data() {
    return {
      query: '',
      token: 'd7ddbc18cd786871c68484922bd302052d4dfd5b',
      currentStep: 1,
      name: '',
      familia: '',
      city: '',
      street: '',
      number: '',
      flat: '',
      index: '',
      phone: '',
      surname: '',
      delVariant: '',
      paymentMethod: '',
      promocode: '',
      userInfo: false,
      citySuggestions: null,
    }
  },
  // async fetch ({ store, params }) {
  //   const options = {
  //     city: this.city
  //   }
  //   await store.dispatch('getAdress', options)
  // },
  head(){
        return {
          title: 'Оформление заказа',
        }
  },
  computed: {
    cart() {
          return this.$store.state.cart
    },
    deliveryCities() {
          return this.$store.state.deliveryCities
    },
    deliveryStreets() {
          return this.$store.state.deliveryStreets
    },
    deliveryIndex() {
          return this.$store.state.deliveryIndex
    },
    totalPrice() {
        return this.$store.state.totalPrice + this.$store.state.delPrice
    },
    delPrice() {
        return this.$store.state.delPrice
    },
    priceWithDelivery(){
      return this.$store.state.totalPrice + this.$store.state.delPrice
    },
    promocodeActivated() {
        return this.$store.state.promocodeActivated
    },
    promocodeError() {
      return this.$store.state.promocodeError
    }
  },
  methods: {
    prevStep() {
      this.currentStep = this.currentStep - 1
    },
    nextStepFirst() {
      if(this.name !=='' && this.familia !=='') {
        this.currentStep++
        location.href="#"
      }
    },
    changeDelPrice(n){
      this.$store.commit('changeDelPrice', n)
    },
    nextStepSecond() {
      if(this.city !=='' && this.street !=='' && this.number !== '') {
        this.currentStep++
        location.href="#"
      }
    },
    usePromocode(){
        this.$store.commit('usePromocode', this.promocode.toUpperCase())
    },
    nextStepThird() {
      if(this.delVariant !=='') {
        this.currentStep++
      }
    },
    getDeliveryCities() {
      const options = {
        query: this.city,
        city: this.city
      }
      this.$store.dispatch('getDeliveryCities', options)
    },
    getDeliveryStreets() {
      const options = {
        query: this.street,
        street: this.street,
        city: this.city
      }
      this.$store.dispatch('getDeliveryStreets', options)
    },
    setDeliveryCity(datas) {
      this.city = datas.value
      this.$store.commit('setDeliveryCity', datas)
    },
    setDeliveryStreet(datas) {
      this.street = datas.data.street
      this.$store.commit('setDeliveryStreet', datas)
    },
    submitForm() {
      const list = this.cart.map((item, index) =>  (index + 1) + ' ' + item.title + ' - ' + item.quantity + ' ' + item.model + ' ' + item.color + ' ' + item.price_count*item.quantity + '₽' )
      const order = {
        name: this.name,
        familia: this.familia,
        city: this.city,
        street: this.street,
        number: this.number,
        flat: this.flat,
        index: this.index,
        phone: this.phone,
        surname: this.surname,
        sdekAdress: this.sdekAdress,
        delVariant: this.delVariant,
        paymentMethod: this.paymentMethod,
        userInfo: false,   
        totalPrice: this.totalPrice,
        products: list.join().replace(/,/g, '\n' ) 
      }
      const message = `Заказ на сумму: ${order.totalPrice}₽ \n ${order.products} \n Имя: ${order.name} \n Фамилия ${order.familia} \n Телефон ${order.phone} \n Способ доставки: ${order.delVariant} \n Адрес: ${order.city}, ул.${order.street}, №${order.number}, Квартира: ${order.flat} Индекс: ${order.index}  \n`
      axios.post('https://api.telegram.org/bot5727754164:AAEZ2AaJjTuTVWdIdd9oL0M5s2YEZbXCtvI/sendMessage', {
        chat_id: '-741684193',
        parse_mode: 'html',
        text: message
      }).then(
          function changeLocation() {
            location.href='/success'
          },
          setTimeout(this.changeLocation, 10000)
        )
    },
  }
}  
</script>

<styles scoped lang="scss">
.order{
  padding: 16px;
  @media(min-width: 992px){
    padding: 32px;
  }
  h2{
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .order-wrapper{
    @media(min-width: 992px){
      display: flex;
      justify-content: space-between;
    }
    @media(min-width: 1200px){
      width: 1120px;
      margin: 0 auto;
    }
  }
  .steps{
    margin-bottom: 24px;
    @media(min-width: 992px){
      width: 600px;
    }
  }
  .step-title{
    font-weight: 700;
    margin-bottom: 16px;
  }
  .pay-info{
    margin-bottom: 16px;
  }
  .next-step{
    background: #000;
    padding: 10px;
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    margin-bottom: 4px;
    color: #fff;
    opacity: 0.5;
    transition: all .5s ease;
    &.active{
      opacity: 1;
    }
  }
  .prev-step{
    background: #000;
    padding: 10px;
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    color: #fff
  }
  .steps-status{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    .step-box{
      width: 100%;
      height: 6px;
      background: #e5e5e5;
      transition: all .5s ease;
      &.first{
        &:first-child{
        background: #000;
        }
      }
      &.second{
        &:first-child{
        background: #000;
        }
        &:nth-child(2){
        background: #000;
        }
      }
      &.third{
        &:first-child{
        background: #000;
        }
        &:nth-child(2){
        background: #000;
        }
        &:nth-child(3){
        background: #000;
        }
      }
      &.four{
        &:first-child{
        background: #000;
        }
        &:nth-child(2){
        background: #000;
        }
        &:nth-child(3){
        background: #000;
        }
        &:last-child{
        background: #000;
        }
      }
    }
  }
  .field{
    margin-bottom: 16px;
    position: relative;
    .name{
      margin-bottom: 8px;
    }
    .text-field{
      width: 100%;
      height: 40px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      padding: 5px;
      font-size: 16px;
    }
    .dadatas{
      position: absolute;
      top: 66px;
      left: 0;
      background: #fff;
      border: 1px solid grey;
      z-index: 20;
      width: 100%;
      box-sizing: border-box;
      span{
        display: block;
        margin-bottom: 8px;
        padding: 10px;
        &:hover{
          background: #e5e5e5;
          cursor: pointer
        }
      }
    }
    .tip{
      font-size: 13px;
      color: orange;
      margin-bottom: 16px;
    }
  }
  .variant{
    background: #f1f1f1;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    color: #499167;
    cursor: pointer;
    .variant-title{
      font-weight: 800;
      font-size: 16px;
      position: relative;
      color: #000
    }
    &:hover{
      background: #c9c9c9;
    }
    &.active{
      background: #c9c9c9;
    }
  }
  .user-info{
    .desc{
      color: #FC9E4F;
      text-align: center;
      margin-bottom: 16px;
    }
    .line{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        margin-bottom: 16px;
        span:nth-child(2){
          font-weight: bold;
        }
    }
    .submit-btn{
      background: #FC9E4F;
      padding: 15px;
      text-transform: uppercase;
      font-weight: bold;
      width: 100%;
      color: #fff;
      border-radius: 5px;
    }
  }
  /* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
}
.order-info{
  @media(min-width: 768px){
    width: 500px;
    margin: 0 auto;
  }
  @media(min-width: 992px){
    margin: 0;
    width: 300px;
  }
  @media(min-width: 1200px){
    width: 350px;
  }
  h3{
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .products{
    margin-bottom: 32px;
  }
  .product{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 8px 0;
    border-bottom: 1px solid rgb(214, 214, 214);
    img{
      width: 60px;
      height: 60px;
      @media(min-width: 1200px){
        width: 80px;
        height: 80px;
      }
    }
    .title{
      width: 150px;
      font-weight: 500;
      font-size: 14px;
      @media(min-width: 1200px){
        font-size: 16px;
      }
    }
    .count{
      font-weight: 500;
      font-size: 14px;
      color: grey;
      @media(min-width: 1200px){
        font-size: 16px;
      }
    }
    .pr-price{
      text-align: right;
      @media(min-width: 1200px){
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .delivery{
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .price{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .total{
      font-weight: 500;
      font-size: 18px;
    }
    .total-price{
      color: #499167;
      font-weight: 500;
      font-size: 18px;
    }
  }
  .promocode-zone{
        display: flex;
        input{
          border: 1px solid rgba(0,0,0,0.1);
          padding: 12px;
          margin-right: 5px;
          width: 100%;
          font-size: 16px;
          text-transform: uppercase;
        }
        button{
          padding: 12px;
          background-color: #000;
          color: #fff
        }
        &.hide{
          display: none;
        }
  }
  .message{
    text-align: center;
    margin-bottom: 16px;
    color: green;
  }
  .errorMessage{
    text-align: center;
    padding: 10px;
    margin-bottom: 16px;
    color: red;
  }
}
</styles>