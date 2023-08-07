<script setup>
import { ref } from 'vue'

const cidade = ref('')
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

  <div id="pagina-geral">
  
    <div class="texto">
      <h2>Já somos mais de 200 em  todo Brasil!</h2>
    </div>
      <img src="celular.png" alt="" style="border-radius:50px;">
      <h1>Encontre a Restaura Jeans mais próxima de você!</h1>
      <h4>Insira seu estado:</h4>
        <select v-model="cidade" v-on:keypress="enviar = false">
          <option value="JLLE">Joinville</option>
          <option value="AR">Araquari</option>
          <option value="BV">Barra Velha</option>
          <option value="BBS">Balneário Barra do Sul</option>
          <option value="JS">Jaraguá do Sul</option>
          <option value="SF">São Francisco do Sul</option>
        </select>
        <button type="submit">Enviar</button>
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
img{
  display: flex;
  flex-direction: row;
  align-items: left ;
  display: flex;
  justify-content: left;
  align-items: left;
}
.texto{
  display: flex;
  flex-direction: row;
  align-items: left ;
  display: flex;
  justify-content: left;
  align-items: left;
  border-radius: 25px;
  background-color: #003e8faf;
  color: white;
}
footer{
  background-color: #003e8faf;

}
header{
  background-color: #003e8faf;
  position: sticky; 
top: 10px;
}

</style>