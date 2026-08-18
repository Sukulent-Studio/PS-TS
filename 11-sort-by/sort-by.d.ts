declare module 'sort-by' {
    export default function sortBy(...args: readonly [string, ...string[]]): <T extends Record<string, unknown>>(a: T, b: T) => number
}