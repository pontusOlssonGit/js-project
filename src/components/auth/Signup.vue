<template>
<div id="wrapper">
    <div class="signup container" >
        <form class="card-panel">
            <h2 class="center blue-grey-text">Signup</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password">
            </div>
            <div class="field">
                <label for="username">Username:</label>
                <input type="text" name="username">
            </div>
            <div class="field center">
                <button class="btn blue-grey">Signup</button>
            </div>

        </form>



    </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data(){
        return{
            
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

.signup{
    padding-top: 10vh;
    max-width: 500px;
    
    
}
.btn{
    margin-top: 5vh;
    margin-bottom: 5vh;
    
}

</style>