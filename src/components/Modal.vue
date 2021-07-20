<template>
  <transition name="modal">
    <section class="app__modal-wrapper" @click="$emit('close')">
      <div class="app__modal-content" @click.stop="">
        <header class="app__modal-header">
          <h2 class="app__modal-h2">{{ modal.title }}</h2>
        </header>

        <div class="app__modal-close" @click="$emit('close')">
          <svg class="app__icon" role="button">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>

        <div class="app__modal-list">
          <slot name="content">Содержимое окна</slot>
        </div>

      </div>

    </section>
  </transition>
</template>

<script>
export default {
name: "Modal",
  props: {
    modal: {
      type: Object,
      requered: true
    },
  },
  mounted() {
  document.body.addEventListener('keyup', e => {
    if(e.keyCode === 27) this.$emit('close')
  })
  }
}
</script>

<style lang="scss" scoped>

// Animation
.modal-enter, .modal-leave-active {
  opacity: 0;
}

.modal-enter .app__modal-content,
.modal-leave-active .app__modal-content {
  transform: scale(1.2);
}


</style>