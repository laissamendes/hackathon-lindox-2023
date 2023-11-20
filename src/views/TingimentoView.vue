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

  <header > 
    <div class="menu">
    <router-link to="/">INÍCIO | </router-link>
      <router-link to="/lojas">LOJAS | </router-link>
      <router-link to="/lavanderia">LAVANDERIA | </router-link>
      <router-link to="/costura">COSTURA | </router-link>
      <router-link to="/tingimento">TINGIMENTO | </router-link>
      <router-link to="/produtos">PRODUTOS | </router-link>
      <img src="@/assets/imagens/sacola.png" alt="" width="95" height="50" @click="togglePopUpSacola">
  </div>
   </header>
   <sacola v-if="showPopUpSacola">

</sacola>
  <div id="tingimento">
  
      <h1>+ DE 5 MILHÕES DE PESSOAS JÁ COMPROVARAM NOSSO TINGIMENTO</h1>
<img src="@/assets/imagens/tingimento.png" alt="" class="calca">
      <div class="texto">
        <p>Podem ser tingidas, desde as mais básicas vestimentas até tapetes, colchas, redes de descanso, toalhas e roupões. Para isso, basta que o tecido tenha no mínimo 60% de algodão. O processo usado por nossa rede de franquias é o mesmo utilizado pela indústria da moda na confecção de peças novas.</p>
      </div>

      <div id="imagens">
        <img src="@/assets/imagens/tingimento2.png" alt="" width="350px" style="margin: 70px;">
        <img src="@/assets/imagens/tingimento3.png" alt="" width="350px" style="margin: 70px;">
        <img src="@/assets/imagens/tingimento4.png" alt="" width="350px" style="margin: 70px;">
      </div>
     
  </div>

  <footer>
   <div class="svg-wave"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00afc2b9" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,234.7C480,245,600,171,720,117.3C840,64,960,32,1080,58.7C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg></div>
  </footer>
</div>

</template>

<style scoped>
.svg-wave{
  position: absolute;
 left: 0;
 width: 100%;
}
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