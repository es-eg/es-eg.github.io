<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import ProjectsListItem from "~/alpine/components/content/ProjectsListItem.vue";

const props = defineProps({
  path: {
    type: String,
    default: 'projekte'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData('articles', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const projekte = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="projekte?.length" class="projekt-liste">
    <div class="layout">
      <ProjectsListItem v-for="(article, index) in projekte" :key="index" :article="article" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Noch keine Projekte konfiguriert</p>
    <p>
      Füge eine Markdown Datei in dem <ProseCodeInline>projekte</ProseCodeInline> Ordner hinzu.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.projekt-liste': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>
