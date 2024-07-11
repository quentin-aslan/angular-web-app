<template>
  <main class="px-4 lg:px-20 flex flex-col gap-10">
    <SearchBar />
    <StackDef v-if="stackSelected" />
  </main>
</template>
<script lang="ts" setup>
const { stackSelected } = useSearchBar()
</script>