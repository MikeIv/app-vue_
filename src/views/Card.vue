<template>
  <div class="app__wrapper">
    <section class="dev__card">
      <h2 class="dev__h2">{{ card.title }}</h2>
      <div class="dev__card-content">

        <div class="dev__card-img-slider">
          <carousel
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8">
          <slide v-for="(slide, index) in card.gallery" :key="index"  >
            <img :src="slide.img" :alt="card.title" class="dev__card-item-img">
          </slide>
          </carousel>
        </div>

        <p class="dev__card-item-txt">{{ card.descr }}</p>
      </div>
    </section>

  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: "Card",
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    card: null
  }),
  created() {
    let id = this.$route.params.id
    this.card = this.$store.getters.getCard(id)
    console.log(this.card)
  }
}
</script>


<style lang="scss">
.dev__card-img-slider .VueCarousel {
  width: 20rem !important;
  height: 20rem;
}

</style>