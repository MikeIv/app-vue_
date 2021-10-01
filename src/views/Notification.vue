<template>
  <div class="app">
    <section class="app__wrapper">
      <notify :messages="messages" />
    </section>
  </div>
</template>

<script>
import  notify from '@/components/Notify.vue'

export default {
  name: "Notification",
  components: {
    notify
  },
  data: () => ({
    messages: [
      { title: 'message 1' },
      { title: 'message 2' },
      { title: 'message 3' },
    ]
  }),
}
</script>

<style scoped>

</style>