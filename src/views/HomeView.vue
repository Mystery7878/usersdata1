<template>
  <div class="design_section">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld id=".box" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
  .design_section{
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(23,22,50),rgb(61, 224, 89)), url('../assets/image/bike.png');
  }

  
</style>
