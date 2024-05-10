<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-8">
        <h1> {{selectedUser.name}} </h1>
        <h5> {{selectedUser.email}} </h5>
        <p> {{selectedUser.username}} </p>
      </div>
    </div>    
  </div>
</template>

<script setup>
import {computed, onMounted } from 'vue'
import { useStore } from "vuex"
import { useRoute } from "vue-router"

const store = useStore();
const route = useRoute();

onMounted(async () => {
  await store.dispatch('fetchUserById', route.params.id);
});

const selectedUser = computed(() => store.state.selectedUser)
</script>

<style>

</style>