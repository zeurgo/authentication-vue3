<template>
  <header class="px-8">
    <div class="flex justify-between items-center h-28">
      <img
        src="../../assets/images/logo.svg"
        class="h-28 -ml-6 cursor-pointer"
      />
      <nav>
        <ul class="flex items-center">
          <li>
            <router-link to="/" class="text-gray px-8 cursor-pointer">Signup</router-link>
          </li>
          <li>
            <app-button @click="goPage()">Login</app-button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'
import AppButton from '@/components/ui/AppButton'

export default {
  components: {
    AppButton
  },

  setup () {
    const router = useRouter()

    function goPage () {
      router.push({ name: 'Login' })
    }

    return {
      goPage
    }
  }
}
</script>
