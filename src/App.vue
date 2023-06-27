<script setup>


</script>

<template>
  <header > 
    <div class="menu">
    <router-link to="/">Início</router-link>
      <router-link to="/lojas">Lojas</router-link>
      <router-link to="/lavanderia">Lavanderia</router-link>
      <router-link to="/costura">Costura</router-link>
      <router-link to="/tingimento">Tingimento</router-link>
      <router-link to="/produtos">Produtos</router-link>
  </div>
   </header>
 
  <main>
    <router-view />
 
  </main>
  <footer>FOOTER</footer>
</template>

<style scoped>

</style>