const obj: Record<string, number> = {
  a: 1,
  b: 2
}

function swapKeysAndValues<K extends string | number | symbol, 
V extends string | number | symbol>(obj: Record<K, V>): Record<V, K> {
    const result = {} as Record<V, K>;
    const keys = Reflect.ownKeys(obj) as K[]

    for (const key of keys) {
        result[obj[key]] = key;
    }

    return result;
}

console.log(obj);
console.log(swapKeysAndValues(obj));