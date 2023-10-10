<script setup>
import { sacola, atualizaQuantidadeItem, removerItemSacola } from '@/_data/sacola.js';
import MeuBotao from "@/components/MeuBotao.vue";
import SacolaVazia from "@/components/SacolaVazia.vue";
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
    <div class="popup">
    <div class="popup-inner">
        <div class="sacola">
      <h2>Sua Sacola <img src="@/assets/imagens/sacola.png" alt="" width="95" height="50"></h2>  
      <div class="wrap-sacola">
        <sacola-vazia v-if="sacola.itens.length === 0" />
        <div v-else>
          <div class="item-sacola" v-for="(item, index) in sacola.itens" :key="index">
            <div class="info-produto">
              <div class="img-produto">
              <img :src="item.imagem " alt="" width="100" height="100">
              </div>
               <div class="detalhes-produto">
                <div>
                  <p>{{ item.descricao }}</p>
                  <p class="info-produto-preco">{{ formatarPreco(item.preco) }}/un</p>
                </div>
                <div>
                  <p>
                    Quantidade:
                    <input
                      type="number"
                      v-model="item.quantidade"
                      @change="atualizaQuantidadeItem(item)"
                      min="1"
                    />
                  </p>
                  <meu-botao class="primario" @click="removerItemSacola(item)"><trash-can-outline /></meu-botao>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                </div>
                <div><p>Total: {{ formatarPreco(sacola.total) }}</p></div>
            </div>

        </div> 
     </div>
    </div>
</div> 
     </div>
    </div>
</div>

</template>

<style scoped>
.popup{
    position: fixed;
    background-color: white;
    display: flex;
    width: 1000px;
    height: 500px;
    border-color: #00afc2;
    border-radius: 20px;
    border-style: solid;
    margin-left: auto;
    margin-right: auto; 
    color: black;
}
</style>
