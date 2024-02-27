<script setup lang="ts">
defineProps({
  showDivider: {
    type: Boolean,
    default: false
  },
  spacing: {
    type: Number,
    default: 8
  }
})
</script>

<template>
<hr :class="showDivider ? '' : 'hide-divider'" :style="{ marginTop: 'var(--space-' + spacing + ')', marginBottom: 'var(--space-' + spacing + ')' }">
</template>

<style scoped lang="ts">
css({
  '.hide-divider': {
    'visibility': 'hidden'
  }
})
</style>