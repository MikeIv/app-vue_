<template>
  <div class="dev__card-list">
    <div class="dev__card-cell">
      <img :src="item.img" :alt="item.title" class="dev__card-img">
      <div class="dev__card-descr">
        <router-link :to="/dev/ + item.id" class="dev__card-h3">{{ item.title }}</router-link>
        <p class="dev__card-txt">{{ item.descr }}</p>
      </div>
    </div>
  </div>

</template>



<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>