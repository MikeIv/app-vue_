<template>
<div class="app__search">
  <input type="text" class="app__search-input" placeholder="Поиск" v-model="search">
</div>
</template>

<script>
export default {
name: "Search",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
  return { search: this.value }
  },
  watch: {
  search(val) {
    this.$emit('search', val)
    console.log(val)
  }
  }
}
</script>

<style scoped lang="scss">

</style>