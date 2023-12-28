<script setup>
defineProps({
  nama: {
    type: String,
    default: 'Default title',
  },
  sambutan: {
    type: String,
    default: 'Default description',
  },
  jabatan: {
    type: String,
    default: 'Default description',
  },
  image: {
    type: String,
    default: '/guru/yusup.jpg',
  },
})
</script>

<template>
  <div class="py-16 ">
    <UContainer class="bg-merah patternbg dark:bg-merah-900">
      <!-- Testimonials -->
      <div class="max-w-[85rem] py-10  lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div class="relative">
              <NuxtImg class="rounded-md  h-[450px]  w-full object-cover" height="500" width="350" :src="image" :alt="nama">
            </div>
          </div>
          <!-- End Col -->

          <div>
            <!-- Blockquote -->
            <blockquote class="relative">
              <div class="relative z-10">
                <p class="text-sm font-semibold  tracking-wide uppercase mb-3 text-gray-200 ">
                  Selayang Pandang
                </p>

                <p class="text-xl font-medium   md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-300 ">
                  {{ sambutan }}
                </p>
              </div>

              <div class="mt-6">
                <div class="flex items-center">
                  <div class="sm:hidden flex-shrink-0 ">
                    <NuxtImg class="rounded-full ring-1 ring-merah object-cover object-center h-16 w-16 " :src="image" :alt="nama">
                  </div>
                  <div class="ms-4 md:ms-0">
                    <div class="md:text-xl font-semibold  text-gray-100 ">
                      {{ nama }}
                    </div>
                    <div class="text-sm dark:text-gray-300">
                      {{ jabatan }}
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
            <!-- End Blockquote -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Testimonials -->
    </UContainer>
  </div>
</template>

<style scoped></style>
