export function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null
    return function (...args: Parameters<T>): void {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}