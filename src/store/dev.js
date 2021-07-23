export default {
  state: {
    message: 'Простой блок',
  //  cards
    cardList: [
      {
        id: 1,
        title: 'card 1',
        descr: 'титульная часть с указанием названия банка, города, почтового индекса, реквизитов',
        img: require('../assets/img/shop/001.jpg'),
        gallery: [
          { name: 'sl-1', img: require('../assets/img/shop/001.jpg') },
          { name: 'sl-2', img: require('../assets/img/shop/002.jpg') },
          { name: 'sl-3', img: require('../assets/img/shop/003.jpg') },
        ]
      },
      {
        id: 2,
        title: 'card 2',
        descr: 'указана дата и номер заявления, число и подпись заявителя',
        img: require('../assets/img/shop/004.jpg'),
        gallery: [
          { name: 'sl-1', img: require('../assets/img/shop/004.jpg') },
          { name: 'sl-2', img: require('../assets/img/shop/005.jpg') },
          { name: 'sl-3', img: require('../assets/img/shop/006.jpg') },
        ]
      },
      {
        id: 3,
        title: 'card 3',
        descr: 'выдает заявителю расписку о получении заявления с приложением документов',
        img: require('../assets/img/shop/007.png'),
        gallery: [
          { name: 'sl-1', img: require('../assets/img/shop/007.png') },
          { name: 'sl-2', img: require('../assets/img/shop/008.jpg') },
          { name: 'sl-3', img: require('../assets/img/shop/009.jpg') },
        ]
      },
      {
        id: 4,
        title: 'card 4',
        descr: 'уполномоченного подразделения в день обращения заявителя в уполномоченный орган',
        img: require('../assets/img/shop/010.jpg'),
        gallery: [
          { name: 'sl-1', img: require('../assets/img/shop/010.jpg') },
          { name: 'sl-2', img: require('../assets/img/shop/011.jpg') },
          { name: 'sl-3', img: require('../assets/img/shop/012.jpg') },
        ]
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
    },

  //  card
    getCard: (state) => (id) => {
      return state.cardList.find(item => item.id == id)
    }

  },

}

