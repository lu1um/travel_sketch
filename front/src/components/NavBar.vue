<template>
  <div class="nav-bar">
    <b-navbar class="d-flex justify-content-between" type="dark">
      <b-navbar-brand href="#">
          <img src="@/assets/logo.png" alt="logo" class="navimg d-inline-block align-top">
      </b-navbar-brand>

      <b-navbar-nav class="navsearch ml-auto">
        <form class="search-form d-flex">
          <b-form-input class="mr-sm-2" placeholder="i wanna go trip ! (제목, 글쓴이, 태그검색)"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </form>
      </b-navbar-nav>

      <b-navbar-nav class="newarticle">
        <router-link to="/article/new">
          <div>나만의 여행 시작하기!</div>
          <div>let's sketch my travel</div>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scope>
.nav-bar{
  list-style:none;
}
.navimg{
  width: 100px;
}

.newarticle{
  padding: 1rem;
  border-style: solid;
  border-radius: 2rem;
}

.newarticle div {
  padding-left: 1rem;
}

.search-form input {
  width: 500px;
  margin-right: 10px;
}

</style>