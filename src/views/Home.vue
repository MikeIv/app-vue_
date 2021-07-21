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
        <div class="app__row-block">
          <div class="app__row">
            <p class="app__txt">{{ text }}</p>
          </div>
          <div class="app__row">
            <p class="app__txt">{{ textLower }}</p>
          </div>
          <div class="app__row">
            <p class="app__txt">{{ toLower }}</p>
          </div>
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
            <message v-if="message" :message="message" />
          </div>

          <newNote :note="note" @addItem="addNote"/>
        </div>

        <!--    Title Filter Style    -->
        <div class="app__h-row">
          <h2 class="app__h-row-h2">{{ titlenotes }}</h2>

          <search :value="search" @search="search = $event" />

          <!-- toggle -->
          <div class="app__h-row-toggle">
            <div class="app__icon-cell" :class="{ active: grid }" @click="grid = true">
              <svg class="app__item-icon" role="button">
                <use xlink:href="#icon-blocks"></use>
              </svg>
            </div>
            <div class="app__icon-cell" :class="{ active: !grid }" @click="grid = false">
              <svg class="app__item-icon" role="button">
                <use xlink:href="#icon-menu"></use>
              </svg>
            </div>

          </div>
        </div>

        <!--    list of notes    -->
        <notes :notes="notesFilter" @remove="removeNote" :grid="grid"/>

      </section>
      <!--   ===========   -->

      <!--   Modals модальные окна   -->
      <section class="app__block">
        <h2 class="v-hidden">Раздел модальных окон</h2>
        <div class="app__btn-wrap">
          <button class="app__modal-btn" @click="modalOne = !modalOne">Открыть</button>
          <button class="app__modal-btn" @click="modalTwo.show = !modalTwo.show">Форма</button>
          <button class="app__modal-btn" @click="modalValidate = !modalValidate">Форма +</button>
        </div>

        <!--   Первое модальное окно     -->
        <modal :modal="modal"
               v-show="modalOne"
               @close="modalOne = false"
        >
          <div class="app__modal-slot" slot="content">
            <h3 class="app__modal-h3">Новый контент</h3>
            <button class="app__modal-btn" @click="modalOne = !modalOne">Закрыть</button>
          </div>
        </modal>

        <!--   Второе модальное окно     -->
        <modal :modal="modal"
               v-show="modalTwo.show"
               @close="modalTwo.show = false"
               title="Форма обратной связи"
        >
          <div class="app__modal-slot" slot="content">
            <h3 class="app__modal-h3">Форма обратной связи</h3>
            <form class="app__modal-form" @submit.prevent="submit">

              <label class="app__modal-label">Имя</label>
              <input type="text" class="app__modal-input" v-model="modalTwo.name">

              <label class="app__modal-label">E-mail</label>
              <input type="text" class="app__modal-input" v-model="modalTwo.email">

              <button class="app__modal-btn">Отправить</button>
            </form>
          </div>
        </modal>

        <!--   Модальное окно с валидацией    -->

        <modalvalidate v-show="modalValidate" @close="modalValidate = false" />


      </section>
      <!--   ===========   -->

    </div>
  </div>
</template>





<script>
// @ is an alias to /src

import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'
import modal from '@/components/Modal.vue'
import modalvalidate from '@/components/ModalValidate.vue'


export default {
  name: 'Home',
  components: {
    message,
    newNote,
    notes,
    search,
    modal,
    modalvalidate,
  },
  data: () => ({
    title: 'Проект на Vue',
    titlenotes: 'Заметки',
    text: '',
    textLower: '',

    //  block 2
    title2: 'v-if',
    content: 'Содержание',
    showContent: false,

    // block 3 Notes
    titleNotes: 'Заметки',
    search: '',
    message: null,
    grid: true,
    note: {
      title: '',
      descr: '',
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
    ],

    // Modal
    modal: {
      title: 'Модальное окно',
    },
    modalOne: false,
    modalTwo: {
      show: false,
      name: '',
      email: '',
    },
    modalValidate: false,

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
    },

    removeNote (index) {
      this.notes.splice(index, 1)
    },

    //  Modal
    submit () {
      console.log({
        name: this.modalTwo.name,
        email: this.modalTwo.email,
      })
      this.modalTwo.name = ''
      this.modalTwo.email = ''
      this.modalTwo.show = false
    },
  },
  computed: {
    toLower () {
      return this.text.toLowerCase()
    },

    //  App
    notesFilter () {
      let array = this.notes,
          search = this.search
      if (!search) return array

      //  Убираем пробелы и заглавные буквы
      search = search.trim().toLowerCase()
      //  Filter
      array = array.filter(function (item)
      {
        if(item.title.toLowerCase().indexOf(search) !== -1 ){
          return item
        }
      })
      //  Error
      return array

    },
  }

}


</script>
