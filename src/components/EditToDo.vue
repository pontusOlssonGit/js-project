<template>
  <div class="navigation">
    <Navbar />

    <div v-if="list" class="edit-todo container">
      <h2 class="blue-grey-text">Edit TODO-list for {{list.date}}</h2>

      <form @submit.prevent="editToDo" autocomplete="off">
        <div class="field date">
          <label for="date">Date:</label>
          <input class="input" type="text" name="date" v-model="list.date">
        </div>
        <div v-for="(added, index) in list.list" :key="index" class="field">
          <label for="added">Added TODO</label>
          <input type="text" name="add-todo" v-model="list.list[index]">
          <i class="right material-icons delete-icon" @click="deleteAdded(list.list[index])">delete</i>

        </div>
        <div class="field add-todo">
          <label for="add-todo">Add TODO:</label>

          <input class="input" type="text" name="add-todo" @keydown.enter.prevent="addAnother" v-model="another">
          <i class="right add-btn material-icons" @click.prevent="addAnother">add</i>

        </div>

        <div class="field left-align">
          <!--Not happy with warning icon position check css-->
          <p v-if="feedback" class="red-text"><i class="warning small material-icons">warning</i>{{ feedback }}</p>

          <button class="btn blue-grey">Update list</button>
          <!--Function for submit is at the top form tag-->
        </div>
      </form>


    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import Navbar from '@/components/Navbar'

export default {
  name: 'EditToDO',
  components: {
    Navbar
  },
  data() {
    return {
      list: null,
      another: null,
      feedback: null

    }
  },
  methods: {
    editToDo() {
      if (this.list.date) {
        this.feedback = null
        this.list.slug = slugify(this.list.date, {
          replacement: '-',
          remove: /[*+~.()'"!:@]/g,
          lower: true
        })
        db.collection('lists').doc(this.list.id).update({
          date: this.list.date,
          list: this.list.list,
          slug: this.list.slug
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
        this.list.list.push(this.another)
        this.another = null
        this.feedback = null

      } else {
        this.feedback = 'You cannot add nothing to your list... lazy'
      }
    },
    deleteAdded(added) {
      //deletes everything with the same name in the list... fix
      this.list.list = this.list.list.filter(toDelete => {
        return toDelete != added
      })
    }

  },
  created() {
    let ref = db.collection('lists').where('slug', '==', this.$route.params.todo_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.list = doc.data()
        this.list.id = doc.id

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
        margin-bottom: 5vh;
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