import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setStorage, getStorage } from '@/utils/storage.js'

export const useUserStore = defineStore('user', () => {
  const token = ref(null)
  token.value = getStorage('token') || null
  
  const user = ref(null)
  // 设置token
  function setToken(value) {
    token.value = value
    setStorage('token', value)
  }

  async function setUser(value) {
    user.value = value
  }
  
  return { token, user, setToken, setUser }
})
