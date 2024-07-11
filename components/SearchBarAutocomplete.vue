<template>
  <section class="border-2 border-acensi rounded-lg">
    <ul>
      <li v-for="(item, index) of autoCompleteResults" :key="index" @click="() => onSelect(item)"
          class="text-lg text-acensi font-semibold cursor-pointer hover:bg-acensi hover:text-white p-2"
          :class="{
            'bg-acensi': index === 0,
            'text-white': index === 0
          }"
          v-focus="index === 0"
      >
        {{ item.label }}
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
const { autoCompleteResults, onSelect } = useSearchBar()
const vFocus = {
  mounted: (el) => el.focus()
}
</script>