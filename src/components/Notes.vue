<template>
  <ul class="app__list">
    <li class="app__item-note"
        v-for="(note, index) in notes"
        :key="index"
        :class="{ width: !grid }"
    >
      <h3 class="app__item-title">{{ note.title }}</h3>
      <p class="app__item-txt">{{ note.descr }}</p>
      <p class="app__item-date">{{ now }}</p>

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
    },
    grid: {
      type: Boolean,
      requered: true
    }
  },
  methods: {
    removeNote (index) {
      console.log(`remove item id= ${index}`)
      this.$emit('remove', index)
    }
  },
  computed: {
    now () {
      return new Date().toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>