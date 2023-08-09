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

  <div id="tingimento">
  
      <h1>+ DE 5 MILHÕES DE PESSOAS JÁ COMPROVARAM NOSSO TINGIMENTO</h1>
<img src="tingimento.png" alt="" class="calca">
      <div class="texto">
        <p>Podem ser tingidas, desde as mais básicas vestimentas até tapetes, colchas, redes de descanso, toalhas e roupões. Para isso, basta que o tecido tenha no mínimo 60% de algodão. O processo usado por nossa rede de franquias é o mesmo utilizado pela indústria da moda na confecção de peças novas.</p>
      </div>

      <div id="imagens">
        <img src="tingimento2.png" alt="" width="350px" style="margin: 70px;">
        <img src="tingimento3.png" alt="" width="350px" style="margin: 70px;">
        <img src="tingimento4.png" alt="" width="350px" style="margin: 70px;">
      </div>
     
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
#imagens{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
#tingimento{
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.texto{
  width: 650px;
  font-size: 25px;
  color: #ff3131ad;
}
h1{
  color: #ff3131ad;
}
footer{
  background-color: #ff3131ad;

}
header{
  background-color: #ff3131ad;
  position: sticky;
top: 10px;
}


</style>