<template>
<!-- 모달창 -->
    <div class="modal" v-if="isModal">
        <div class="inner">
        <h3>{{ data[selectedMovie].title }}</h3>
        <p>{{ data[selectedMovie].detail }}</p>
        <button @click="$emit('closeModal')">닫기</button>
    </div>
</div>
</template>

<script>
import data from '@/assets/movies';

export default {
    name: "ModalCoponent",
    props:{
        data : Array,
        isModal: Boolean,
        selectedMovie : Number
    }
}
</script>

<style>

</style>