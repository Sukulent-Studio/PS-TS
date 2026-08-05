const check = (a: number) => {
    return a > 0;
}

function allowFunc<This, Value extends number>(criteria: (val: Value) => boolean) {
    // Возвращаем декоратор accessor
    return function (
        target: ClassAccessorDecoratorTarget<This, Value>,
        context: ClassAccessorDecoratorContext<This, Value>
    ): ClassAccessorDecoratorResult<This, Value> {
        
        return {
            // Перехватываем чтение
            get(this: This) {
                // target.get вызывает оригинальный скрытый геттер
                return target.get.call(this);
            },

            // Перехватываем запись
            set(this: This, value: Value) {
                if (criteria(value)) {
                    target.set.call(this, value);
                } else {
                    console.log("wrong value");
                }
            },

            // Перехватываем начальную инициализацию (если поле задано прямо в классе, например: accessor age = -5)
            init(this: This, value: Value): Value {
                if (criteria(value)) {
                    return value;
                } else {
                    console.log("wrong value (init)");
                    return value; // Или можно вернуть undefined, если тип позволяет
                }
            }
        };
    }
}

class User {
    // ВАЖНО: добавляем ключевое слово accessor
    @allowFunc(check)
    accessor age: number; 

    constructor(age: number) {
        this.age = age; // Это вызовет наш перехваченный set
    }
}

const person1 = new User(30);
console.log(person1.age); // 30

person1.age = 0; // "wrong value"
console.log(person1.age); // 30

person1.age = 20;
console.log(person1.age); // 20