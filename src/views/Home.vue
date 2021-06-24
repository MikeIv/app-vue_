<template>
  <div class="app">
    <div class="app__wrapper">
      <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">

      <h1 class="app__h1">{{ title }}</h1>

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
