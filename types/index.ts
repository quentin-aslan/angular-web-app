export type StackAutocomplete = {
    value: string
    label: string
}

export enum STACK_TYPE{
    LANGUAGE = 'LANGUAGE',
    FRAMEWORK = 'FRAMEWORK',
    LIBRAIRIE = 'LIBRAIRIE'
}

export type Stack = {
    name: string,
    documentation_link: string
    stack_type: STACK_TYPE,
    last_version: string,
    description: string,
    languages?: string | null,
    frontend_stack: boolean,
    backend_stack: boolean
    logo_url: string
}
