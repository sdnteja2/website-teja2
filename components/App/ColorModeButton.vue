<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <UButton
    class="mr-2"
    :icon="isDark ? 'i-basil-moon-solid' : 'i-basil-sun-outline'"

    variant="ghost"
    aria-label="Theme"

    @click="isDark = !isDark"
  />
</template>
