<template>
  <div style="margin-top: 100px;">
    <article-form
      :payload="{ title: '', content: '' }"
      :method="method"
    ></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
export default {
  name:'ArticleNewView',
  components: {ArticleForm},
}
</script>

<style>

</style>