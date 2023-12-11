<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useProdutoStore } from '@/stores/produtos.js';
  import MeuBotao from '@/components/MeuBotao.vue'

  const produtoStore = useProdutoStore();

  const props = defineProps({
    produtoId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await produtoStore.getProdutoDetail(props.produtoId);
  });
</script>

<template>
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
  
  <div class="main">
    <div class="content">
        <img :src="props.produto.imagem.produtoStore.currentProduto.poster_path" alt="Produto" class="produto"
/>
      <div class="details">
        <h1 class="titulo-produto">{{ props.produto.descricao }}</h1>
        <p class="preco-produto">R$ {{ props.produto.preco }}</p>
      </div>
      <div class="btn">
        <meu-botao class="info" @click="emit('adicionarASacola', props.produto)" style="font-size: 20px;">Adicionar a
        Sacola</meu-botao>
      </div>
    </div>
  </div>



    </template>

<style scoped>
body{
  background-color: #C0ECF1;
}
main{
  background-color: white;
  border-radius: 25px;

}
.titulo-produto{
  color: #4B4B4B;
  font-size: 25px;
}
.preco-produto{
  color: #00B0C2;
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