<template>
  <div id="wrapper">
    <div class="signup container">
      <form @submit.prevent="signup" class="card-panel">
        <h2 class="center blue-grey-text">Signup</h2>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div class="field">
          <label for="username">Username: (max 8 characters)</label>
          <input type="text" name="username required" maxlength="8" v-model="username">
        </div>
        <p class="red-text center" v-if="feedback"> {{ feedback }} </p>
        <div class="field center">
          <button class="btn blue-grey">Signup</button>
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
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup() {
      if (this.username && this.email && this.password) {


        this.slug = slugify(this.username, {
          //replacement: '-',
          //remove: /[*+~.()'"!:@]/g, // no need for this yet
          //lower: false
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This username already exists"
          } else {

            ref.set({
                username: this.username
              })
              .then(() => {
                return firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              })
              .then(cred => {
                return ref.update({
                  user_id: cred.user.uid
                })
              })
              .then(() => {
                this.$router.push({
                  name: 'Index'
                })
              })
              .catch(err => {
                this.feedback = err.message
              })
            this.feedback = "This username is free to use"
          }
        })



      } else {
        this.feedback = "You must enter all fields"
      }
    }
  }
}
</script>

<style scoped>

#wrapper{
    background-image: url("https://images.unsplash.com/photo-1591965690751-664e6c285ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
    min-height: 100vh;
    background-size: cover;
}

.signup{
    padding-top: 10vh;
    max-width: 500px;
    
    
}
.btn{
    margin-top: 5vh;
    margin-bottom: 5vh;
    
}
.back{
      margin-top: 5vh;
      background-color: #607d8b;
      border-radius: 100%;
      opacity: 70%;
      transition: ease 500ms;
  }

  .back:hover{
      opacity: 100%;
      transition: ease 500ms;
  }

</style>