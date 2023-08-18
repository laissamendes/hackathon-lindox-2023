<script setup>
import CardProduto from '@/components/CardProduto.vue'
import { produtos } from '@/_data/produtos.js'
import { adicionarASacola} from '@/_data/sacola.js'
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
      <router-link to="/sacola"><img src="sacola.png" alt="" width="95" height="50"></router-link>
  </div>
   </header>

  <div id="produtos">
  
      <h1>Produtos</h1>
      <card-produto v-for="produto in produtos" :produto="produto" :key="produto.id" @adicionarASacola="adicionarASacola"/>
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
footer{
  background-color: #00afc2b9;

}
header{
  background-color: #00afc2b9;
  position: sticky; 
top: 10px;
}


</style>