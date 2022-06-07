<template>
  <div class="home">
    <home-city></home-city>
    <home-enter></home-enter>
  </div>
</template>

<script>
import HomeCity from '@/components/HomeCity.vue'
import HomeEnter from '@/components/HomeEnter.vue'
export default {
  name: 'HomeView',
  components: {
    HomeCity, HomeEnter, 
  }
}
</script>
