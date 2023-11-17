import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
// import api from '../plugins/axios';

export const useProdutoStore = defineStore('produto', () => {
    const state = reactive({
    });
  
    const produtos = computed(() => state.produtos);
    const getProdutoName = (id) =>
      state.produtos.find((produto) => produto.id === id).name;
  
    // const getAllProdutos = async (type) => {
    //   const response = await api.get(`produto/${type}/list?language=pt-BR`);
    //   state.produtos = response.data.genres;
    // };
  
    return { produtos, getProdutoName };
  });
  
  export default useProdutoStore;