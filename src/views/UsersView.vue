<template>
<!-- <UsersCard name="john" email=" odevictor358@gmail.com" username="benson"></UsersCard> -->
<div class=" row " >
  <UsersCard v-for="user in users" :key="user.id" :user="user" @view-user="viewuser(user)"></UsersCard>
</div>
</template>

<script setup>
import UsersCard from '../components/UsersCard.vue'

import { computed, onMounted } from "vue";
import { useStore } from "vuex"
import { useRouter } from "vue-router"


const store = useStore();
const router = useRouter();

onMounted(async () =>{
  await store.dispatch("fetchUsers");
});

const users = computed(() => store.state.users)
// console.log(users)

function viewuser(user){
  router.push({ name: 'userDetailsView', params: {id: user.id} })
}
 
  // const users = [
  //       {id:1, name:'peter', email:'odevictor358@gmail.com', username:'blaze'},
  //       {id:2, name:'john', email:'odevictor38@gmail.com', username:'fire'},
  //       {id:3, name:'bisi', email:'chigon358@gmail.com', username:'Eazy'},
  //       {id:4, name:'peter', email:'odevictor358@gmail.com', username:'blaze'},
  //       {id:5, name:'john', email:'odevictor38@gmailol8puk..com', username:'fire'},
  //       {id:6, name:'bisi', email:'chigon358@gmail.com', username:'Eazy'},
  //        {id:7, name:'peter', email:'odevictor358@gmail.com', username:'blaze'},
  //       {id:8, name:'john', email:'odevictor38@gmailol8puk..com', username:'fire'},
  //       {id:9, name:'bisi', email:'chigon358@gmail.com', username:'Eazy'},
  //       {id:10, name:'bisi', email:'chigon358@gmail.com', username:'Eazy'},
  //     ]
</script>

<style>

</style>