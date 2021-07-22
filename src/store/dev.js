export default {
  state: {
    message: 'Простой блок',
  //  cards
    cardList: [
      {
        id: 1,
        title: 'card 1',
        descr: 'титульная часть с указанием названия банка, города, почтового индекса, реквизитов',
        img: require('../assets/img/shop/001.jpeg')
      }
    ]

  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    }

  //  cards

  },
  actions: {
    setMessage({commit}, payload) {
      commit('setMessage', payload)
    }

  //  cards

  },
  getters: {
    getMessage(state) {
      return state.message
    },

  //  cards
    getCardList(state) {
      return state.cardList
    }

  },

}

