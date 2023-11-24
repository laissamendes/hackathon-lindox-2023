<script setup>
import { ref, onMounted } from 'vue'
import Loading from 'vue-loading-overlay'

import { supabase } from '@/lib/supabaseClient'
import { adicionarASacola } from '@/_data/sacola.js'
import CardProduto from '@/components/CardProduto.vue'


const produtos =  ref([])

const isLoading = ref(false)

async function getProdutos() {
  isLoading.value = true
  const { data } = await supabase.from('produtos').select('*')
  produtos.value = data
  isLoading.value = false
}

onMounted(() => {
    getProdutos()
  })

</script>

<template>
  <loading v-model:active="isLoading" is-full-page />

    <div class="listagem-produtos">
        <CardProduto v-for="produto in produtos" :key="produto.pk_produtos" :produto="produto"
            @adicionarASacola="adicionarASacola" />
    </div>
</template>


<style scoped>
.listagem-produtos {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>