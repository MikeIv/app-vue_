<template>
  <div class="app app__notfound">
    <div class="app__wrapper">
      <div class="app__header-top">
        <img alt="Vue logo" src="../assets/img/logo.png" class="app__logo">
        <h1 class="app__h1">{{ title }}</h1>
      </div>

      <!--   Первый блок   -->
      <section class="app__block">
        <h2 class="app__h2">Страница не найдена</h2>
        <h3 class="app__h3">Вернитесь пожалуйста на страницу <router-link to="/" class="header_app__item">Главная
        </router-link></h3>

      </section>
    </div>
  </div>
</template>

<script>
export default {
name: "404",
  data: () => ({
    title:'Страница не найдена'
  })
}
</script>

<style lang="scss">

.header_app .app__notfound {
  display: none;
}

</style>