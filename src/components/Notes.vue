<template>
  <ul class="app__list">
    <li class="app__item-note" v-for="(note, index) in notes" :key="index">
      <h3 class="app__item-title">{{ note.title }}</h3>
      <p class="app__item-txt">{{ note.descr }}</p>
      <p class="app__item-date">{{ note.date }}</p>

      <div class="app__item-close" @click="removeNote(index)">
        <svg class="app__icon" role="button">
          <use xlink:href="#icon-close"></use>
        </svg>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Notes",
  props: {
    notes: {
      type: Array,
      requered: true
    }
  },
  methods: {
    removeNote (index) {
      console.log(`remove item id= ${index}`)
      this.$emit('remove', index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>