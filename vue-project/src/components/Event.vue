<template>
    <div class="event">
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default{
        name : "EventCoponent",
        props:{
            text: String,
        }
    }
</script>


<style>
    .event{
        background: #444;
        color: #fff;
        padding: 10px 20px;
    }

    .event p {
        margin: 0;
    }
</style>