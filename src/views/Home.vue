<template>
  <div class="app">
    <div class="app__wrapper">
      <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">

      <h1 class="app__h1">{{ title }}</h1>

      <section class="app__block">
        <h2 class="v-hidden">Простой блок</h2>
        <input type="text" class="app__input">

      </section>

    </div>
  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    title: 'Проект на Vue',

  })


}
</script>
