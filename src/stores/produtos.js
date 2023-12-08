import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProdutoStore = defineStore('produto', () => {
  const state = reactive({
    produtos: [],
  });

  const produtos = computed(() => state.produtos)
  const getProdutoName = (id) => state.produtos.find((produto) => produto.id === id).name


const currentProduto= computed(() => state.currentProduto);

  const getProdutoDetail = async (produtoId) => {

    const response = await supabase
    .from('produtos')
    .select("*")
    .eq('id', {produtoId})
    state.currentProduto = response.data;
  };

  return { produtos, getProdutoName, currentProduto, getProdutoDetail };
})

export default useProdutoStore
