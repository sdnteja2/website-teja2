<script setup>
defineProps({
  title: {
    type: String,
    default: 'Wujudkan Impian Pendidikan Berkualitas untuk Semua',
  },
  description: {
    type: String,
    default: 'Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },
  image: {
    type: String,
    default: '/guru/yusup.jpg',
  },
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="max-w-4xl pb-8 text-center mx-auto">
        <h1 data-aos="fade-up" class="block text-2xl font-extrabold  sm:text-4xl  ">
          SDN Teja 2 <span class="dark:text-gray-200 text-slate-800"> <br>
            {{ title }}
          </span>
        </h1>
        <p data-aos="fade-up" class="mt-3 text-lg ">
          {{ description }}}
        </p>
      </div>

      <div data-aos="fade-up" class="max-w-3xl mx-auto">
        <NuxtImg
          :src="image"
          loading="lazy"
          title="SDN Teja II"
          width="250"
          height="100"
          class="w-full h-[350px]  max-w-full object-cover rounded-md"
          alt="SDN Teja II"
        />
      </div>
    </div>
  </div>
<!-- End Hero -->
</template>
