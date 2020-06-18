<template>
  <div id="wrapper">
    <div class="login container">
      <form @submit.prevent="login" class="card-panel">
        <h2 class="center blue-grey-text">Login</h2>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password">
        </div>

        <p v-if="feedback" class="red-text center">{{ feedback }}</p>

        <div class="field center">

          <button class="btn blue-grey">Login</button>
        </div>

      </form>

      <div class="field center">
        <router-link :to="{name: 'LogSign'}">
          <i class="large material-icons white-text back">arrow_back</i>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
        feedback: null
      }
    },
    methods: {
      login() {
        if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              this.$router.push({
                name: 'Index'
              })

            }).catch(err => {
              this.feedback = err.message
            })

          this.feedback = null

        } else {
          this.feedback = "Please fill in all the fields"
        }

      }

    }

  }

</script>

<style scoped>
  #wrapper {
    background-image: url("https://images.unsplash.com/photo-1591965690751-664e6c285ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
    min-height: 100vh;
    background-size: cover;
  }

  .login {
    padding-top: 10vh;
    max-width: 500px;


  }

  .btn {
    margin-top: 5vh;
    margin-bottom: 5vh;

  }

  .back {
    margin-top: 5vh;
    background-color: #607d8b;
    border-radius: 100%;
    opacity: 70%;
    transition: ease 500ms;
  }

  .back:hover {
    opacity: 100%;
    transition: ease 500ms;
  }

</style>
