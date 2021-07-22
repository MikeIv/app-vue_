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
      },
      {
        id: 2,
        title: 'card 2',
        descr: 'указана дата и номер заявления, число и подпись заявителя',
        img: require('../assets/img/shop/002.jpeg')
      },
      {
        id: 3,
        title: 'card 3',
        descr: 'выдает заявителю расписку о получении заявления с приложением документов',
        img: require('../assets/img/shop/003.jpeg')
      },
      {
        id: 4,
        title: 'card 4',
        descr: 'уполномоченного подразделения в день обращения заявителя в уполномоченный орган',
        img: require('../assets/img/shop/004.jpeg')
      },
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

