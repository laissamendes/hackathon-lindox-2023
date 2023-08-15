<script setup>
const props = defineProps({
    produto: Object
})
const emit = defineEmits(['adicionarASacola'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>
    <div class="card-produto">
        <div class="card-info-produto">
          <div class="wrap-produto">
            <img :src="props.produto.img" alt="Produto" class="produto" />
          </div>
          <p class="titulo-produto">{{ props.produto.title }}</p>
          <p class="preco-produto">{{ formatarPreco(props.produto.price) }}</p>
        </div>
        <div class="card-buttons-produtos">
          
        </div>
      </div>
</template>

<style scoped>
.card-produto {
  margin: 5px 10px;
  padding: 10px;
  background-color: rgb(129, 192, 252);
  border-radius: 10px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.wrap-produto {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 180px;
  height: 270px;
}
.produto {
  width: 90%;
  max-height: 100%;
}

.card-produto p {
  margin: 0;
}

.card-produto .titulo-produto {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>