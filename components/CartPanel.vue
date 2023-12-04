<template lang="pug">
.cart-panel
  header
   h3 Корзина
   img( width="30px" src="~/assets/images/close.svg" @click="$emit('turnCart')")
  div(v-if="cart.length") 
    .products-list 
      .product(v-for="(product, id) in cart" :key="id")
        .delete(@click="deleteProduct(product, id)")
        .wrapper
          img(:src="product.img")
          .info
            .title {{ product.title }}
            .model(v-if="product.model || product.color") {{ product.model }}, {{ product.color }}
            .model(v-if="product.shirtName || product.shirtNumber") {{ product.shirtName }}, {{ product.shirtNumber }}
            .calc
              .calc-wrapper 
                span(@click="minusOne(product)") -
                input(:value="product.quantity" disabled)
                span(@click="plusOne(product)") +
              .calc-price {{ product.price }} ₽
    .total-price
      .total Итоговая цена: 
      .price {{ totalPrice }} ₽
    .promocode-zone(v-if="!promocodeActivated")
      input(type="text" v-model="promocode" placeholder="Введите промокод")
      button(type="button" @click="usePromocode") Применить
    .message(v-if="promocodeActivated") Промокод на скидку 10% применился!
    .errorMessage(v-if="promocodeError") Недействительный промокод
    .btn(@click="$emit('turnCart')")
      nuxt-link.create-order(to="/order") Оформить заказ
  .empty-cart(v-if="cart.length < 1") В вашей корзине пока ничего нет
</template>

<script>
  export default{
    name: 'CartPanel',
    data() {
      return {
        promocode: '',
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      },
      totalPrice() {
        return this.$store.state.totalPrice
      },
      promocodeActivated() {
        return this.$store.state.promocodeActivated
      },
      promocodeError() {
        return this.$store.state.promocodeError
      }
    },
    methods: {
      plusOne(product){
        this.$store.commit('plusOne', product)
      },
      usePromocode(){
        this.$store.commit('usePromocode', this.promocode.toUpperCase())
      },
      minusOne(product){
        this.$store.commit('minusOne', product)
      },
      deleteProduct(product, id){
        this.$store.commit('deleteProduct',{
          product,
          id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .cart-panel{
      position: fixed;
      width: 100%;
      height: 100%;
      right: -100%;
      top: 78px;
      transition: all .5s ease;
      z-index: 20;
      background: rgb(241, 241, 241);
      @media(min-width: 768px){
        padding: 20px 16px;
        width: 400px;
      }
      &.active{
        right: 0;
      }
      header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        padding: 16px;
        img{
          cursor: pointer;
        }
      }
      .products-list{
        overflow-y: scroll;
        height: 270px;
        margin-bottom: 24px;
        .product{
          padding: 16px;
          border-bottom: 1px solid #e5e5e5;
          position: relative;
          .wrapper{
          display: flex;
          align-items: flex-start;
          img{
            width: 60px;
            margin-right: 10px;
            }
          .info{
            width: 100%;
            .title{
              font-weight: 600;
              font-size: 16px;
              margin-bottom: 8px;
            }
            .model{
              color: rgba(0,0,0,0.4);
              font-size: 13px;
              margin-bottom: 8px;
            }
            .calc{
              display: flex;
              align-items: center;
              justify-content: space-between;
              .calc-wrapper{
                display: flex;
                span{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 30px;
                  height: 30px;
                  border: 1px solid rgba(0,0,0,0.1);
                  font-weight: 500;
                  cursor: pointer;
                }
                input{
                  width: 45px;
                  border: 1px solid rgba(0,0,0,0.1);
                  text-align: center;
                  font-size: 16px;
                  font-weight: 500;
                  &:visited{
                    outline: none;
                  }
                }
              }
            }
          }
          }
          .delete{
            width: 15px;
            height: 20px;
            position: absolute;
            top: 20px;
            background: url('~/assets/images/delete.svg');
            background-size: cover;
            right: 10px;
            cursor: pointer;
          }
        }
      }
      .total-price{
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        padding: 16px;
      }
      .btn{
        padding: 16px;
        .create-order{
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        background: #000;
        text-transform: uppercase;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        }
      }
      .empty-cart{
        display: flex;
        height: 100%;
        align-items: center;
        font-weight: 500;
        justify-content: center;
        padding: 16px;
        text-align: center;
      }
      .promocode-zone{
        display: flex;
        padding: 16px;
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
</style>