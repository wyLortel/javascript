`<script>

export default{
  data() {
    return {
      field: "",
      files: null,
    };
  },
  methods: {
    printData() {
      console.log(this.files);
    },
    onChangeHandler(e) {
      console.log(e);
      this.files = e.target.files[0];
    }
  },
};
</script>

<template>
  <input type="file" @change=" $event => onChangeHandler($event)">
  <button @click="printData">업로드</button>
</template>
`







<!-- <script>
export default {
  data() {
    return {
      filed : 67,
    };
  },
  methods : {
    printData() {
      console.log(this.filed)
    },
  },
};
</script>

<template>
  <progress max="100" v-bind:value="filed" value="50">{{ filed }}%</progress> <br>
  <button @click="printData">출력</button>
</template> -->





<!-- <script>
export default {
  data() {
    return{
      field : "female",
    };
  },
  methods: {
    printData() {
      console.log(this.field);
    },
  },
};
</script>

<template>
  <input type="radio" value="male" name="gender" v-model="field">male<br>
  <input type="radio" value="female" name="gender" v-model="field">female<br>
  <button @click="printData">출력</button>
</template> -->


<!-- <script>
export default {
  data() {
    return {
      filed: ["banana"],  
    };
  },
  methods: {
    printData() {
      console.log(this.filed);  
    },
  },
};
</script>

<template>
  <input type="checkbox" v-model="filed" value="banana">banana<br/>
  <input type="checkbox" v-model="filed" value="orange">orange<br/>
  <button @click="printData">출력</button>
</template>

 -->


<!-- <script>
export default {
  data() {
    return {
      field: "init",
      combo: "female",
    };
  },
  methods : {
  printData() {
    // console.log(this.field);
    console.log(this.combo)
    },
  },
};
</script>

<template>
  <textarea v-model="field"></textarea>
  <select v-model="combo">
    <option value="male">male</option>
    <option value="female">female</option>
  </select>
  <button @click="printData">출력</button>
</template>
 -->





<!-- <script>
export default {
  data(){
    return {
      str : "",
    };
  },
  methods : {
    onInputHandler(e) {
      this.str = e.target.value
    }
  }
};
</script>

<template>
  <textarea @input="onInputHandler($event)"></textarea>
  <p>글자수 : {{ str.length }}</p>
</template> -->




<!-- <script>
export default {
  data() {
    return {
      id : "sucoding"
    };
  },
};
</script>

<template>
  <input type="text" name="uid" v-model="id">
  {{ id }}
</template> -->



<!-- <script>
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
    <input
      type="text" 
      name="uid" 
      v-model="id">
    <input 
      type="password"
      name="pw"
      v-model="pw">
    <button type="button" @click="login">로그인</button>
  </form>
</template> -->