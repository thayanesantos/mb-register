<script setup>
import TheButton from './TheButton.vue';

import { ref, reactive } from 'vue'

const formData = reactive({});
const registerSuccess = ref(false)

const typePerson = ref('cpf')
const password = ref('');

const currentPage = ref(1);
const totalPages = 6;
const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};


const submitForm = async () => {
  const url = "http://localhost:3000/registration"
  try {
    const response = await fetch(url, {
      mode:  'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    
    if(response.status === 200){
       console.log('registerSuccess')
    }
    console.log('Server response:', data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

</script>

<template>
    <div class="d-flex d-reverse">
      <div class="d-flex">
        <TheButton key="1" light text="Voltar" 
        @click="prevPage" :disabled="currentPage === 1" v-show="currentPage !== 1" />
        <TheButton key="2" dark="true" text="Continuar" v-show="currentPage !== 4"
        @click="nextPage" :disabled="currentPage === totalPages"/>
        <TheButton key="3" dark="true" text="Cadastrar"  v-show="currentPage === 4"
        @click="submitForm"/>
      </div>

      <div v-if="currentPage === 1" class="d-flex d-direction">
        <span>Etapa 1 de 4</span>
        <h1>Seja bem vindo(a)</h1>
        <form action="">
            <label for="email">Endereço de e-mail</label>
            <input type="text" id="email" name="email" v-model="email">
            <p>Tipo de cadastro: {{ typePerson }}</p>
            <input type="radio" id="cpf" value="cpf" v-model="typePerson" />
            <label for="cpf">Pessoa física</label>
            <input type="radio" id="cnpj" value="cnpj" v-model="typePerson" />
            <label for="cnpj">Pessoa jurídica</label>
        </form>
      </div>
      <div v-else-if="currentPage === 2 && typePerson == 'cpf'" class="d-flex d-direction">
        <span>Etapa 2 de 4</span>
        <h1>Pessoa Física</h1>
        <form action="">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" v-model="name">

            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" v-model="cpf">
            
            <label for="dateBirth">Data de nascimento</label>
            <input type="text" id="dateBirth" name="dateBirth" v-model="dateBirth">
            
            <label for="phone">Telefone</label>
            <input type="text" id="phone" name="phone" v-model="phone">
        </form>
      </div>
      <div v-else-if="currentPage === 2 && typePerson == 'cnpj'" class="d-flex d-direction">
        <span>Etapa 2 de 4</span>
        <h1>Pessoa jurídica</h1>
        <form action="">
            <label for="razaoSocial">Razão social</label>
            <input type="text" id="razaoSocial" name="razaoSocial" v-model="razaoSocial">

            <label for="cnpj">CNPJ</label>
            <input type="text" id="cnpj" name="cnpj" v-model="cnpj">
            
            <label for="dateOpened">Data de abertura</label>
            <input type="text" id="dateOpened" name="dateOpened" v-model="dateOpened">
            
            <label for="phone">Telefone</label>
            <input type="text" id="phone" name="phone" v-model="phone">
        </form>
      </div>

      <div v-else-if="currentPage === 3" class="d-flex d-direction">
        <span>Etapa 3 de 4</span>
        <h1>Senha de acesso</h1>
        <form action="">
          <label for="password">Sua senha</label>
          <input type="password" id="password" name="password" v-model="password" />
        </form>
      </div>

      <div v-else-if="currentPage === 4 && typePerson == 'cpf'" >
        <span>Etapa 4 de 4</span>
        <h1>Revise suas informações</h1>
        <h2>Cadastro pessoa física</h2>
        <form action="submitForm" method="post" @submit.prevent="submitForm">
          <label for="email">Endereço de e-mail</label>
          <input type="text" id="email" name="email" v-model="formData.email" />

          <label for="name">Nome</label>
          <input type="text" id="name" name="name" v-model="formData.name" />

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" v-model="formData.cpf" />
          
          <label for="dateBirth">Data de nascimento</label>
          <input type="text" id="dateBirth" name="dateBirth" v-model="formData.dateBirth" />
          
          <label for="phone">Telefone</label>
          <input type="text" id="phone" name="phone" v-model="formData.phone" />

          <label for="password">Sua senha</label>
          <input type="password" id="password" name="password" v-model="formData.password" />
        </form>
      </div>

      <div v-else-if="currentPage === 4 && typePerson == 'cnpj'">
        <span>Etapa 4 de 4</span>
        <h1>Revise suas informações</h1>
        <h2>Cadastro pessoa jurídica</h2>
        <form action="" method="post" @submit.prevent="submitForm" >
          <label for="email">Endereço de e-mail</label>
          <input type="text" id="email" name="email" v-model="formData.email" />
  
          <label for="razaoSocial">Razão social</label>
          <input type="text" id="razaoSocial" name="razaoSocial" v-model="formData.razaoSocial" />
  
          <label for="cnpj">CNPJ</label>
          <input type="text" id="cnpj" name="cnpj" v-model="formData.cnpj" />
          
          <label for="dateOpened">Data de abertura</label>
          <input type="text" id="dateOpened" name="dateOpened" v-model="formData.dateOpened" />
          
          <label for="phone">Telefone</label>
          <input type="text" id="phone" name="phone" v-model="formData.phone" />
  
          <label for="password">Sua senha</label>
          <input type="password" id="password" name="password" v-model="formData.password" />
        </form>
      </div>

      <div v-else="registerSuccess === true">
        <span>Register steps complete!</span>
      </div>
    </div>
</template>

<style scoped>
input[type=text] {
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #081c1c;
  border-radius: 8px;
}
input[type=password] {
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #081c1c;
  border-radius: 8px;
}

.d-flex{
    display: flex;
}
.d-direction{
    flex-direction: column;
}
.d-reverse{
  flex-direction: column-reverse;
}
</style>