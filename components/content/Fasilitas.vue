<script lang="ts" setup>
const fasilitas = ref([
  'Lab. Komputer',
  'Ruang Perpustakaan',
  'Taman Baca',
  'Lapangan Olahraga',

  'Ruang UKS',
])
</script>

<template>
  <div class="my-20 md:my-24 mx-auto">
    <UContainer class="md:grid md:grid-cols-2 md:items-center md:gap-12 ">
      <div class="items-center flex">
        <img class="rounded-md shadow bg-cover" src="/image/test2.webp" alt="Image Description">
      </div>

      <div>
        <div class="mt-4 md:mt-0">
          <h2 class="md:text-2xl text-lg text-center md:text-left  ">
            Fasilitas SDN Teja II
          </h2>
          <ul role="list" class="space-y-3 sm:space-y-4">
            <li v-for="appfasilitas in fasilitas" :key="appfasilitas" class="flex space-x-3">
              <UCard class="w-full ">
                <div class="flex items-center ">
                  <div class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-800/30 text-merah-500">
                    <UIcon name="i-basil-check-outline" class="h-6 w-6" />
                  </div>

                  <p class="text-sm ml-2 sm:text-base ">
                    <span class="font-bold"> {{ appfasilitas }}
                    </span>
                  </p>
                </div>
              </UCard>
            </li>
          </ul>
        </div>
      </div>
    </Ucontainer>
  </div>
</template>

<style scoped></style>
