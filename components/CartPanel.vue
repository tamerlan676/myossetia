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
            .calc
              .calc-wrapper 
                span(@click="minusOne(product)") -
                input(:value="product.quantity" disabled)
                span(@click="plusOne(product)") +
              .calc-price {{ product.price }} ₽
    .total-price
      .total Итоговая цена: 
      .price {{ totalPrice }} ₽
    .btn(@click="$emit('turnCart')")
      nuxt-link.create-order(to="/order") Оформить заказ
  .empty-cart(v-if="cart.length < 1") В вашей корзине пока ничего нет
</template>

<script>
  export default{
    name: 'CartPanel',
    data() {
      return {
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      },
      totalPrice() {
        return this.$store.state.totalPrice
      },
    },
    methods: {
      plusOne(product){
        this.$store.commit('plusOne', product)
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
      width: 95%;
      height: 100%;
      right: -100%;
      top: 0;
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
        max-height: 600px;
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
        padding: 8px;
      }
      .btn{
        padding: 8px;
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
    }
</style>