<script setup>
import { ref } from 'vue'
import sacola from '@/components/Sacola.vue'

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

const showPopUpSacola = ref(false);

function togglePopUpSacola() {
  showPopUpSacola.value = !showPopUpSacola.value;
  console.log(showPopUpSacola.value)
}
</script>

<template>
  <div class="container">

<header>
    <div class="menu">
      <input type="checkbox">
      <a href="#" class="mb-menu">x</a>
      <div>

      <router-link to="/">INÍCIO</router-link>
      <router-link to="/lojas">LOJAS</router-link>
      <router-link to="/lavanderia">LAVANDERIA</router-link>
      <router-link to="/costura">COSTURA</router-link>
      <router-link to="/tingimento">TINGIMENTO</router-link>
      <router-link to="/produtos">PRODUTOS</router-link>
    </div>
      <img src="@/assets/imagens/sacola.png" alt="" width="95" height="50" @click="togglePopUpSacola">
    </div>

  </header>

  <sacola v-if="showPopUpSacola"></sacola>


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
      <router-link to="/costura"><img :src="maquina ? '../../src/assets/imagens/maquina-Cfundo.png' : '../../src/assets/imagens/maquina-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaquina" @mouseleave="toggleMaquina"></router-link>
        <router-link to="/lavanderia"><img :src="maqLavar ? '../src/assets/imagens/maqLavar-Cfundo.png' : '../../src/assets/imagens/maqLavar-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleMaqLavar" @mouseleave="toggleMaqLavar"></router-link>

        <router-link to="/tingimento"><img :src="calca ? '../src/assets/imagens/calca-Cfundo.png' : '../src/assets/imagens/calca-Sfundo.png'" alt="" class="servico"
        @mouseover="toggleCalca" @mouseleave="toggleCalca"></router-link>

        <router-link to="/produtos"><img :src="produto ? '../src/assets/imagens/produto-Cfundo.png' : '../src/assets/imagens/produto-Sfundo.png'" alt="" class="servico"
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
  <button type="submit" v-if="enviar=true">Entrar</button>
 </div>
 <div class="fazer-login">
  <router-link to="/pagina-login" style="color:#42349eb2 ;">Fazer Cadastro</router-link>
 </div>
 </div>
 <div class="texto-login" style="font-size: 50px;">
  <p>Você pode ter uma experiência melhor entrando na sua conta, se ainda não tiver cadastro. Aproveite e faça agora!</p>
  <div id="redes-sociais">
      <div class="instagram">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
        <a href="https://www.instagram.com/restaurajeansjoinville/">Instagram</a>
      </div>
      <div class="whatsapp">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp"/>
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5547996695838">WhatsApp</a>
      </div>
    </div>
 </div>
 
 </div>
    </div>
  </div>


</div> <!-- container-->
</template>

<style scoped>
#redes-sociais{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.instagram, .whatsapp{
  color: white;
  width: 150px;
  height: 50px;
  background-color: #42349eb2;
  font-size: 20px;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
}
#area-do-usuario{
  background-image: url('@/assets/imagens/bolhas.jpg');
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
  position: sticky!important;
/*top: 10px;*/
/*margin-top: 10px;*/
z-index: 99;

}
.informacoes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 200px;
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
}

.inicio {
  background-image: url("@/assets/imagens/fundo.png" );
  background: black !important;
}

div.menu a.mb-menu, div.menu input{
    display: none;
  }
  div.menu{
    padding-right: 5vw;
  }
  div.menu a:not(.mb-menu){
    border-right: 2px solid white;
    padding: 0 10px;
  }
  div.menu div{
    padding-top:10px;
  }
  div.menu a:last-child{
    border-right: none;
  }
@media (max-width: 600px) {
  div.menu input~div a{
    display: none;
  }
  div.menu{
    position: relative;
    padding-right: 10vw;
  }
  div.menu input~div{
    top: 60px; 
    /* altura do hedder */
    position: absolute;
    background: #003e8faf;
    left: -60px;
    padding: 0 5px;
  }
  div.menu input{
    width: 30px;
    opacity: 0;
    z-index: 2;
    margin: 0;
    padding: 0;
  }
  div.menu a.mb-menu{
    z-index:1;
  }
  div.menu a.mb-menu, div.menu input{
    display: block;
    position: absolute;
    top: 0;
    left: -60px;
    width: 20px;
  }
  div.menu input:checked~div a{
    display: block;
    margin: 10px 0;
  }
  .facet_sidebar {
    display: none;
  }
}
</style>