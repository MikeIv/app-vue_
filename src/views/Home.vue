<template>
  <div class="app">
    <div class="app__wrapper">
      <div class="app__header-top">
        <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">
        <h1 class="app__h1">{{ title }}</h1>
      </div>

      <!--   Первый блок   -->
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
      <!--   ===========   -->

      <!--   Второй блок   -->
      <section class="app__block">
        <h2 class="v-hidden">Простой блок</h2>
        <div class="app__part">
          <button class="app__btn" @click="getContent">Показать блок</button>
          <div v-if="showContent" class="app__row">
            <p class="app__txt">{{ content }}</p>
          </div>
        </div>
      </section>
      <!--   ===========   -->

      <!--   App блок   -->
      <section class="app__block app__block--width">
        <h2 class="v-hidden">Простой блок</h2>
        <h2 class="app__h1">{{ titleNotes }}</h2>

        <!--    add note    -->
        <div class="app__item-add">
          <div class="app__txt-row">
            <h3 class="app__h3">{{ message }}</h3>
          </div>
          <input v-model="note.title" type="text" class="app__item-input">
          <textarea v-model="note.descr" class="app__item-textarea"></textarea>
          <button @click="addNote" class="app__add-item-btn">Добавить заметку</button>
        </div>

        <!--    list of notes    -->
        <ul class="app__list">
          <li class="app__item-note" v-for="(note, index) in notes" :key="index">
            <h3 class="app__item-title">{{ note.title }}</h3>
            <p class="app__item-txt">{{ note.descr }}</p>
            <p class="app__item-date">{{ note.date }}</p>

          </li>
        </ul>

      </section>
      <!--   ===========   -->

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
    showContent: false,

    // block 3 Notes
    titleNotes: 'Заметки',
    message: null,
    note: {
      title: '',
      descr: ''
    },
    notes: [
      {
        title: 'Заголовок №1',
        descr: 'Содержание заметки',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Заголовок №2',
        descr: 'Содержание заметки',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Заголовок №3',
        descr: 'Содержание заметки',
        date: new Date(Date.now()).toLocaleString()
      }
    ]

  }),
  methods: {
    getText () {
      console.log('проверка' + this.text)
      console.log(`значение текста ${this.text}`)
    },
    getLowerText () {
      this.textLower = this.text.toLowerCase()
    },

    //  block2
    getContent () {
      this.showContent = !this.showContent
    },

    //  App
    addNote () {
      console.log(this.note)

      let {title, descr} = this.note

      if(title === '') {
        this.message = 'Напишите название заголовка'
        return false
      }

      this.notes.push ({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      })
      this.message = null
      this.note.title = ''
      this.note.descr = ''
    }
  },
  computed: {
    toLower () {
      return this.text.toLowerCase()
    }
  }

}


</script>
