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
  <div id="pag-login">

    <div id="area-finalizada">
      <img :src="imagem" alt="" class="img_atual"/>
      <div class="nome_atual">
      <p>{{ nome }}</p>
    </div>
    <div class="dt_nascimento-atualizado">
      <p>{{ dtNascimento.substr(8,2)+"/"+dtNascimento.substr(5,2)+"/"+dtNascimento.substr(0,4) }}</p>
    </div>
    <div class="email-atual">
      <p>{{ email }}</p>
    </div>
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
      <button type="submit">Realizar Cadastro</button>
    </form>

    </div>
    <div id="msgErro"><p>{{ msgErro }}</p></div>
  </div>

</template>

<style scoped>
#area-preenchimento{
  margin-left: 50px;

}
  #pag-login{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

#area-finalizada{
  background-color: #003e8faf;
}
.img_atual {
  width: '80%';
  display: flex;
  justify-content: center;
}

.img_atual img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
input{
  margin: 15px;
border-radius: 20px;
  border: solid;
  border-color: white;
  color:#003e8faf;
  box-shadow: inset 0 0 2px black;
  font-size: 25px;
  padding: 10px;

}
input:hover{
    box-shadow: inset 0 0 5px black;
}
button{
  border-radius: 20px;
  border: solid;
  border-color: white;
  color:#003e8faf;
    font-size: 35px;
    padding: 10px;
}
button:hover{
  box-shadow: inset 0 0 15px #003e8faf;

}
</style>

