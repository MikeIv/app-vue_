<template>
<div class="notify">
  <h2 class="notify__h2">Уведомления</h2>
<ul class="notify__list">
  <li class="notify__item" v-for="message in messages" :key="message.title"><p>{{ message.title }}</p></li>
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