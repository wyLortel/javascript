<template>
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
    </nav>
</template>

<script>
    export default{
        name: 'NavberComponent'
    }
</script>


<style>
    .navbar{
        background-color: #000;
        padding: 20px;
    }

    .navbar a {
        color: #fff;
        text-decoration: none;
        padding: 1em;
    }
</style>