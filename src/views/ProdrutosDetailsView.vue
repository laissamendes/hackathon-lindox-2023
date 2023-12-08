<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useProdutoStore } from '@/stores/produtos.js';
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
  
  <div class="main">
    <div class="content">
        <img :src="props.produto.imagem.produtoStore.currentProduto.poster_path" alt="Produto" class="produto"
/>
      <div class="details">
        <h1 class="titulo-produto">{{ props.produto.descricao }}</h1>
        <p class="preco-produto">R$ {{ props.produto.preco }}</p>
      </div>
    </div>
  </div>



    </template>

<style scoped>
  .companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>