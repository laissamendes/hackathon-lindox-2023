<script setup>
import { ref } from 'vue';
import sacola from '@/components/Sacola.vue'

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
  <div id="lavanderia">
  
      <div class="texto-inicial">
        <p>Com tecnologia de última geração e profissionais especializados, a rede investe pesado para garantir maior comodidade para sua vida. Além de poupar tempo, o serviço de lavanderia deixa suas roupas macias e cheirosas como nunca.</p>
      </div>
      <div class="svg-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,165.3C672,139,768,85,864,58.7C960,32,1056,32,1152,69.3C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <h2>Conheça o que podemos fazer por você</h2>
     <div class="servicos">
      <div class="divServico">
        <img src="@/assets/imagens/img-casa.png" alt="" class="servico">
        <span class="info">
          Casa, mesa e banho
        </span>
      </div>
      <div class="divServico">
        <img src="@/assets/imagens/img-vestido.png" alt="" class="servico">
        <span class="info">
          Roupas de festas
        </span>
      </div>
      <div class="divServico">
        <img src="@/assets/imagens/img-sapato.png" alt="" class="servico">
        <span class="info">
          Tênis
        </span>
      </div>
      <div class="divServico">
        <img src="@/assets/imagens/img-terno.png" alt="" class="servico">
        <span class="info">
          Casacos e jaquetas
        </span>
      </div>
     </div>
     <div class="tabela-valores">
      <div id="valores">
      <div class="info-valores">
        <h1>Valores:</h1>
        <p>De R$20,00 a R$60,00</p>
      </div>
      <div>
        <p>Entre em contato para verificar os valores!</p>
      </div>
     </div>
     </div>
     
  </div>

  <footer>
   <div class="svg-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00a2ffb2" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,234.7C480,245,600,171,720,117.3C840,64,960,32,1080,58.7C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
   </div>
  </footer>

</div>
</template>

<style scoped>
.tabela-valores{
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
}
div > #valores{
  height: 250px;
  width: 500px;
  border-radius: 50px;
  background-color: #00a2ffb7;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
#valores:hover{
  transition: all .5s;
}
.info-valores > p{
 font-size: 25px;
}
.svg-wave{
 left: 0;
 width: 100%;
 margin-top: 150px;
}

.divServico {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.servico{
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  transition: .5s all;
  margin-top: 50px;
}
.servico:hover {
  cursor: pointer;
  transform: scale(1.2) translateY(-20px);

}

.servico:hover ~ .info {
  opacity: 1;
}

.info {
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 20px;
  width: 100%;
  background: #00a2ff;
  color: white;
  height: 50px;
  transition: all .5s;
  opacity: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.servicos{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
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
  margin-top: 150px;
  height: 200px;
  background-color:  #00a2ffb2;
}
.texto-inicial > p{
height: 150px;
width: 500px;
}
header{
  background-color: #00a2ffb2;
  position: sticky; 
top: 10px;
z-index: 99;

}
h2{
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #00a2ffb2;
  margin-top: 100px;
  font-size: 50px;

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
    background: #00a2ffb2;
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