<template>
<div class="notify">
<ul class="notify__list">
  <li class="notify__item" v-for="message in messages">{{ title }}</li>
</ul>
</div>
</template>

<script>
export default {
  name: "Notify",
  props: {
    messages: {
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