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
      popsockets: [],
      cuples: [],
      wrappers: [],
      brelocks: [],
      brelock: '',
      wrapper: '',
      bracelets: [],
      hits: [],
      deliveryCities:null,
      deliveryCity: null,
      deliveryRegion: null,
      deliveryStreets: null,
      deliveryStreet: null,
      deliveryIndex: null,
      models: [
        
        'IPhone 7',
        'IPhone 8',
        'IPhone 7 plus',
        'IPhone 8 Plus', 
        'IPhone X',
        'IPhone XS',
        'IPhone XS MAX',
        'IPhone XR',
        'IPhone 11',
        'IPhone 11pro',
        'IPhone 11pro max',
        'IPhone 12',
        'IPhone 12pro',
        'IPhone 12pro max',
        'IPhone 12 mini',
        'IPhone 13',
        'IPhone 13 pro',
        'IPhone 13 pro max',
        'IPhone 13 mini',
        'IPhone 14',
        'IPhone 14 pro',
        'IPhone 14 pro max'
      ]
    },
   mutations: {
      setCart (state) {
        if (localStorage.getItem('cart')) {
          state.cart = JSON.parse(localStorage.getItem('cart'));
          state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
        }
      },
      // addToCart(state, product) {
      //   if(state.cart.length){ 
      //     let isExists = false
      //     state.cart.map(function(item) { 
      //       if( item.id === product.id) { 
      //         isExists = true}
      //       return item })
      //     if (!isExists) {
      //       state.cart.push(product)
      //       state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
      //     }
      //    }
      //   else{
      //     state.cart.push(product);
      //     state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
      //   } 
      //   localStorage.setItem('cart', JSON.stringify(state.cart));
      // },
      addToCart(state, product) {
        state.cart.push(product);
        state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0)
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      minusOne(state, item){
        localStorage.setItem('cart', JSON.stringify(state.cart));
        if(item.quantity  > 1)
        {
          item.quantity = item.quantity  - 1;
          item.price =  item.price - item.price_count;
          state.totalPrice = state.totalPrice - item.price_count;
          localStorage.setItem('cart', JSON.stringify(state.cart));
        }
      },
      plusOne(state, item){
        item.quantity++;
        item.price = item.price_count + item.price;
        state.totalPrice = state.cart.map(item => item.price).reduce(function(sum, current) { return sum + current }, 0);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      changeDelPrice(state, price) {
        state.delPrice = price
      },
      deleteProduct( state, payload){
        state.cart.splice(payload.id, 1);
        state.totalPrice = state.totalPrice - payload.product.price
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      usePromocode(state, promocode){
        if(promocode === 'MYOSS10') {
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
      setBrelocks (state, brelocks) {
        state.brelocks = brelocks
      },
      setBrelock (state, brelock) {
        state.brelock = brelock
      },
      setPopsockets (state, popsockets) {
        state.popsockets = popsockets
      },
      setWrappers (state, wrappers) {
        state.wrappers = wrappers
      },
      setWrapper (state, wrapper) {
        state.wrapper = wrapper
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
      setHits (state, hits) {
        state.hits = hits
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
      },
      setDeliveryIndex (state, index) {
        state.deliveryIndex = index
      }
    
    },
    actions: {
        async getMobileCases ({ commit }) {
          const products = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cases?_embed&per_page=100')
          commit('setMobileCases', products.data)
        },
        async getCollection ({ commit }, options) {
          const collection = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cases?_embed&per_page=100', options)
          commit('setCollection', collection.data.filter((item) => { return item.acf.collection === options.collectionName }))
        },
        async getHits ({ commit }) {
          const hits = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cases?_embed&per_page=100')
          commit('setHits', hits.data.filter((item) => { return item.acf.hit === true }))
        },
        async getPines ({ commit }) {
          const pines = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/pines?_embed&per_page=100')
          commit('setPines', pines.data)
        },
        async getBrelocks ({ commit }) {
          const brelocks = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/brelocks?_embed&per_page=100')
          commit('setBrelocks', brelocks.data)
        },
        async getBrelock ({ commit }, id) {
          const brelocks = await axios.get(`https://myossetia.ru/admin/wp-json/wp/v2/brelocks/${id}`, id)
          commit('setBrelock', brelocks.data)
        },
        async getPopsockets ({ commit }) {
          const popsockets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/popsockets?_embed&per_page=100')
          commit('setPopsockets', popsockets.data)
        },
        async getWrappers ({ commit }) {
          const wrappers = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/wrappers?_embed&per_page=100')
          commit('setWrappers', wrappers.data.filter((item) => { return item.acf.material === 'Кожа' }))
        },
        async getWrapper ({ commit }, id) {
          const wrappers = await axios.get(`https://myossetia.ru/admin/wp-json/wp/v2/wrappers/${id}`, id)
          commit('setWrapper', wrappers.data)
        },
        async changeMaterial ({ commit }, material) {
          const wrappers = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/wrappers?_embed&per_page=100', material)
          commit('setWrappers', wrappers.data.filter((item) => { return item.acf.material === material }))
        },
        async getCuples ({ commit }) {
          const cuples = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cuples?_embed&per_page=100')
          commit('setCuples', cuples.data)
        },
        async getBracelets ({ commit }) {
          const bracelets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/bracelets?_embed&per_page=100')
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
           commit('setDeliveryIndex', response.data.suggestions[0].data.postal_code)
           console.log(response.data.suggestions[0].data.postal_code
            )
         });
       }  
    }
  })
}

export default createStore