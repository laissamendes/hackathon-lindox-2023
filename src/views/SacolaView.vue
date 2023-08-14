<script setup>
import { ref } from 'vue'

const carrinho = ref({
    itens: [],
    total: 0
  })
  
  function atualizaQuantidadeItem(item) {
    carrinho.value.total -= item.total
    item.total = item.price * item.quantidade
    carrinho.value.total += item.total
  }
  
  function removerItemCarrinho(item) {
    const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
    carrinho.value.total -= item.total
    carrinho.value.itens.splice(index, 1)
  }
  
  function adicionarAoCarrinho(livro) {
    const index = carrinho.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      carrinho.value.itens.push({
        ...livro,
        quantidade: 1,
        total: livro.price
      })
      carrinho.value.total += livro.price
    } else {
      carrinho.value.itens[index].quantidade++
      carrinho.value.itens[index].total += livro.price
      carrinho.value.total += livro.price
    }
  }
  export {carrinho, atualizaQuantidadeItem, removerItemCarrinho, adicionarAoCarrinho}
  
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

  <div id="sacola">
  
      <h1>Sacola</h1>
     
  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>

<style scoped>
footer{
  background-color: #003e8faf;

}
header{
  background-color: #003e8faf;
  position: sticky; 
top: 10px;
}


</style>