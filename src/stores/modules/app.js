import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const asideWidth = ref(200)

  return { asideWidth }
})