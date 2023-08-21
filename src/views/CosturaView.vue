<script setup>
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

  <div id="paginaCostura">
  
<h1>COSTURA</h1>
<div id="informacoes-costura">
  <div class="info">
    <p>Precisa ajustar, aumentar ou diminuir cós, fazer barra ou um cerzido? A Restaura entende.</p>
  </div>
  <div class="info">
    <p>Nossos serviços são executados na própria franquia, por um time especializado que recebe treinamentos constantes, garantindo mais agilidade e qualidade para você.</p>
  </div>
  <div class="info">
    <p>Contamos com profissionais especializados para realizar qualquer tipo de reparo ou conserto, nos mais variados tipos de tecidos. </p>
  </div>
</div>     
<div class="imagens">
  <img src="imagem-costura1.png" alt="" width="395">
  <img src="imagem-costura2.png" alt="" width="395">
  <img src="imagem-costura3.png" alt="" width="395">
  <img src="imagem-costura4.png" alt="" width="395">

</div>
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
.imagens{
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  height: 100%;
}
h1{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  background-color:  #6fc400b0;
  margin-top: 100px;
}
#informacoes-costura{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  color: #4B8402;
  margin-top: 150px;
}
.info{
  border-color: white;
  border-radius: 20px;
  background-color: white;
  width: 350px;
  height: 200px;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
}
footer{
  background-color: #6fc400b0;

}
header{
  background-color: #6fc400b0;
  position: sticky; 
top: 10px;
}


</style>