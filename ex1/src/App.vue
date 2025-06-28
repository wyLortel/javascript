<script>
export default {
  data() {
    return {
      arr : ["apple" , "banana" , "oreange"],
      arrInObj : [
        { id : 1 , name : "John"},
        { id : 2 , name : "Mike"},
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(item, index) in arrInObj" :key="item.id">
      {{ index }} - {{ item.name }}
    </li>
  </ul>
</template>




<!-- <script>
export default {
  data () {
    return {
      type : "blue"
    };
  },
};
</script>

<template>
  <div v-if="type === 'red'" class="box red-box"></div>
  <div v-else-if="type === 'blue'" class="box blue-box"></div>
  <div v-else-if="type === 'green'" class="box green-box"></div>
  <div v-else class="box yellow-box"></div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
}
.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}

.green-box {
  background-color: green;
}


.yellow-box {
  background-color: yellow;
}

</style>
 -->



<!-- <script>
export default {
  data () {
    return {
      boolean : false ,
      num : 10,
    };
  },
};
</script>

<template>
  <div v-if="num !== 10" class="box red-box"></div>
  <div class="box blue-box"></div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
}
.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}
</style> -->











<!-- <script>
export default {
  data () {
    return {
      boolean : false ,
      num : 10,
    };
  },
};
</script>

<template>
  <div v-show="num === 10" class="box red-box"></div>
  <div class="box blue-box"></div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
}
.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}
</style> -->







<!-- <script>
export default{
  data() {
    return{
      message : "Hello , vue JS"
    };
  },
};
</script>
<template>
  <div>{{ message }}</div>
  <div v-pre>{{ message }}</div>
</template> -->



<!-- <template>
  <a :href="google" v-bind:class="className">링크</a>
</template>

<script>
export default {
  data () {
    return {
      google : "https://www.google.com" , 
      className : "color_red"
    }
  }
}
</script>

<style>
.color_red {
  color: red;
}
</style> -->









<!-- <script>
export default{
  data() {
    return {
      message : "Hello Vue js",
      messageHTML : "<h1>Vue JS!</h1>"
    };
  },
};
</script>

<template>
  <div>{{ message }}</div>
  <div v-html="message"></div>
  <div v-text="message"></div>
</template>
 -->




<!-- <script>
export default {
  data() {
    return {
      message : "Hello Vue JS" ,
      messgaeHTML : "<h1>Hello Vue JS wiht h1 </h1>"
    };
  },
};
</script>

<template>
  <div v-html="messgaeHTML"></div>
</template> -->



<!-- <script>
export default {
  data : function(){
    return{
      message : "Hello Vue JS"
    }
  }
}
</script>
<template>
  <h1>{{ message }}</h1>

</template>
<style></style> -->