<template>
  <div class="app">
    <section class="app__wrapper">
      <div class="users">
        <h1 class="users__h1">Пользователи</h1>
        <table class="users__table">
          <thead>
          <tr class="users__table-row">
            <th class="users__table-th">Фото</th>
            <th class="users__table-th">Имя</th>
            <th class="users__table-th">Возраст </th>
            <th class="users__table-th">Пол</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.index" class="users__table-row">
            <td class="users__table-td"><img :src='user.picture.thumbnail' alt=""></td>
            <td class="users__table-td">{{ user.name.first }}</td>
            <td class="users__table-td">{{ user.dob.age }}</td>
            <td class="users__table-td">{{ user.gender }}</td>
          </tr>
          </tbody>
        </table>

        <div class="data">{{ users }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Users",

  data: () => ({
    users: []

  }),
  mounted() {
    axios
        .get('https://randomuser.me/api/?results=5')
        .then(response => (this.users = response.data.results));
  },

}
</script>

<style scoped>

</style>