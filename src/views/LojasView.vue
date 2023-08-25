<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cep = ref('89209-490')
const dadosCep = ref({})

const enviar = ref(false)
async function buscarCep() {
  const data = await axios.get(`http://localhost:3050/api/distance/${cep.value}`)
  dadosCep.value = data.data
  cep.value=''
  enviar.value=true
}

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
      <h2>Já somos mais de 200 lojas em  todo Brasil!</h2>
      </div>
<div id="celular">
<img src="celular.png" alt="" style="border-radius:50px;">
</div>
      
<h1 style="text-align:center ; margin-top: 500px;">Encontre a Restaura Jeans mais próxima de você!</h1>

        <div class="area-de-dados">

          <div> 
            <h4>Insira seu CEP:</h4>
        <input type="text" v-model="cep" >
        <button @click="buscarCep">Enviar</button>
      </div>
      <div class="box-info" v-if="enviar"> 
        <h1>Loja mais próxima</h1>
      cidade mais próxima {{  dadosCep?.loja?.cidade  }} <br>
      estado {{  dadosCep?.loja?.estado  }} <br>
      distancia {{  dadosCep?.distancia  }} <br>
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
.box-info{
  border-radius: 20px 0px 20px 20px;
  background-color: white;
  width: 300px;
  height: 200px;
  padding-left: 10px;
}
input{
  border-radius: 20px;
  border: solid;
  border-color: white;
  color:#003e8f93;
  box-shadow: inset 0 0 2px black;
  font-size: 25px;
  padding: 10px;
  margin-right: 10px;
}
input:hover{
    box-shadow: inset 0 0 5px black;
}
button{
  border-radius: 20px;
  border: solid;
  border-color: white;
  color:#003D8F;
  box-shadow: inset 0 0 2px #003D8F;
  background-color: #003e8f7c;
  font-size: 25px;
padding: 10px;
}
button:hover{
      box-shadow: inset 0 0 5px #003e8f80;

}
.svg-wave{
  position: absolute;
 left: 0;
 width: 100%;
}
.area-de-dados{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 100px;
}
#celular > img{
  display: flex;
  flex-direction: column;
  align-items: right ;
  justify-content: right;
  align-items: right;
  margin-left: 1500px;
  position: absolute;
  top: 100px;
}
.texto{
  display: flex;
  flex-direction: row;
  align-items: center ;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003e8faf;
  color: white;
  font-size: 30px;
  margin-top: 200px;
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