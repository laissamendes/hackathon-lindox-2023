<script setup>
import { ref} from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmacao_senha = ref('')
const dtNascimento = ref('')
const telefone = ref('')
const cpf = ref('')
const imagem = ref('')
const enviar = ref(false)
const msgErro = ref('')


function confirmacao() {
  if (senha.value === confirmacao_senha.value) {
    msgErro.value = "";
    return true;
  } else {
    msgErro.value = "Senha e Confirmação de Senha não conferem!"
    return false
  }
}

function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    console.log(file)
    imagem.value = URL.createObjectURL(file)
  }
}

</script>
<template>
    <div id="area-finalizada">

    </div>
    <div id="area-preenchimento">
        
      <h1>Cadastro</h1>
      <form @submit.prevent="enviar = confirmacao()">
      <div class="nome">
        <input
          type="text"
          v-model="nome"
          v-on:keypress="enviar = false"
          placeholder="Nome:"
          required
        />
      </div>
      <div class="nascimento">
    
        <input type="date" v-model="dtNascimento" v-on:keypress="enviar = false" placeholder="Nasc.:"
required />
      </div>
      <div class="email">
        <input
          type="email"
          v-model="email"
          v-on:keypress="enviar = false"
          placeholder="E-mail:"
          required
        />
      </div>
            <div class="senha">
        <input
          type="password"
          v-model="senha"
          v-on:keypress="enviar = false"
          placeholder="Senha:"
          required
        />
      </div>
      <div class="confirmacao_senha">
        <input
          type="password"
          v-model="confirmacao_senha"
          v-on:keypress="enviar = false"
          placeholder="Confirme sua senha:"
          required
        />
      </div>
      <div class="telefone">
        <input
          type="number"
          v-model="telefone"
          v-on:keypress="enviar = false"
          placeholder="Tel.:"
          required
        />
      </div>
      <div class="cpf">
        <input
          type="number"
          v-model="cpf"
          v-on:keypress="enviar = false"
          placeholder="CPF:"
          required
        />
      </div>
      <div>
      <input
          type="file"
          id="imagem"
          @change="handleFileUpload($event)"
        />      
      </div>
      <button type="submit">Enviar</button>
    </form>

    </div>
    <div id="msgErro"><p>{{ msgErro }}</p></div>

</template>