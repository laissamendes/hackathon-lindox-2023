<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cep = ref('89209-490')
const dadosCep = ref({})

async function buscarCep() {
  const data = await axios.get(`https://viacep.com.br/ws/${cep.value}/json`)
  dadosCep.value = data.data
  cep.value=''
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
      <h2>Já somos mais de 200 em  todo Brasil!</h2>
      </div>

      <img src="celular.png" alt="" style="border-radius:50px;">
      <h1>Encontre a Restaura Jeans mais próxima de você!</h1>
     
        <div class="area-de-dados">
          <div> 
            <h4>Insira seu CEP:</h4>
        <input type="text" v-model="cep" >
        <button @click="buscarCep">Enviar</button>
      </div>
      <div>
      Dados: Rua: {{  dadosCep.logradouro  }} <br>
      Bairro: {{  dadosCep.bairro }} <br>
      Cidadae: {{ dadosCep.localidade }}
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
.area-de-dados{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
img{
  display: flex;
  flex-direction: row;
  align-items: right ;
  display: flex;
  justify-content: right;
  align-items: right;
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