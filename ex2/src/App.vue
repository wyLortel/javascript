<script>
export default {
  data () {
    return {
      name : "chulsu",
      gender : "male" ,
      age : 20,
    };
  },
};
</script>


<template>
  <div v-memo="[name , gender]">
    <h1>{{ name }}</h1>
    <h1>{{ gender }}</h1>
    <h1>{{ age }}</h1>
  </div>

  <button @click="name = 'john'">name 변경</button>
  <button @click="gender = 'female'">gender 변경</button>
  <button @click="age = 30">age 변경</button>
</template>



<!-- <script>
export default {
  data() {
    return {
      message : "Hello",
    };
  },
};
</script>

<template>
  <h1 v-once>{{ message }}</h1>
  <button @click="message = 'bye'">message 변경</button>
</template> -->




<!-- <script>
export default {
  methods: {
    method() {
      console.log("method called");
      this.methodA();
    },
    methodA() {
      console.log("methodA called");
      this.methodB();
    },
    methodB() {
      console.log("methodB called");
    },
  }
}
</script>

<template>
  <div>
    <button @click="method">클릭</button>
  </div>
</template> -->






<!-- <script>
export default {
  data () {
    return {
      num : 0
    };
  },

  methods: {
    decreasement() {
      this.num = this.num -1;
    },
    increasement() {
      this.num = this.num + 1;
    },
  }
};

</script>

<template>
  <h1>{{ num }}</h1>
  <button @click="num--">감소</button>
  <button @click="num++">증가</button>
</template>

 -->


<!-- <script>
export default{
  data() {
    return {
      str: "hello" ,
      num : 10,
      bool : true ,
      undi : undefined ,
      nul : null ,
      arr : [10] ,
      obj : {
        name : "mike",
      },
    };
  },
  methods: {
    dataChange(){
      this.num = 20;
    }
  }
};
</script>

<template>
  <h1>{{ num }}</h1>
  <button @click="dataChange">변경</button>
</template>


 -->


<!-- 
!-- <template>
  <h1>{{ num }}</h1>
  <button @click="decreasement">감소</button>
  <button @click="increasement">증가</button>
</template>

<script>
export default {
  data () {
    return{
      num : 0
    };
  },
  methods: {
    decreasement(){
      this.num = this.num - 1;
    },
    increasement(){
      this.num = this.num + 1 ;
    },
  }
};
</script> --> -->