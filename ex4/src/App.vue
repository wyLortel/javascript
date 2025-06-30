<script>
export default {
  methods: {
    onkeydownHandler(event) {
      console.log(event)
    },
  },
};
</script>

<template>
  <input type="text" @keydown="onkeydownHandler">
</template>





<!-- <script>
export default {
  methods: {
    onClickHandler() {
      console.log("click");
    },
  },
};
</script>



<template>
  <button @click.once="onClickHandler">클릭</button>
</template>
 -->





<!-- <script>
export default{
  methods: {
    handleScrollPassive(event){
      // event.preventDefault();
      console.log("wheel")
    },
  },
};
</script>



<template>
  <div class="parent" @wheel="handleScrollPassive">
    <div class="child">wheel</div>
  </div>
</template>


<style>
.parent {
  height: 200px;
  overflow-y: scroll;
  border: 3px solid red;
}

.child {
  height: 2000px;
}
</style> -->





<!-- <script>
export default {
  methods: {
    parent() {
      console.log("parent");
    },
    child() {
      console.log("child");
    },
  },
};
</script>


<template>
  <div class="parent" @click.self="parent">
  <div class="child" @click.self="child"></div>
  </div>
</template>

<style>
.parent {
  padding: 20px;
  background-color: red;
}

.child {
  padding: 20px;
  background-color: blue;
}
</style>
 -->




<!-- <script>
export default {
  methods: {
   onSubmitHandle() {
    console.log("start")
   },
  },
};
</script>


<template>
  <div>
    <a href="https://www.google.com/?hl=ko" @click.prevent>구글</a>
    <form @submit.prevent>
      <input type="text" placeholder="onSubmitHandle" />
      <button>제출</button>
    </form>
  </div>
</template>


<style>
</style> -->