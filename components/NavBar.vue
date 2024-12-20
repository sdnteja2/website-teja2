<script lang="ts" setup>
const route = useRoute()
const link = [
  { label: 'Home', path: '/' },
  { label: 'Artikel', path: '/artikel' },
]
</script>

<template>
  <div class="maxw-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="flex  space-x-4">
      <div v-for="item in link" :key="item.path">
        <NuxtLink :to="item.path">
          <div class="bg-green-500 p-2 rounded" :class="{ 'text-red-500  bg-red-900': route.path === item.path, 'text-blue-500': route.path !== item.path }">
            {{ item.label }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
