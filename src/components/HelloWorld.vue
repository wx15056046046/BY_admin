<template>
  <h1>{{ msg }}</h1>
  <h3>{{ count }}</h3>
  <button @click="add">add</button>
</template>
  
  
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref<number>(0);
const init = () => {
  console.log("pppppppppp");
};
const add = () => {
  count.value++
}
</script>



<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
