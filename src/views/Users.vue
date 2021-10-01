<template>
  <div class="app">
    <section class="app__wrapper">
      <div class="users">
        <h1 class="users__h1">Пользователи</h1>
        <table class="users__table">
          <thead>
          <tr class="users__table-row">
            <th class="users__table-th">Фото</th>
            <th class="users__table-th" @click="sort('name')">Имя</th>
            <th class="users__table-th" @click="sort('age')">Возраст </th>
            <th class="users__table-th" @click="sort('gender')">Пол</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in usersSort" :key="user.index" class="users__table-row">
            <td class="users__table-td"><img :src='user.picture.thumbnail' alt=""></td>
            <td class="users__table-td">{{ user.name.first }}</td>
            <td class="users__table-td">{{ user.dob.age }}</td>
            <td class="users__table-td">{{ user.gender }}</td>
          </tr>
          </tbody>
        </table>


      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Users",

  data: () => ({
    users: [],
    currentSort: '',
    currentSortDir: 'asc',

  }),
  created() {
    axios
        .get('https://randomuser.me/api/?results=5')
        .then(response => {
          this.users = response.data.results;
          return response;
        })
        .catch(error => {
          this.$emit('error')
          console.log(error)
        })
        .then(response => (console.log(response))
        );

  },
  computed: {
    usersSort () {
      return this.users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc')  mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      })
    },

  },
  methods: {
    sort (e) {
      if (e === this.currentSort) {
        this.currentSortDir =  this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    },
  },

}
</script>

<style scoped>

</style>