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
const usuario = ref('')
const senha = ref('')
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
      <router-link to="/costura"><img :src="maquina ? '../../maquina-Cfundo.png' : '../../maquina-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaquina" @mouseleave="toggleMaquina"></router-link>
        <router-link to="/lavanderia"><img :src="maqLavar ? '../../maqLavar-Cfundo.png' : '../../maqLavar-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaqLavar" @mouseleave="toggleMaqLavar"></router-link>

        <router-link to="/tingimento"><img :src="calca ? '../../calca-Cfundo.png' : '../../calca-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleCalca" @mouseleave="toggleCalca"></router-link>

        <router-link to="/produtos"><img :src="produto ? '../../produto-Cfundo.png' : '../../produto-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleProduto" @mouseleave="toggleProduto"></router-link>

      

    </div>

    <div id="area-do-usuario">
 <h1 style="text-align: center; margin-bottom: 95px; font-size: 50px;">Entre com a sua conta</h1>
 <div id="area-login">
  <div class="login">
  <h2>Login</h2>
  <div class="usuario">
    <label for="usuario">Usuário:</label><br>
  <input type="text" v-model="usuario" v-on:keypress="enviar = false"
 required />
 </div>
 <div class="senha">
  <label for="senha">Senha:</label><br>
  <input type="password" v-model="senha" v-on:keypress="enviar = false" required />
 </div>
 <div class="btn-entrar">
  <button type="submit">Entrar</button>
 </div>
 <div class="fazer-login">
  <router-link to="/pagina-login" style="color:#42349eb2 ;">Fazer Cadastro</router-link>
 </div>
 </div>
 <div class="texto-login" style="font-size: 50px;">
  <p>Você pode ter uma experiência melhor entrando na sua conta, se ainda não tiver cadastro. Aproveite e faça agora!</p>
 </div>
 </div>
    </div>
  </div>


  <footer>
    <div class="svg-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#003e8faf" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,144C672,107,768,53,864,37.3C960,21,1056,43,1152,80C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>
    
  </footer>
</template>

<style scoped>
.svg-wave{
  position: absolute;
 left: 0;
 width: 100%;
}
#area-do-usuario{
  background-image: url('bolhas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
  padding: 100px;
}
.texto-login{
  width: 400px;
  height: 350px;
text-align: center;
}
.texto-login > p{
 font-size: 25px;
}
.login > h2{
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}
.fazer-login, .btn-entrar{
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login{
  width: 400px;
  height: 350px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.texto-login{
  color:  #42349e8f;
  font-size: 25px;
}
#area-do-usuario{
  color: #42349eb2;
}
input{
  border-radius: 10px;
  border-style: none;
  background-color: #4331317c;
  height: 30px;
  width: 300px;
  margin: 10px;
  
}
#paginaInicial{
  color: black;
}
.login > .btn-entrar > button{
  border-style: none;
  border-radius: 20px;
  background-color: #42349e8f;
  color: white;
  width: 150px;
  height: 35px;
  font-size: 20px;
  margin-top: 15px;
}
.login > .btn-entrar > button:hover{
  background-color: #42349ec7;
}
.login{
  display: flex;
  flex-direction: row;
  align-items: left ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-radius: 25px;
  background-color: #ffffff88;
}
#area-login{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
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
  margin-top: 150px;
}

.nomeEmpresa {
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: row;
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
  margin-top: 200px;
  height: 300px;
  font-size: 30px;
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

header {
  background-color: #003e8faf;
  position: sticky; 
top: 10px;
}
.informacoes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 550px;
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