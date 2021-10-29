<template>
  <ul class="notify__list">
    <li class="notify__item" v-for="notify in notification" :key="notify.email"><p>{{ notify.name.first }}</p></li>
  </ul>
</template>

<script>

export default {
  name: "Notify",
  props: {
    notification: {
      type: Array,
      requered: true
    },
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>