<script setup>
import { ref } from 'vue'
import sacola from '@/components/Sacola.vue'

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

const showPopUpSacola = ref(false);

function togglePopUpSacola() {
  showPopUpSacola.value = !showPopUpSacola.value;
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
   <sacola v-if="showPopUpSacola">

</sacola>
  <div id="pagina-geral">
  
    <div class="texto">
      <h2>Já somos mais de 200 lojas em  todo Brasil!</h2>
      </div>
<div id="celular">
<img src="@/assets/imagens/celular.png" alt="" style="border-radius:50px;">
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
      <div class="mapBox">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3577.7058066419036!2d-48.81831179292281!3d-26.271209903502744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1702144865775!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
    </div>
        </div>
  </div>

  <!-- <footer>
    <div class="svg-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#003e8faf" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,144C672,107,768,53,864,37.3C960,21,1056,43,1152,80C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>
  </footer> -->
</div>
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
  margin-left: 450px;
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
z-index: 99;
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

*{
    margin-top: 0px;
    padding: 10px;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background: #262626;

}

.mapBox{
    position: relative;
    width: 600px;
    height: 500px;
    background: #fff;

}

.mapBox iframe{
    width: 100%;
    height: 100%;
}

</style>