<template>
  <div id="app">
    <header id="nav" class="header_app">
      <nav class="header_app__list" v-for="link in links" :key="link.title">
        <router-link :to="link.url" :title="link.title" class="header_app__item">{{ link.title }}</router-link>
      </nav>
    </header>

    <router-view/>

  </div>
</template>


<script>
  export default {
    data: () => ({
      links: [
        { title: 'Главная', url: '/' },
        { title: 'Приложение', url: '/dev' },
        { title: 'Пользователи', url: '/users' },
      ]
    })
  }
</script>



<style lang="scss">

#nav {

  .header_app__item {

    font-size: 1.6rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    outline: none;


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
