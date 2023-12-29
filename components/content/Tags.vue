<!-- ./components/Tags.vue -->

<script setup>
// import icon

// tag list state
const expanded = ref(false)

// helper function to flatten tags array
function flatten(tags, key) {
  const _tags = tags
    .map((tag) => {
      let _tag = tag
      if (tag[key]) {
        const flattened = flatten(tag[key])
        _tag = flattened
      }
      return _tag
    })
    .flat(1)

  return _tags
}

// function to toggle expanded state
function toggleExpand() {
  expanded.value = !expanded.value
}

// get only tags data from `/blog`
const { data } = await useAsyncData('tags', () => queryContent('artikel').only(['tags']).find())

// generate array without duplicates from flattened array
const artikelTags = [...new Set(flatten(data.value, 'tags'))]
</script>

<template>
  <div class="tag-list" :class="{ active: expanded }">
    <!-- Button to toggle expand -->
    <button class="cta w-icon" @click="toggleExpand">
      <UIcon name="i-basil-bookmark-outline">
        <span>Tags</span>
      </uicon>
    </button>
    <ul class="artikel-tags" :class="{ expanded }">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in artikelTags" :key="n" class="tag">
        <NuxtLink :to="`/artikel/tags/${tag}`" class="font-semibold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ... */
.tag-list {
  @apply flex items-center gap-2 p-2 border border-transparent  rounded-lg;
}
.tag-list.active {
  @apply border-slate-200;
}
.artikel-tags {
  @apply transition-all max-w-0 overflow-hidden;
}
.artikel-tags.expanded {
  @apply max-w-full;
}
</style>
