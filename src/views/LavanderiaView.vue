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

  <div id="lavanderia">
  
      <div class="texto-inicial">
        <p>Com tecnologia de última geração e profissionais especializados, a rede investe pesado para garantir maior comodidade para sua vida. Além de poupar tempo, o serviço de lavanderia deixa suas roupas macias e cheirosas como nunca.</p>
      </div>
      <h2>Conheça o que podemos fazer por você</h2>
     <div class="servicos">
      <img src="img-casa.png" alt="" class="servico">
      <img src="img-vestido.png" alt="" class="servico">
      <img src="img-sapato.png" alt="" class="servico">
      <img src="img-terno.png" alt="" class="servico">
     </div>
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
.servico{
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  transition: .5s all
}
.servico:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.servicos{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 150px;
}
.texto-inicial{
  color: white;
  font-size: 25px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 200px;

  background-color:  #00a2ffb2;
}
footer{
  background-color: #00a2ffb2;

}
header{
  background-color: #00a2ffb2;
  position: sticky; 
top: 10px;
}


</style>