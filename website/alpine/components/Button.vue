<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    backgroundColor: '{color.secondary.800}',
    backgroundImage: 'linear-gradient(to right, {color.secondary.800} 0%, {color.primary.500} 100%)',
    color: '{color.gray.100}',
    textTransform: 'uppercase',
    fontFamily: '{font.serif}',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    fontWeight: '{fontWeight.medium}',
    py: '{space.2}',
    px: '{space.4}',
    borderRadius: '{radii.md}',
    '@md': {
      fontSize: '{text.base.fontSize}',
      lineHeight: '{text.base.lineHeight}',
      py: '{space.3}',
      px: '{space.6}',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.35'
    }
  }
})
</style>
