<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide><img src="../assets/imgs/1369025_192645024000_2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/imgs/8800276_184927469000_2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/imgs/a7691515_s.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop:true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    },
    components:{
        swiper,swiperSlide
    }
  }
</script>


<style>
</style>
