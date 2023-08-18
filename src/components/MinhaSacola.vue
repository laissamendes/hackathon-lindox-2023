<script setup>
import { sacola, atualizaQuantidadeItem, removerItemSacola } from '@/_data/sacola.js'
import MeuBotao from "@/components/MeuBotao.vue";
import SacolaVazia from "@/components/SacolaVazia.vue";

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}


</script>
<template >
<div id="sacola">
    <div class="sacola">
      <h2>Minha Sacola</h2>
      <div class="wrap-sacola">
        <sacola-vazia v-if="sacola.itens.length === 0" />
        <div v-else>
          <div class="item-sacola" v-for="(item, index) in sacola.itens" :key="index">
            <div class="info-produto">
              <div class="imagem-produto">
                <img :src="item.img" class="icon-produto" />
              </div>
              <div class="detalhes-produto">
                <div>
                  <p>{{ item.title }}</p>
                  <p class="info-produto-preco">{{ formatarPreco(item.price) }}/un</p>
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
                  <meu-botao class="primario" @click="removerItemSacola(item)"></meu-botao>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <meu-botao text="Limpar Sacola"/>
        <p class="sacola-total">Total: {{ formatarPreco(sacola.total) }}</p>
      </div>
    </div>

  </div>

  <footer>
    <h2>Restaura Jeans Joinville - SC</h2>
    <p>Av. Getúlio Vargas, 627 - Bucarein, Joinville - SC, 89202-205</p>
    <h3>(47) 99669-5838</h3>
  </footer>
</template>
<style scoped>
.wrap-sacola .sacola-total {
  position: fixed;
  bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
}

.item-sacola .info-produto {
  display: flex;
  margin-bottom: 10px;
}
.detalhes-produto {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.detalhes-produto > p {
  margin: 0;
}
.detalhes-produto div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-produto input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-produto button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-produto-preco {
  margin-left: auto;
}
.icon-produto {
  width: 30px;
  margin-right: 10px;
}
.sacola {
  /* min-width: 20%; */
}

</style>