<script setup>
import { ref } from 'vue'

const maquina = ref(false)

function toggleMaquina() {

  maquina.value = !maquina.value
  console.log(maquina.value)
}
const maqLavar = ref(false)

function toggleMaqLavar() {

  maqLavar.value = !maqLavar.value
  console.log(maqLavar.value)
}
const calca = ref(false)

function toggleCalca() {

  calca.value = !calca.value
  console.log(calca.value)
}
const produto = ref(false)

function toggleProduto() {

  produto.value = !produto.value
  console.log(produto.value)
}

</script>

<template>
  <header>
    <div class="menu">
      <router-link to="/">INÍCIO | </router-link>
      <router-link to="/lojas">LOJAS | </router-link>
      <router-link to="/lavanderia">LAVANDERIA | </router-link>
      <router-link to="/costura">COSTURA | </router-link>
      <router-link to="/tingimento">TINGIMENTO | </router-link>
      <router-link to="/produtos">PRODUTOS | </router-link>
      <router-link to="/sacola"><img src="sacola.png" alt="" widthmouseout="95" height="50"></router-link>
    </div>
  </header>

  <div id="paginaInicial">
    <div id="titulo">
      <!-- <div > -->
      <h1 class="nomeEmpresa">
        <div class="titulo-part1">Restaura</div>
        <div class="titulo-part2">Jeans</div>
      </h1>
      <!-- </div> -->
      <h2 id="slogan">A solução para a sua roupa</h2>
    </div>
    mouseout
    <div class="informacoes">
      <div class="informacao">
        <p>A primeira unidade foi criada na cidade de Santa Maria/RS, uma cidade militar e universitária.O cenário
          perfeito para a criação do pequeno espaço que viria a ser um verdadeiro laboratório para a marca.</p>
      </div>
      <div class="informacao">
        <p>A Restaura Jeans é uma empresa que trabalha juntamente com a sustentabilidade e contém projetos que visam a
          conservação do meio ambiente.</p>
      </div>
      <div class="informacao">
        <p>A empresa também ja conquistou vários prêmios,
          dentre eles, por dez anos consecutivos ganhou o prêmio ABF e também foi reconhecida pela pequenas empresas e
          grandes negócios.</p>
      </div>
    </div>
    <div id="servicos">
      <img :src="maquina ? '../../maquina-Cfundo.png' : '../../maquina-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaquina" @mouseleave="toggleMaquina">

      <img :src="maqLavar ? '../../maqLavar-Cfundo.png' : '../../maqLavar-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaqLavar" @mouseleave="toggleMaqLavar">

      <img :src="calca ? '../../calca-Cfundo.png' : '../../calca-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleCalca" @mouseleave="toggleCalca">

      <img :src="produto ? '../../produto-Cfundo.png' : '../../produto-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleProduto" @mouseleave="toggleProduto">

    </div>
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
.servico:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.servico {
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  transition: .5s all
}

#servicos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
}

.nomeEmpresa {
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#titulo {
  background-color: rgba(255, 255, 255, 0.582);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.titulo-part1 {
  color: #BB1903;
}

.titulo-part2 {
  margin-left: .75rem;
  color: #0A376B;
}

#slogan {
  color: #403838;
  text-align: left;
}

footer {
  background-color: #003e8faf;

}

header {
  background-color: #003e8faf;
}

main {
  color: #003d8f;
}

.informacoes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.informacao {
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
}</style>