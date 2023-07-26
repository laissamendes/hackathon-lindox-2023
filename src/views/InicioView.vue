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

  <div id="paginaInicial">
  
      <h1>Restaura Jeans</h1>
      <div class="informacoes">
<div class="informacao">
  <p>A primeira unidade foi criada na cidade de Santa Maria/RS, uma cidade militar e universitária.O cenário perfeito para a criação do pequeno espaço que viria a ser um verdadeiro laboratório para a marca.</p>
</div>
<div class="informacao">
  <p>A Restaura Jeans é uma empresa que trabalha juntamente com a sustentabilidade e contém projetos que visam a conservação do meio ambiente.</p>
</div>
<div class ="informacao">
 <p>A empresa também ja conquistou vários prêmios,
dentre eles, por dez anos consecutivos ganhou o prêmio ABF e também foi reconhecida pela pequenas empresas e grandes negócios.</p> 
</div>
      </div>
     
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
footer{
  background-color: #003e8faf;

}
header{
  background-color: #003e8faf;
}
main{
  color: #003d8f;
}
.informacoes{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}
.informacao{
  border-color: white;
  border-radius: 20px;
  background-color: white;
  margin: 25px;
  width: 300px;
  height: 300px;
  text-align: center;
  color: black;
  padding: 15px;
  font-size: 25px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.514);
}
</style>