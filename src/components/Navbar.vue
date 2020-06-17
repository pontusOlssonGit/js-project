<template>
    <div class="navbar">
        <nav class="nav-extended blue-grey darken-1">
            <div class="nav-content">
                <router-link :to="{ name: 'Index'}">
                    <span class="nav-title center">TODO</span>
                </router-link>
                    
                
                
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
export default {
    name: 'Navbar',
    data(){
        return{
            

        }
    }
    
}
</script>

<style>

.nav-title{
    color: white;
    
}
.navbar nav{
    padding: 0 2em;
}


</style>