declare module 'sort-by' {
    export function sortBy(...args: readonly [string, ...string[]]): <T>(a: T, b: T) => number
}