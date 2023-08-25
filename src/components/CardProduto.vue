<script setup>
const props = defineProps({
    produto: Object
})
const emit = defineEmits(['adicionarASacola'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
import MeuBotao from '@/components/MeuBotao.vue'
</script>

<template>
    <div class="card-produto">
        <div class="card-info-produto">
          <div class="wrap-produto">
            <img :src="props.produto.imagem" alt="Produto" class="produto" />
          </div>
          <p class="titulo-produto">{{ props.produto.descricao }}</p>
          <p class="preco-produto">{{ formatarPreco(props.produto.preco) }}</p>
        </div>
        <div class="card-buttons-produtos" style="font-size: 20px;">
          <meu-botao class="info" @click="emit('adicionarASacola', props.produto)">Adicionar a Sacola</meu-botao>
        </div>
      </div>
</template>

<style scoped>
img{
  width: 300px;
  height: 200px;
}
.preco-produto{
  color: #00B0C2;
  text-align: center;
  font-size: 25px;
  margin: 10px;
}
.card-produto {
  margin: 100px;
  padding: 10px;
  border-radius: 10px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  color: #4B4B4B;
}

.wrap-produto {
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;
}
.produto {
  width: 90%;
  max-height: 100%;
}

.card-produto p {
  margin: 0;
}

.card-produto .titulo-produto {
  margin-bottom: 5px;
  text-align: center;
}
.card-buttons-produtos{
  font-size: 30px;
}
</style>