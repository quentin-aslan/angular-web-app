<template>
  <section class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="flex flex-col gap-4">
        <header class="flex flex-row items-center justify-between">
          <h1 class="text-4xl font-bold">{{ stackSelected?.name }}</h1>
<!--          <img class="w-32 h-32" :src="stackSelected?.logo_url" :alt="`${stackSelected?.name} logo`">-->
        </header>
        <div class="flex flex-row gap-10">
          <div v-if="stackSelected?.backend_stack" class="badge badge-primary">Backend</div>
          <div  v-if="stackSelected?.frontend_stack" class="badge badge-secondary">Frontend</div>
        </div>
        <p class="">
          Latest Version : <span class="font-semibold">{{ stackSelected?.last_version }}</span>
        </p>
        <p>
          Documentation Link :  <a class="underline hover:font-semibold hover:-translate-x-1.5" :href="stackSelected?.documentation_link ?? '#'" target="_blank">{{ stackSelected?.documentation_link }}</a>
        </p>
        <div role="alert" class="alert">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info h-6 w-6 shrink-0">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-lg font-semibold">{{ stackSelected?.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

const { stackSelected } = useSearchBar()
</script>