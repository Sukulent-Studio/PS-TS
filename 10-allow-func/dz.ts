const check = (a: number) => {
    console.log(a)
    return a > 0
}

function allowFunc(criteria: (val: number) => boolean) {
    const valueKey = Symbol();
    
    return function (
        target: any,
        propertyKey: string
    ) {
        const getter = function(this: any) {
            return this[valueKey];
        }

        const setter = function(this: any, newVal: number) {
            if (criteria(newVal)) {
                this[valueKey] = newVal;
            } else {
                console.log("wrong value");
            }
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true
        })
    }
}

class User {
  @allowFunc(check)
  age: number = 30;
}

const person1 = new User();

console.log(person1.age); // 30
person1.age = 0; // "wrong value"
console.log(person1.age); // 30

person1.age = 20;
console.log(person1.age); // 20

console.log(person1.age); // 20 
