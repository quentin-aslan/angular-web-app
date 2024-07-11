<template>
  <section class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title font-light">Type a language library or a framework name to get the definition and some information</h2>
      <label class="input input-bordered flex items-center gap-2">
        <input
            rel="searchEl"
            v-model="search"
            @input="onStackInputChange"
            @focus="isFocused = true"
            @blur="onBlur"
            @keydown.enter="onEnter"
            type="text" class="grow font-bold text-acensi" placeholder="Search" />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
          <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
        </svg>
      </label>
      <SearchBarAutocomplete v-if="autoCompleteResults.length > 0 && isFocused" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import {debounce} from "~/utils";

const { search, autoCompleteResults, onSelect, fetchAutoComplete } = useSearchBar()
const isFocused = ref(false);

const onStackInputChange = debounce(async () => {
  if (search.value === '') {
    autoCompleteResults.value = []
    return
  }
  autoCompleteResults.value = await fetchAutoComplete()
}, 300)

const onEnter = (e: KeyboardEvent) => {
  e.preventDefault()
  onSelect()
};

const onBlur = () => {
  setTimeout(() => {
    isFocused.value = false
  }, 300)
};
</script>