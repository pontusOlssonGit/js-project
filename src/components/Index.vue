<template>
  <div id="wrapper">
   <div class="row'">
      <Navbar /> 
      <div class="row">
    <div class="col s12 m6 l4" v-for="toDo in toDos" :key="toDo.id">
      <div class="card white darken-1">
        <div class="card-content">
          <i class="material-icons delete" @click="deleteList(toDo.id)">delete</i>
          
          <span class="card-title">Date: {{toDo.date}}</span>
          <ul class = "toDoList">
          <li v-for="(toD, index) in toDo.list" :key="index">
            <span class="chip">{{toD}}</span>
          </li>
        </ul>
        </div>
        <div class="card-action">
          <router-link :to="{ name: 'EditToDo', params: {todo_slug: toDo.slug}}">
          <a class="a-toggle">Edit</a>
           </router-link>
          
          
        </div>
      </div>
    </div>
    </div>
  </div>
  
    
</div>
</template>

<script>
import db from '@/firebase/init'
import Navbar from '@/components/Navbar'
export default {
  name: 'Index',
  components: {
    Navbar
  },
  data () {
    return {
      toDos: []
      
    }
  },
  methods:{
    deleteList(id){
      db.collection('lists').doc(id).delete()
      .then(() =>{
        this.toDos = this.toDos.filter(toDo =>{
        return toDo.id != id
      })
      })
      
    }
    
  },
  created(){
    db.collection('lists').get()
    .then(snapshot =>{
      snapshot.forEach(doc => {
        let list = doc.data()
        list.id = doc.id
        this.toDos.push(list)
        console.log(doc.data())
            
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrapper{
    background-image: url("https://images.unsplash.com/photo-1591965690751-664e6c285ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
    min-height: 100vh;
    background-size: cover;
}

.row{
  margin-top: 2rem;
}
.chip{
  display:grid;
  text-align: center;
  margin-right: 10vw;
  margin-left: 10vw;
  
  
}
.delete{
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  font-size: 2em;
}
.a-toggle{
  cursor: pointer;
}



</style>
