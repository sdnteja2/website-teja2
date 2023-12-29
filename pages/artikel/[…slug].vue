<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  const artikel = queryContent().where({ _path: path }).findOne()
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  const surround = queryContent().only(['_path', 'title', 'description']).sort({ date: 1 }).findSurround(path)

  return {
    artikel: await artikel,
    surround: await surround,
  }
})

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround

// set the meta
useHead({
  title: data.value.artikel.title,
  meta: [
    { name: 'description', content: data.value.artikel.description },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://site.com/${data.value.artikel.img}`,
    },
  ],
})
</script>

<template>
  <main id="main" class="artikel-main">
    <header v-if="data.artikel" class="artikel-header">
      <div class="img-cont h-72 mb-12">
        <img :src="`/${data.artikel.img}`" :alt="data.artikel.title" class=" rounded-2xl">
      </div>
      <h1 class="heading">
        {{ data.artikel.title }}
      </h1>
      <p class="supporting">
        {{ data.artikel.description }}
      </p>
      <ul class="artikel-tags">
        <li v-for="(tag, n) in data.artikel.tags" :key="n" class="tag">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr>
    <section class="artikel-section">
      <aside class="aside">
        <!-- Toc Component -->
        <Toc :links="data.artikel.body.toc.links" />
      </aside>
      <artikel class="artikel prose dark:prose-invert">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.artikel">
          <!-- render rich text from document
          <MarkdownRenderer :value="data.artikel" /> -->

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </artikel>
    </section>

    <!-- PrevNext Component -->
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<style scoped>
.artikel-main {
  @apply p-4 max-w-5xl m-auto;
}

.artikel-header {
  @apply p-4 pb-12;
}

.artikel-header .heading {
  @apply font-extrabold text-5xl;
}

.artikel-header .supporting {
  @apply font-medium text-lg;
}

.artikel-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.artikel {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
</style>
