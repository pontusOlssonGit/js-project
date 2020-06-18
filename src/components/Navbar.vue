<template>
    <div class="navbar">
        <nav class="nav-extended white">
            <div class="nav-content">
                <router-link :to="{ name: 'Index'}">
                    <span class="nav-title blue-grey-text">TODO</span>
                    <span class="nav-title blue-grey-text"><i class="material-icons">storage</i></span>
                    
                    
                   
                    
                    
                 

                </router-link>
                    


                     <span class="nav grey-text move">Signed in as Pontus</span>
                     <span @click="logout" class="nav blue-grey-text move logout">Logout</span>
                     
                   
                     
                     
                
                
                <a href="" class="btn-floating btn-large halfway-fab grey darken-3">
                    <router-link :to="{ name: 'AddToDo'}">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
                
            </div>
            
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data(){
        return{
            

        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(() =>{
                this.$router.push({name: 'Signup'})


            })
        }
    }
    
}
</script>

<style>

.nav-title{
    color: black;
    
    
    
}
nav {
    padding-right: 5vw;
    padding-left: 5vw;
    letter-spacing: 2px;
    font-size: 1.2em;
    
}
.move{
    padding-left: 10px;
}
.logout{
    cursor: pointer;
}


</style>