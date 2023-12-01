<script setup>
import ListagemProdutos from '@/components/ListagemProdutos.vue'
import sacola from '@/components/Sacola.vue'
import { ref } from 'vue'

const showPopUpSacola = ref(false)

function togglePopUpSacola() {
  showPopUpSacola.value = !showPopUpSacola.value
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
    <sacola v-if="showPopUpSacola"> </sacola>
    <div id="produtos">
      <div class="svg-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffffff"
            fill-opacity="1"
            d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <listagem-produtos />

    </div>

    <footer>
      <div class="svg-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00afc2b9"
            fill-opacity="1"
            d="M0,32L60,80C120,128,240,224,360,234.7C480,245,600,171,720,117.3C840,64,960,32,1080,58.7C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.svg-wave {
  left: 0;
  width: 100%;
}
header {
  background-color: #00afc2b9;
  position: sticky;
  top: 10px;
  z-index: 99;
}
#produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 450px;
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
    background: #00afc2b9;
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
