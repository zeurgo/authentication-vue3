<template>
  <header class="px-8 shadow-sm">
    <div class="flex justify-between items-center h-28">
      <img
        src="../../../assets/images/logo.svg"
        class="h-28 -ml-6 cursor-pointer"
        @click="goPage('Home')"
      />
      <nav>
        <ul v-if="!isAuthenticated" class="flex items-center">
          <li><app-button @click="goPage('Login')">Login</app-button></li>
        </ul>
        <ul v-else class="flex items-center -mr-4">
          <li><app-button text @click="goPage('Dashboard')">Dashboard</app-button></li>
          <li><app-button text @click="logout()">Logout</app-button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppButton from '@/components/ui/AppButton'

export default {
  components: {
    AppButton
  },

  setup () {
    const router = useRouter()
    const store = useStore()

    function goPage (page) {
      router.push({ name: page })
    }

    function logout () {
      store.commit('logout')
      goPage('Home')
    }

    return {
      goPage,
      logout,
      isAuthenticated: computed(() => store.getters.isAuthenticated)
    }
  }
}
</script>
