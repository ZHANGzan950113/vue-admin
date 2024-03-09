<template>
  <svg class="icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>  
import { computed } from 'vue';
const props = defineProps({
  className: String
})
const iconName = computed(() => {
  console.log(props,'props')
  return `#icon-${props.className}`
})

</script>

<style lang='scss' scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>