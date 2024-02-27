<script lang="ts" setup>
const { navigation } = useContent()

const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}
</script>

<template>
  <nav>
    <ul class="in-overlay">
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          @click="handleClick"
        >
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@sm': {
        gap: '{space.8}',
      },
    a: {
        position: 'relative',
        fontFamily: '{font.serif}',
        '&.router-link-active': {
          color: '{color.secondary.800}'
        },
        '&:hover': {
          color: '{color.secondary.800}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  },
  '.overlay': {
    '.in-overlay': {
      display: 'block',
      li: {
        marginBottom: '{space.2}',
      }
    }
  }
})
</style>
