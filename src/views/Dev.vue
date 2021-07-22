<template>
  <div class="app">
    <div class="app__wrapper">
      <div class="app__header-top">
        <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">
        <h1 class="app__h1">{{ title }}</h1>
      </div>

      <!--   Первый блок   -->
      <section class="app__block">
        <h2 class="app__h2"> {{ getMessage }}</h2>
        <input class="app__input" type="text"
               v-model="message"
        >
        <button class="app__btn" @click="setMessage">Сообщение</button>
      </section>

      <!--   Блок карточек>   -->
      <section class="app__block dev__block">
        <h2 class="app__h2"> {{ devhead }}</h2>

        <cardItem />

      </section>
    </div>
  </div>
</template>

<script>

import cardItem from '@/components/CardItem.vue'

export default {
  name: "Dev",

  components: {
    cardItem
  },
  data: () => ({
    title: 'Раздел 1',
    devhead: 'Карточки',
    message: null,

  //  Cards
    cardList: null,

  }),
  computed: {
    getMessage () {
      return this.$store.getters.getMessage
    },
    getCardList() {
      this.cardList = this.$store.getters.cardList

    }
  },
  methods: {
    setMessage () {
      this.$store.dispatch('setMessage', this.message)
    }
  },

  created() {
    this.cardList = this.$store.getters.getCardList
    console.log(this.cardList)
  }

}
</script>

<style lang="scss">

</style>