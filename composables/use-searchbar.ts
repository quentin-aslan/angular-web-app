import {MOCKS_AUTO_COMPLETE} from "~/MOCKS";
import type {StackAutocomplete} from "~/types";

const search = ref('')
const autoCompleteResults = ref<StackAutocomplete[]>([])
const stackSelected = ref<StackAutocomplete | null>(null)
const isFocused = ref(false);

export const useSearchBar = () => {

    const onSelect = (item?: StackAutocomplete ) => {
        if (!item) {
            if (autoCompleteResults.value.length === 0) return
            item = autoCompleteResults.value[0]
        }

        stackSelected.value = item
        search.value = item.label
        autoCompleteResults.value = []
    }

    const fetchAutoComplete = async () => {
        return MOCKS_AUTO_COMPLETE.filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase()))
    }

    const fetchStack = async () => {

    }

    return {
        search,
        onSelect,
        autoCompleteResults,
        isFocused,
        stackSelected,
        fetchAutoComplete
    }
}