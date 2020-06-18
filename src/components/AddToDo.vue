<template>

  <div class="navigaton">
    <Navbar />
    <div class="add-list container">
      <h2 class="blue-grey-text">Make a new TODO</h2>
      <form @submit.prevent="addToDo" autocomplete="off">
        <div class="field date">
          <label for="date">Date:</label>
          <input class="input" type="text" name="date" v-model="date">
        </div>
        <div v-for="(added, index) in list" :key="index" class="field">
          <label for="added">Added TODO</label>
          <input type="text" name="add-todo" v-model="list[index]">
          <i class="right material-icons delete-icon" @click="deleteAdded(list[index])">delete</i>

        </div>
        <div class="field add-todo">
          <label for="add-todo">Add TODO:</label>

          <input class="input" type="text" name="add-todo" @keydown.enter.prevent="addAnother" v-model="another">
          <i class="right add-btn material-icons" @click.prevent="addAnother">add</i>

        </div>

        <div class="field left-align">
          <!--Not happy with warning icon position check css-->
          <p v-if="feedback" class="red-text"><i class="warning small material-icons">warning</i> {{ feedback }} </p>

          <button class="btn blue-grey">Submit list</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'
import Navbar from '@/components/Navbar'
export default {
  name: 'AddToDo',
  components: {
    Navbar
  },
  data() {
    return {
      date: null,
      another: null,
      list: [],
      slug: null,
      feedback: null,
      createdBy: null

    }
  },
  methods: {
    addToDo() {
      if (this.date) {

        this.feedback = null
        this.slug = slugify(this.date, {
          replacement: '-',
          remove: /[*+~.()'"!:@]/g,
          lower: true
        })
        db.collection('lists').add({
          date: this.date,
          list: this.list,
          slug: this.slug,
          createdBy: this.createdBy
        }).then(() => {
          this.$router.push({
            name: 'Index'
          })
        })

      } else {
        this.feedback = "You have to specify a date..."
      }


    },
    addAnother() {
      if (this.another) {
        this.list.push(this.another)
        console.log(this.list)
        this.another = null
        this.feedback = null

      } else {
        this.feedback = 'You cannot add nothing to your list... lazy'
      }
    },
    deleteAdded(added) {
      //deletes everything with the same name in the list... fix
      this.list = this.list.filter(toDelete => {
        return toDelete != added
      })
    }
  },
  mounted() {


    let user = firebase.auth().currentUser



    db.collection('users').where('user_id', '==', user.uid).get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          this.createdBy = doc.data().username

        })
      })


  }
}
</script>

<style scoped>
    

    
    label{
        font-size: 1em;
        
    }
    h2{
        color:#424242;
        font-size: 2em;
    }
    .btn{
        margin-top: 10vh;
        margin-bottom: 10vh;
        color:white;

        
    }
    .add-btn{
        position: absolute;
        right: 1vw;
        cursor: pointer;
        
    }
    
    .field{
        position: relative;
    }
    .delete-icon{
        position: absolute;
        right: 1vw;
        cursor: pointer;
    }
    
    
    
    
</style>