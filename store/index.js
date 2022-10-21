import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      cart: [],
      cartLength: null,
      totalPrice: 0,
      sale: 0,
      sumSale: 0,
      delPrice: 0,
      priceWithDelivery: 0,
      promocodeActivated: false,
      promocodeError: false,
      mobileCases: [],
      collection: [],
      pines: [],
      cuples: [],
      wrappers: [],
      bracelets: [],
      deliveryCities:null,
      deliveryCity: null,
      deliveryRegion: null,
      deliveryStreets: null,
      deliveryStreet: null,
      models: [
        'IPhone X',
        'IPhone 11',
        'IPhone 11 Pro',
        'IPhone 12',
        'IPhone 12 mini',
        'IPhone 12 Pro',
        'IPhone 12 ProMax',
        'IPhone 13',
      ]
    },
   mutations: {
      setCart (state) {
        if (localStorage.getItem('cart')) {
          state.cart = JSON.parse(localStorage.getItem('cart'));
          state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
        }
      },
      addToCart(state, product) {
        if(state.cart.length){ 
          let isExists = false
          state.cart.map(function(item) { 
            if( item.id === product.id) { 
              isExists = true}
            return item })
          if (!isExists) {
            state.cart.push(product)
            state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
          }
         }
        else{
          state.cart.push(product);
          state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
        } 
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      minusOne(state, item){
        localStorage.setItem('cart', JSON.stringify(state.cart));
        if(item.quantity  > 1)
        {
          item.quantity = item.quantity  - 1;
          item.price =  item.price - item.price_count;
          state.totalPrice = state.totalPrice - item.price_count
        }
      },
      plusOne(state, item){
        localStorage.setItem('cart', JSON.stringify(state.cart));
        item.quantity++;
        item.price = item.price_count + item.price;
        state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
      },
      changeDelPrice(state, price) {
        state.delPrice = price
      },
      deleteProduct(state, id){
        state.cart.splice(id, 1)
      },
      usePromocode(state, promocode){
        if(promocode === 'test') {
          state.percent = 10
          state.sale = state.totalPrice / state.percent;
          state.totalPrice = state.totalPrice - state.sale;
          state.promocodeActivated = true
          if(state.promocodeError){
            state.promocodeError = false
          }
        }
        else{
          state.promocodeError = true
        }
      },
      setMobileCases (state, products) {
        state.mobileCases = products
      },
      setPines (state, pines) {
        state.pines = pines
      },
      setWrappers (state, wrappers) {
        state.wrappers = wrappers
      },
      setCuples (state, cuples) {
        state.cuples = cuples
      },
      setBracelets (state, bracelets) {
        state.bracelets = bracelets
      },
      setCollection (state, collection) {
        state.collection = collection
      },
      setDeliveryCities (state, deliveryCities, deliveryRegion) {
        state.deliveryCities = deliveryCities
        state.deliveryRegion = deliveryRegion
      },
      setDeliveryCity(state, datas) {
        state.deliveryCity = datas.value
        state.deliveryCities = null
        state.deliveryRegion = datas.data.region
      },
      setDeliveryStreets (state, deliveryStreets) {
        state.deliveryStreets = deliveryStreets
      },
      setDeliveryStreet (state, data) {
        state.deliveryStreet = data.data.street
        state.deliveryStreets = null
        console.log(data.data.street)
      }
    
    },
    actions: {
        async getMobileCases ({ commit }) {
          const products = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/cases?_embed&per_page=100')
          commit('setMobileCases', products.data)
        },
        async getCollection ({ commit }, options) {
          const collection = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/cases?_embed&per_page=100', options)
          commit('setCollection', collection.data.filter((item) => { return item.acf.collection === options.collectionName }))
        },
        async getPines ({ commit }) {
          const pines = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/pines?_embed&per_page=100')
          commit('setPines', pines.data)
        },
        async getWrappers ({ commit }) {
          const wrappers = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/wrappers?_embed&per_page=100')
          commit('setWrappers', wrappers.data)
        },
        async getCuples ({ commit }) {
          const cuples = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/cuples?_embed&per_page=100')
          commit('setCuples', cuples.data)
        },
        async getBracelets ({ commit }) {
          const bracelets = await axios.get('https://ne404.ru/admin/wp-json/wp/v2/bracelets?_embed&per_page=100')
          commit('setBracelets', bracelets.data)
        },
        async getDeliveryCities ({ commit }, params) {
           await this.$axios.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
            {
              query: params.city
            },
            {
              headers: {
                contentType: "application/json",
                Authorization: "Token d7ddbc18cd786871c68484922bd302052d4dfd5b"
              },
            }
          )
          .then((response) => { 
            commit('setDeliveryCities', response.data.suggestions, response.data.suggestions)
          });
        },  
        async getDeliveryStreets ({ commit }, params) {
          await this.$axios.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
           {
             query: params.street,
             locations: [{ region: this.state.deliveryRegion }]
           },
           {
             headers: {
               contentType: "application/json",
               Authorization: "Token d7ddbc18cd786871c68484922bd302052d4dfd5b"
             },
           }
         )
         .then((response) => { 
           commit('setDeliveryStreets', response.data.suggestions)
         });
       }  
    }
  })
}

export default createStore