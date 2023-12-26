<script setup>
// Remove the unused import statement for ref
// import { ref } from 'vue'

function togglePopover(open, close) {
  if (open)
    close()
}
</script>

<template>
  <nav>
    <header class="shadow-sm fixed z-50 top-0 w-full dark:backdrop-blur-md dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md bg-slate-50 dark:bg-slate-950">
      <UContainer class="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-2">
          Logo
        </a>
        <div class="flex items-center">
          <div class="flex justify-end">
            <AppColorModeButton />
          </div>
          <div class="hidden md:block">
            <ContentNavigation v-slot="{ navigation }">
              <ul class="flex">
                <li v-for="link of navigation" :key="link._path">
                  <NuxtLink :to="link._path">
                    {{ link.title }}
                  </NuxtLink>
                </li>
              </ul>
            </ContentNavigation>
          </div>
          <div class="md:hidden">
            <UPopover :popper="{ placement: 'top-end', arrow: true }">
              <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
              <template #panel="{ open, close }">
                <div class="p-4 dark:backdrop-blur-md dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md bg-slate-50 dark:bg-slate-950">
                  <ContentNavigation v-slot="{ navigation }">
                    <ul class="flex flex-col space-y-4">
                      <li v-for="link of navigation" :key="link._path">
                        <NuxtLink :to="link._path" @click="togglePopover(open, close)">
                          <span class="underline-fx">
                            {{ link.title }}
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </ContentNavigation>
                </div>
              </template>
            </UPopover>
          </div>
        </div>
      </UContainer>
    </header>
  </nav>
</template>
