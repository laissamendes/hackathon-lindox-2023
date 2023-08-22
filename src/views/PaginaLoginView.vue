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
          type="text"
          v-model="telefone"
          v-on:keypress="enviar = false"
          placeholder="Tel.:"
          required
        />
      </div>
      <div class="cpf">
        <input
          type="text"
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

    <footer>
    <div class="svg-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#003e8faf" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,144C672,107,768,53,864,37.3C960,21,1056,43,1152,80C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>
    
  </footer>
</template>

<style scoped>
.svg-wave{
  position: absolute;
 left: 0;
 width: 100%;
}
</style>

