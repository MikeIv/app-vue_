<template>
<div class="app">
  <section class="app__wrapper">
    <div class="users">
      <h1 class="users__h1">Пользователи</h1>
      <table class="users__table">
        <thead>
        <tr>
          <th class="users__table-th">Имя</th>
          <th class="users__table-th">Возраст</th>
          <th class="users__table-th">Пол</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="users__table-td">Анна</td>
          <td class="users__table-td">33</td>
          <td class="users__table-td">женский</td>
        </tr>
        <tr>
          <td class="users__table-td">Оля</td>
          <td class="users__table-td">43</td>
          <td class="users__table-td">женский</td>
        </tr>

        </tbody>
      </table>

    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Users",

  data: () => ({
    users: [
      { id: 1, name: 'Anna', age: 33, gender : 'female' },
      { id: 1, name: 'Olya', age: 43, gender : 'female' }
    ]

  }),
}
</script>

<style scoped>

</style>