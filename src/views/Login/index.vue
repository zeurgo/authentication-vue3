<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="flex-1 flex items-center justify-center py-10 lg:px-24 px-8 text-primary-dark lg:min-h-screen"
    >
      <div class="max-w-lg">
        <img
          src="../../assets/images/logo.svg"
          class="w-40 mb-10"
        />

        <form @submit="onSubmit">
          <h1 class="text-3xl font-semibold">Welcome to ChatFood</h1>
          <div class="text-sm mt-8">It's good to see you again!</div>
          <div class="text-sm mt-2 mb-10">
            Type your login information and we will take you to your dashboard
            right away.
          </div>

          <app-input
            label="Email"
            type="email"
            placeholder="Enter email"
            required
            :disabled="state.isLoading"
            :error="state.email.errorMessage"
            v-model="state.email.value"
          ></app-input>

          <app-input
            label="Password"
            type="password"
            placeholder="Password"
            required
            :disabled="state.isLoading"
            :error="state.password.errorMessage"
            v-model="state.password.value"
          ></app-input>

          <app-button type="submit" :disabled="state.isLoading" :loading="state.isLoading">Login</app-button>

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
import { useRoute, useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '@/utils/validators'
import services from '@/services/index'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'

export default {
  components: { AppButton, AppInput },

  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const { setValues, handleSubmit } = useForm()

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)
    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      },
      isLoading: false
    })

    setValues({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })

    const onSubmit = handleSubmit(async (values) => {
      state.isLoading = true
      try {
        const response = await services.auth.login({ email: state.email.value, password: state.password.value })

        if (response.data) {
          store.commit('setToken', response.data.token)

          route.query.redirect
            ? router.push({ name: route.query.redirect })
            : router.push({ name: 'Dashboard' })
        }
      } catch (error) {
        console.log('Ocorreu um erro ao fazer o login ')
      } finally {
        state.isLoading = false
      }
    })

    return {
      state,
      route,
      onSubmit
    }
  }
}
</script>
