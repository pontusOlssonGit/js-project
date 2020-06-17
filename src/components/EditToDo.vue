<template>
    <div class="edit-todo container">
        <h2>Edit TODO-list for {{ this.$route.params.todo_slug }}</h2>


    </div>
</template>

<script>
export default {
    name: 'EditToDO',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
    }
</style>