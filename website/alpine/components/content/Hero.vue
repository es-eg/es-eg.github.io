<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imagePosition: {
    type: String,
    default: 'right'
  },
  ratioHeight: {
    type: String,
    default: "9"
  },
  ratioWidth: {
    type: String,
    default: "16"
  }
})

const cssVars = () => {
  return {
    '--ratio-width': props.ratioWidth,
    '--ratio-height': props.ratioHeight,
  }
}
</script>

<template>
  <section class="hero">
    <div class="layout">
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
          </ContentSlot>
        </div>
        <div class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
          </ContentSlot>
        </div>
      </div>
      <NuxtImg
        v-if="image"
        :class="imagePosition"
        :src="image"
        :alt="imageAlt"
        :width="ratioWidth"
        :height="ratioHeight"
        :style="cssVars()"
      />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.hero': {
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      '@lg': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      '.title': {
        fontFamily: '{font.serif}',
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
        fontWeight: '{fontWeight.bold}',
      },
      '.description': {
        marginTop: '{space.3}',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
      },
      img: {
        width: '100%',
        aspectRatio: '{ratio-width} / {ratio-height}',
        objectFit: 'cover',
        borderRadius: '{radii.md}',
        '@lg': {
          '&.left': {
            order: -1
          }
        }
      },
    }
  }
})
</style>
