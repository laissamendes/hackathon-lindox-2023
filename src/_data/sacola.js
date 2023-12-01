import { ref } from 'vue'

const sacola = ref({
    itens: [],
    total: 0
  })
  
  function atualizaQuantidadeItem(item) {
    sacola.value.total -= item.total
    item.total = item.preco * item.quantidade
    sacola.value.total += item.total
  }
  
  function removerItemSacola(item) {
    const index = sacola.value.itens.findIndex((i) => i.pk_produtos === item)
    console.log(index)
    console.log(sacola.value.itens[index].quantidade)
    console.log(sacola.value.itens[index].preco)

    sacola.value.total -= (sacola.value.itens[index].quantidade * sacola.value.itens[index].preco)
    sacola.value.itens.splice(index, 1)
  }
  
  function adicionarASacola(produto) {
    const index = sacola.value.itens.findIndex((item) => item.pk_produtos === produto.pk_produtos)
    if (index === -1) {
      sacola.value.itens.push({
        ...produto,
        quantidade: 1,
        total: Number(produto.preco)
      })
      sacola.value.total += Number(produto.preco)
    } else {
      sacola.value.itens[index].quantidade++
      sacola.value.itens[index].total += Number(produto.preco)
      sacola.value.total += Number(produto.preco)
    }
  }
  export {sacola, atualizaQuantidadeItem, removerItemSacola, adicionarASacola}