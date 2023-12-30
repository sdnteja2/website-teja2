<script lang="ts" setup>
const pageTitle = 'SDN Teja 2'
useSeoMeta({
  ogImage: '[og:image]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'id',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
defineOgImageComponent('Page', {
  title: pageTitle,
})
</script>

<template>
  <main>
    <ContentDoc path="/" />
  </main>
</template>
