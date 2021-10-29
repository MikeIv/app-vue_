<template>
  <div class="app">
    <section class="app__wrapper">
      <div class="notify">
        <h2 class="notify__h2">Уведомления</h2>
        <div class="notify__wrapper">
          <notify :notification="notification"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import notify from '@/components/Notify';
import axios from 'axios';

export default {
  name: 'Notification',
  components: {
    notify,
  },
  data: () => ({
    notification: [],
  }),
  mounted() {
    axios
        .get('https://randomuser.me/api/?results=8')
        .then((response) => {
          this.notification = response.data.results;
          console.log(this.notification);
          return response;
        })
        .catch((error) => {
          this.$emit('error');
          console.log(error);
        })
        .then((response) => console.log(response));
  },
};
</script>

<style scoped></style>
