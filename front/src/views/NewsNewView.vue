<template>
  <div>
    <p>뉴스 추가</p>
    <b-form @submit.prevent="newNews(region)">
      <b-form-input placeholder="search_region"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0"></b-button>
    </b-form>
  
  </div>
</template>

<script>
export default {
  name:'NewsNewView',
  data(){
    return{
      credentials:{
        region:'', // 관리자가 검색한 결과
        title:'',
        originallink:'',
        link:'',
        description:'',
        pubDate:'',
      }
    }
  }
}
</script>

<style>

</style>