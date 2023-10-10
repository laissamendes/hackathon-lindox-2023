<script setup>
import { ref} from 'vue'

const nome_form = ref('')
const email_form = ref('')
const senha_form = ref('')
const confirmacao_senha_form = ref('')
const dtNascimento_form = ref('')
const telefone_form = ref('')
const cpf_form = ref('')
const imagem_form = ref('')
const enviar = ref(false)
const msgErro = ref('')

const nome = ref(nome_form)
const email = ref(email_form)
const telefone = ref(telefone_form)
const imagem = ref(imagem_form)

function confirmacao() {
  if (senha_form.value === confirmacao_senha_form.value) {
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
    imagem_form.value = URL.createObjectURL(file)
  }
}

</script>
<template>
  <div id="pag-login">

    <div id="area-finalizada">
      <img :src="imagem" alt="" class="img_atual"/>
      <div class="nome_atual">
      <p>Nome: {{ nome }}</p>
    </div>
    <div class="email-atual">
      <p>E-mail: {{ email }}</p>
    </div>
    <div class="tel-atual">
 <p>Tel.: {{ telefone }}</p>
    </div>
    <div class="btn-inicio">
      <router-link to="/"><button style="border-style: none; font-size: 20px;">Voltar a página inicial</button></router-link>    </div>
    </div>
    <div id="area-preenchimento">
        
      <h1>Cadastro</h1>
      <form @submit.prevent="enviar = confirmacao()">
      <div class="nome">
        <input
          type="text"
          v-model="nome_form"
          v-on:keypress="enviar = false"
          placeholder="Nome:"
          required
        />
      </div>
      <div class="nascimento">
    
        <input type="date" v-model="dtNascimento_form" v-on:keypress="enviar = false" placeholder="Nasc.:"
required />
      </div>
      <div class="email">
        <input
          type="email"
          v-model="email_form"
          v-on:keypress="enviar = false"
          placeholder="E-mail:"
          required
        />
      </div>
            <div class="senha">
        <input
          type="password"
          v-model="senha_form"
          v-on:keypress="enviar = false"
          placeholder="Senha:"
          required
        />
      </div>
      <div class="confirmacao_senha">
        <input
          type="password"
          v-model="confirmacao_senha_form"
          v-on:keypress="enviar = false"
          placeholder="Confirme sua senha:"
          required
        />
      </div>
      <div class="telefone">
        <input
          type="text"
          v-model="telefone_form"
          v-on:keypress="enviar = false"
          placeholder="Tel.:"
          required
        />
      </div>
      <div class="cpf">
        <input
          type="text"
          v-model="cpf_form"
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
      <button type="submit" v-if= "enviar=true">Realizar Cadastro</button>
    </form>

    </div>
    <div id="msgErro"><p>{{ msgErro }}</p></div>
  </div>

</template>

<style scoped>
.nome_atual, .email-atual, .tel-atual{
  background-color:white ;
  border-radius: 20px;
  width: 500px;
  height: 40px;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  text-align: left;
  padding-left: 10px ;
}
#area-preenchimento{
  margin-left: 50px;

}
  #pag-login{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

#area-finalizada{
  background-color: #003e8faf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.img_atual {
  width: '80%';
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 15px;
  background-color: white ;
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
  border-color: rgba(255, 255, 255, 0.726);
  color:#003e8faf;
    font-size: 35px;
    padding: 10px;
}
button:hover{
  box-shadow: inset 0 0 15px #003e8faf;

}
</style>

