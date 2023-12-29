<!-- ./pages/blog/index.vue -->

<script setup>
definePageMeta({
  key: route => route.fullPath,
})

// get tag query
const {
  query: { tags },
} = useRoute()

const filter = ref(tags?.split(','))
</script>

<template>
  <UContainer>
    <main>
      <header class="page-heading">
        <div class="wrapper">
          <h1 class="text-5xl font-extrabold">
            All artikels
          </h1>
          <p class="font-medium text-lg">
            Here's a list of all my great artikels
          </p>
        </div>
      </header>
      <section class="page-section">
        <Tags />

        <!-- Render list of all artikels in ./content/blog using `path` -->
        <!-- Provide only defined fieldsin the `:query` prop -->
        <ContentList
          path="/artikel"
          :query="{
            only: ['title', 'description', 'tags', '_path', 'img'],
            where: {
              tags: {
                $contains: filter,
              },
            },
            $sensitivity: 'base',
          }"
        >
          <!-- Default list slot -->
          <template #default="{ list }">
            <ul class="artikel-list">
              <li v-for="artikel in list" :key="artikel._path" class="artikel-item">
                <NuxtLink :to="artikel._path">
                  <div class="wrapper">
                    <div class="img-cont w-32 shrink-0">
                      <img :src="`/${artikel.img}`" :alt="artikel.title" class="rounded-lg max-h-[8rem]">
                    </div>
                    <header>
                      <h1 class="text-2xl font-semibold">
                        {{ artikel.title }}
                      </h1>
                      <p>{{ artikel.description }}</p>
                      <ul class="artikel-tags">
                        <li v-for="(tag, n) in artikel.tags" :key="n" class="tag !py-0.5">
                          {{ tag }}
                        </li>
                      </ul>
                    </header>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </template>

          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No artikels found.</p>
          </template>
        </ContentList>
      </section>
    </main>
  </Ucontainer>
</template>
