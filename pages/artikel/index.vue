<script setup lang="ts">
const { data: artikels } = await useAsyncData('artikel', () => queryCollection('artikel').all())
</script>

<template>
  <div>
    <h1>List artikel</h1>
    <ul>
      <li v-for="artikel in artikels" :key="artikel.id">
        <NuxtLink :to="artikel.path">
          {{ artikel.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
