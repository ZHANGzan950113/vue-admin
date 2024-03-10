<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onActivated, onMounted } from 'vue'

onMounted(async () => {
  console.log('onActivated')
})
</script>

<template>
  <RouterView />
</template>
