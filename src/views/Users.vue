<template>
  <div class="app">
    <section class="app__wrapper">
      <div class="users">
        <h1 class="users__h1">Пользователи</h1>
        <table class="users__table">
          <thead>
          <tr class="users__table-row">
            <th class="users__table-th">Имя</th>
            <th class="users__table-th">Счет </th>
            <th class="users__table-th">Пол</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.id" class="users__table-row">
            <td class="users__table-td">{{ user.name }}</td>
            <td class="users__table-td">{{ user.count }}</td>
            <td class="users__table-td">{{ user.gender }}</td>
          </tr>
          </tbody>
        </table>

        <div class="">{{ users }}</div>
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
        .get('https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie&name[]=anna')
        .then(response => (this.users = response.data));

    console.log(this.users)
  }
  // created() {
  //   axios
  //       .post('https://api.myjson.com/bins/rzgya')
  //       .then(response => {
  //         console.log(response)
  //       })
  //   // this.users =[
  //   //   { id: 1, name: 'Anna', age: 33, gender : 'female' },
  //   //   { id: 2, name: 'Olya', age: 48, gender : 'female' }
  //   // ]
  // }
}
</script>

<style scoped>

</style>