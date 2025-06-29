<script>
export default {
  data() {
    return {
      id : "test",
      pw: "1234",
    };
  },
  methods : {
    login() {
      console.log(`id : ${this.id}`)
      console.log(`id : ${this.pw}`)
    },

  },
};

</script>

<template>
  <form >
    <input type="text" name="uid" @change="id = $event.target.value " v-bind:value="id">
    <input type="password" name="pw" @change="pw = $event.target.value" v-bind:value="pw">
    <button type="button" @click="login">로그인</button>
  </form>
</template>