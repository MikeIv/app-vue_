<template>
  <div class="app">
    <div class="app__wrapper">
      <div class="app__header-top">
        <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">
        <h1 class="app__h1">{{ title }}</h1>
      </div>

      <section class="app__block">
        <h2 class="v-hidden">Простой блок</h2>
        <div class="app__row">
          <p class="app__txt">{{ text }}</p>
        </div>
        <div class="app__row">
          <p class="app__txt">{{ textLower }}</p>
        </div>
        <div class="app__row">
          <p class="app__txt">{{ toLower }}</p>
        </div>
        <input v-model="text" type="text" class="app__input">

        <button class="app__btn" @click="getText">Получить</button>
        <button class="app__btn" @click="getLowerText">Нижний регистр</button>
      </section>

      <section class="app__block">
        <h2 class="v-hidden">Простой блок</h2>
        <div class="app__part">
          <button class="app__btn" @click="showContent = !showContent">Показать блок</button>
          <div v-if="showContent" class="app__row">
            <p class="app__txt">{{ content }}</p>
          </div>
        </div>

      </section>

    </div>
  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    title: 'Проект на Vue',
    text: '',
    textLower: '',

  //  block 2
    title2: 'v-if',
    content: 'Содержание',
    showContent: false

  }),
  methods: {
    getText () {
      console.log('проверка' + this.text)
      console.log(`значение текста ${this.text}`)
    },
    getLowerText () {
      this.textLower = this.text.toLowerCase()
    }
  },
  computed: {
    toLower () {
      return this.text.toLowerCase()
    }
  }


}
</script>
