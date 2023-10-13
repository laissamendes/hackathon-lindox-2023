<script setup>
import { sacola, atualizaQuantidadeItem, removerItemSacola } from '@/_data/sacola.js';
import MeuBotao from "@/components/MeuBotao.vue";
import SacolaVazia from "@/components/SacolaVazia.vue";
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import { ref} from 'vue'


function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

const nome_form = ref('')
const data_compra_form = ref('')
const enviar = ref(false)

</script>

<template>
    <div class="popup">
    <div class="popup-inner">
        <div class="sacola">
      <h2><img src="@/assets/imagens/sacola.png" alt="" width="95" height="50"> Sua Sacola</h2>  
      <div class="wrap-sacola">
        <sacola-vazia v-if="sacola.itens.length === 0" />
        <ul v-else>

          <li class="item-sacola" v-for="(item, index) in sacola.itens" :key="index">
            <div class="img-produto">
              <img :src="item.imagem " alt="" width="100" height="100">
              </div>
              <div class="detalhes-produto">
                <h3>{{ item.descricao }}</h3>
                <p class="info-produto-preco">{{ formatarPreco(item.preco) }}/un</p>


                  <div>
                  <p>
                    
                    Quantidade:
                    <input
                      type="number"
                      v-model="item.quantidade"
                      @change="atualizaQuantidadeItem(item)"
                      min="1"
                    />

                    <meu-botao style="background-color: #00afc2;" @click="removerItemSacola(item)"><trash-can-outline /></meu-botao>
                  </p>
                 
                </div>
              </div>
          </li>

          <!--
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
                  <meu-botao style="background-color: #00afc2;" @click="removerItemSacola(item)"><trash-can-outline /></meu-botao>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                </div>

                -->
            </ul>
        </div> 
     </div>
   
 
     <div class="total-geral"><p>Total da Compra: {{ formatarPreco(sacola.total) }}</p></div>
<div class="informacoes">
  <form @submit.prevent="enviar = confirmacao()">
      <div class="nome">
        <input
          type="text"
          v-model="nome_form"
          v-on:keypress="enviar = false"
          placeholder="Nome completo:"
          required
        />
      </div>
      <div class="nascimento">
    
    <input type="date" v-model="data_compra_form"
     v-on:keypress="enviar = false"
      placeholder="Data da retirada:"
required />
  </div>
  <button type="submit" v-if= "enviar=true">Finalizar Reserva</button>
    </form>
</div>
    </div>
</div>

</template>

<style scoped>

.popup{
    position: fixed;
    /*position: absolute;*/
    background-color: white;
    display: flex;
    width: 50vw;
    height: 500px;
    border-color: #00afc2;
    border-radius: 20px;
    border-style: solid;
    margin-left: 25vw;
    margin-right: 25vw; 
    color: black;
    overflow: auto;
    z-index: 99;
    padding: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
ul li{
      list-style: none;
      display: flex;
}
.popup .img-produto{
  margin-right: 20px;
}
.info-produto-preco{
  color: #00afc2;
  font-size: 1.2em;
}
.popup input[type="number"]{
  width: 30px;
}
.popup input{
  border-radius: 10px;
  border-color: #00afc2;
  border-style: solid;
}
.popup >.informacoes> input{
  margin: 10px;
  
}
.popup button[type="submit"]{
  border-radius: 10px;
  border-color: #00afc2;
  border-style: solid;
}.total-geral{
      color: #00afc2;
      font-size: 25px;
    }
</style>
