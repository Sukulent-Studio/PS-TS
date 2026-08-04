const user = {
  name: "Vasiliy",
  age: 8,
  skills: ['typescript', 'javascript']
}

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
    const res = new Map<string, any>()
    
    for (const key of keys) {
        res.set(key as string, obj[key])
    }
    return res
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);