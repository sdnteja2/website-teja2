<template>
  <nav>
    <header class=" dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">
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

          <UPopover class="md:hidden">
            <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
            <template #panel>
              <div class="p-4">
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
            </template>
          </UPopover>
        </div>
      </div>
    </header>
  </nav>
</template>
