import {MOCKS_AUTO_COMPLETE, MOCKS_STACKS} from "~/MOCKS";
import type {Stack, StackAutocomplete} from "~/types";

const search = ref('')
const autoCompleteResults = ref<StackAutocomplete[]>([])
const stackSelected = ref<Stack | undefined>()
const isFocused = ref(false);

export const useSearchBar = () => {

    const onSelect = async (item?: StackAutocomplete ) => {
        if (!item) {
            if (autoCompleteResults.value.length === 0) return
            item = autoCompleteResults.value[0]
        }

        search.value = item.label
        stackSelected.value = await fetchStack(item.value)
        autoCompleteResults.value = []
    }

    const fetchAutoComplete = async () => {
        return MOCKS_AUTO_COMPLETE.filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase()))
    }

    const fetchStack = async (stackName: string) => {
        return MOCKS_STACKS.find((item) => item.name.toLowerCase().includes(stackName.toLowerCase() ?? ''))
    }

    return {
        search,
        onSelect,
        autoCompleteResults,
        isFocused,
        stackSelected,
        fetchAutoComplete,
        fetchStack
    }
}