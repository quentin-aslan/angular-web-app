<template>
  <section class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold">Stack Definition</h1>
        <p class="text-lg">This is the definition of the stack you searched for</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { stackSelected } = useSearchBar()

onMounted(() => {

})

</script>