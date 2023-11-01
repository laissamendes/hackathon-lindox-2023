<script setup>
import { currentPage } from '@/_data/page.js'

</script>

<template>
  <div id="app" :class="currentPage">
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>

#app {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
   /*background-color: #fff;*/
  /*opacity: 0.7; */
  height: 100vh;
  width: 100vw;
  background-size: 100%;
}
.container{
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  padding: 10px 0 0 0;
}

.inicio .container{
  background-image: url("@/assets/imagens/fundo.png" );
}
.lojas .container{
  background-image: url("@/assets/imagens/loja-fisica.png" );
}
.lavanderia .container{
  background-image: url("@/assets/imagens/fundo-lavanderia.png");
}
.costura .container{
  background-image: url("@/assets/imagens/fundo-costura.jpg");
}
.produtos .container{
  background-image: url("@/assets/imagens/fundo-produtos.png");
}


router-link:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
</style>