<script setup>
import MinhaSacola from '@/components/MinhaSacola.vue';
</script>

<template>
  <header > 
    <div class="menu">
    <router-link to="/">INÍCIO | </router-link>
      <router-link to="/lojas">LOJAS | </router-link>
      <router-link to="/lavanderia">LAVANDERIA | </router-link>
      <router-link to="/costura">COSTURA | </router-link>
      <router-link to="/tingimento">TINGIMENTO | </router-link>
      <router-link to="/produtos">PRODUTOS | </router-link>
      <router-link to="/sacola"><img src="@/assets/imagens/sacola.png" alt="" width="95" height="50"></router-link>
  </div>
   </header>
  <div class="container-geral">
    
    <minha-sacola />
  </div>

</template>

<style scoped>

header{
  background-color: #003e8faf;
  position: sticky; 
top: 10px;
}
.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>