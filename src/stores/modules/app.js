import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const asideWidth = ref(200)
  const menu = ref(null)
  
  function setMenu(val) {
    menu.value = val
    console.log('menu=>',menu.value)
  }
  return { asideWidth, menu, setMenu }
})
