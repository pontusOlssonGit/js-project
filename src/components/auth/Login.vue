<template>
<div id="wrapper">
    <div class="login container" >
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



    </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null,
            feedback: null
        }
    },
    methods:{
        login(){


        }

    }

}
</script>

<style>

#wrapper{
    background-image: url("https://images.unsplash.com/photo-1591965690751-664e6c285ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
    min-height: 100vh;
    background-size: cover;
}

.login{
    padding-top: 10vh;
    max-width: 500px;
    
    
}
.btn{
    margin-top: 5vh;
    margin-bottom: 5vh;
    
}

</style>