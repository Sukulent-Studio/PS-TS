const user = {
  name: "Vasiliy",
  age: 8,
  skills: ['typescript', 'javascript']
}

type PickFuncType<T, K extends keyof T> = {
    [key in K]: T[key]
}

type dsds = PickFuncType<typeof user, "age" | "skills">


function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]): PickFuncType<T, K> {
    const res = {} as PickFuncType<T, K>;
    
    for (const key of keys) {
        res[key] = obj[key]
    }

    return res
    
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);