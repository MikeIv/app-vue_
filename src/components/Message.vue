<template>
  <div class="message__wrapper">
    <h3 class="app__h3"><span class="app__h3--gray">Предупреждение:</span> * {{ message }} *</h3>
  </div>

</template>

<script>
export default {
  name: "Message",

  props: {
    message: {
      type: String,
      requered: true
    }

  }
}

</script>




<style lang="scss" scoped>

.message__wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
}


</style>