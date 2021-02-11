<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="flex-1 flex items-center justify-center py-10 lg:px-24 px-8 text-primary-dark lg:min-h-screen"
    >
      <div class="max-w-lg">
        <img
          src="../../assets/images/logo.svg"
          class="w-40 mb-10"
          alt="ChatFood brand logo - Link to home page, which has an overview of the ChatFood online ordering system"
        />

        <form @submit.prevent="handleSubmit">
          <h1 class="text-3xl font-semibold">Welcome to ChatFood</h1>
          <div class="text-sm mt-8">It's good to see you again!</div>
          <div class="text-sm mt-2 mb-10">
            Type your login information and we will take you to your dashboard
            right away.
          </div>

          <app-input label="Email" type="email" placeholder="Enter email" required v-model="state.user.email"></app-input>
          <app-input label="Password" type="password" placeholder="Password" required v-model="state.user.password"></app-input>
          <app-button type="submit">Login</app-button>

          <p class="text-sm flex justify-center mt-6">
            <span class="mr-1">Dont't have an account?</span>
            <router-link to="/" class="text-primary cursor-pointer hover:underline">Signup now</router-link>
          </p>
        </form>
      </div>
    </div>

    <div
      class="flex-1 flex items-center justify-center py-10 lg:px-24 px-8 text-white bg-primary-darkest lg:min-h-screen"
    >
      <div class="max-w-lg">
        <h1 class="text-3xl font-semibold">What our clients say</h1>
        <div class="text-xl font-medium mt-8">
          "ChatFood is a solution tailored to food and beverage businesses. The
          customer service is second to none"
        </div>
        <div class="text-sm text-primary-light mt-6">Ziad, Kaa’k Al Manara</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import { httpClient } from '@/services/index'

export default {
  components: { AppButton, AppInput },

  setup () {
    const store = useStore()
    const state = reactive({
      user: {
        email: '',
        password: ''
      }
    })

    async function handleSubmit () {
      try {
        const response = await httpClient.post('/UsuariosAutenticar', { email: state.user.email, password: state.user.password })
        if (response.data.sucesso) {
          store.commit('setToken', response.data.dados.token)
        }
      } catch (error) {
        //
      }
    }

    return {
      state,
      handleSubmit
    }
  }
}
</script>
