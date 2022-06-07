<template>
  <div>
    <p>뉴스모드 홈 시티부분</p>
    <home-city-item
    v-for="news in homecitynews"
    :key="news.id"
    :news = "news"
    ></home-city-item>
  </div>
</template>

<script>
import HomeCityItem from '@/components/HomeCityItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'HomeCity',
  components: {HomeCityItem},
  methods:{
    ...mapActions(['fetchcitynews'])
  },
  computed:{
    ...mapGetters(['homecitynews',])
  },
  created() {
    this.fetchcitynews()
  }
}
</script>

<style>

</style>