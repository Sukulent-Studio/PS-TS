interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

type Difference<T extends object, E extends object> = Omit<T, keyof E>;

function difference<T extends object, E extends object>(obj: T, exObj: E): Difference<T, E> {
    const excludedKeys = new Set(Object.keys(exObj))

    const res = Object.fromEntries(
        Object.entries(obj).filter(([key]) => !excludedKeys.has(key))
    )

    return res as Difference<T, E>
}

let v0 = difference(a, b);
console.log(v0)