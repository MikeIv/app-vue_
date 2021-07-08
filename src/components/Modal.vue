<template>
  <section class="app__modal-wrapper">
    <div class="app__modal-content">
      <header class="app__modal-header">
        <h2 class="app__modal-h2">{{ modal.title }}</h2>
      </header>

      <div class="app__modal-main"></div>

    </div>

  </section>
</template>

<script>
export default {
name: "Modal",
  props: {
    modal: {
      type: Object,
      requered: true
    },
  }
}
</script>

<style lang="scss" scoped>

</style>