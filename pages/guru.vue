<template>
  <UContainer>
    <ul>
      ok
    </ul>
  </UContainer>
</template>


<script setup>
const guru = await queryContent('/guru').findOne()
console.log(guru)

</script>
