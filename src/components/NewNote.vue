<template>
  <div class="add-note__wrapper">
    <label class="app__item-label">Заголовок</label>
    <input v-model="note.title" type="text" class="app__item-input" placeholder="Заголовок">
    <label class="app__item-label">Содержание заметки</label>
    <textarea v-model="note.descr" class="app__item-textarea"></textarea>
    <button @click="addNote" class="app__add-item-btn">Добавить заметку</button>
  </div>

</template>

<script>
export default {
  name: "NewNote",

  props: {
    note: {
      type: Object,
      requered: true
    }
  },
  methods: {
    addNote () {
      this.$emit('addItem', this.note)
    }
  }
}
</script>



<style lang="scss" scoped>

.add-note__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
  box-sizing: border-box;

  border-bottom: 1px solid $gray;
}

</style>