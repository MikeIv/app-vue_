<template>
  <div class="dev__card">
    <div class="dev__card-cell">
      <img :src="item.img" :alt="item.title" class="dev__card-img">
      <div class="dev__card-descr">
        <h3 class="dev__card-h3">{{ item.title }}</h3>
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

<style scoped>

</style>