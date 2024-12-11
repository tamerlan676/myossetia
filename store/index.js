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
      promocodeMessage: 'Без промокода',
      promocodeError: false,
      mobileCases: [],
      collection: [],
      articles: [],
      pines: [],
      popsockets: [],
      cuples: [],
      wrappers: [],
      brelocks: [],
      brelock: '',
      magnets: [],
      magnet: '',
      wrapper: '',
      bracelets: [],
      cards: [],
      hits: [],
      posters: [],
      termosi: [],
      deliveryCities:null,
      deliveryCity: null,
      deliveryRegion: null,
      deliveryStreets: null,
      deliveryStreet: null,
      deliveryIndex: null,
      airpods: [],
      airpodsModels: [
        'AirPods 1',
        'AirPods 2',
        'AirPods 3',
        'AirPods Pro',
        'AirPods Pro 2'
      ],
      models: [
        'IPhone 11',
        'IPhone 11 pro',
        'IPhone 11 pro max',
        'IPhone 12',
        'IPhone 12 pro',
        'IPhone 12 pro max',
        'IPhone 12 mini',
        'IPhone 13',
        'IPhone 13 pro',
        'IPhone 13 pro max',
        'IPhone 13 mini',
        'IPhone 14',
        'IPhone 14 pro',
        'IPhone 14 pro max',
        'IPhone 15',
        'IPhone 15 pro',
        'IPhone 15 pro max',
        'IPhone 16',
        'IPhone 16 pro',
        'IPhone 16 pro max',
      ],
      posterSizes: ['10*15-600руб','15*20-800руб','21*30-1400руб','30*40-2000руб']
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
        if(promocode === 'MYOSSETIA10') {
          state.percent = 10
          state.sale = state.totalPrice / state.percent;
          state.totalPrice = Math.round(state.totalPrice - state.sale);
          state.promocodeActivated = true
          state.promocodeMessage = 'ИСПОЛЬЗОВАН'
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
      setAirPods (state, products) {
        state.airpods = products
      },
      setPosters (state, products) {
        state.posters = products
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
      setMagnets (state, magnets) {
        state.magnets = magnets
      },
      setMagnet (state, magnet) {
        state.magnet = magnet
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
      setCards (state, cards) {
        state.cards = cards
      },
      setBracelets (state, bracelets) {
        state.bracelets = bracelets
      },
      setTermoses (state, termosi) {
        state.termosi = termosi
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
      setArticles (state, articles) {
        state.articles = articles
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
        async getAirPods ({ commit }) {
          const products = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/pods-cases?_embed&per_page=100')
          commit('setAirPods', products.data)
        },
        async getPosters ({ commit }) {
          const products = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/posters?_embed&per_page=100')
          commit('setPosters', products.data)
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
        async getCards ({ commit }) {
          const pines = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cards?_embed&per_page=100')
          commit('setCards', pines.data)
        },
        async getBrelocks ({ commit }) {
          const brelocks = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/brelocks?_embed&per_page=100')
          commit('setBrelocks',  brelocks.data.filter((item) => { return item.acf.material === 'Метал' }))
        },
        async getBrelock ({ commit }, id) {
          const brelocks = await axios.get(`https://myossetia.ru/admin/wp-json/wp/v2/brelocks/${id}`, id)
          commit('setBrelock', brelocks.data)
        },
        async getMagnets ({ commit }) {
          const magnets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/magnets?_embed&per_page=100')
          commit('setMagnets',  magnets.data.filter((item) => { return item.acf.material === 'Виниловые' }))
        },
        async getMagnet ({ commit }, id) {
          const magnets = await axios.get(`https://myossetia.ru/admin/wp-json/wp/v2/magnets/${id}`, id)
          commit('setMagnet', magnets.data)
        },
        async getPopsockets ({ commit }) {
          const popsockets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/popsockets?_embed&per_page=100')
          commit('setPopsockets', popsockets.data)
        },
        async getArticles ({ commit }) {
          const articles = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/articles?_embed&per_page=100')
          commit('setArticles', articles.data)
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
        async changeBrelocksMaterial ({ commit }, material) {
          const brelocks = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/brelocks?_embed&per_page=100', material)
          commit('setBrelocks', brelocks.data.filter((item) => { return item.acf.material === material }))
        },
        async changeMagnetsMaterial ({ commit }, material) {
          const magnets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/magnets?_embed&per_page=100', material)
          commit('setMagnets', magnets.data.filter((item) => { return item.acf.material === material }))
        },
        async getCuples ({ commit }) {
          const cuples = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/cuples?_embed&per_page=100')
          commit('setCuples', cuples.data)
        },
        async getBracelets ({ commit }) {
          const bracelets = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/bracelets?_embed&per_page=100')
          commit('setBracelets', bracelets.data)
        },
        async getTermoses ({ commit }) {
          const termosi = await axios.get('https://myossetia.ru/admin/wp-json/wp/v2/termosi?_embed&per_page=100')
          commit('setTermoses', termosi.data)
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