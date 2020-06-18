<template>

  <div class="container">
    <div class="row center">
      <div class="col s12 m12 lg12">

        <span class="nav-title blue-grey-text title">TODO</span>
        <span class="nav-title blue-grey-text"><i class=" medium material-icons">storage</i></span>
      </div>
      <div class="col s12 m6 lg6 offset-lg-3 offset-m3">
        <h4 class="light">Login in or signup below to start making todo-lists</h4>
      </div>
    </div>
    <div class="row center">
      <router-link :to="{name: 'Login'}">
        <a href="" id="login-btn" class="btn-large waves-effect waves-light blue-grey">Login</a>
      </router-link>
      <router-link :to="{name: 'Signup'}">
        <a href="" id="signup-btn" class="btn-large waves-effect waves-light blue-grey">Signup</a>
      </router-link>
    </div>
    <div class="row center"><a>© Pontus</a></div>

  </div>

</template>

<script>
  export default {
      

  }
</script>

<style scoped>

    .container{
        margin-top: 15vh;
    }

    .title{
        font-size: 6rem;
    }

</style>
