class StrKeyMap<V> {
    private hashMap: [string, V][][] = [];
    private M = 1009;

    private getKeyHash(key: string): number {
        const numericKey = (() => {
            let sum = 0;
            for(let i = 0; i < key.length; i++) {
                sum += key.charCodeAt(i);
            }
            return sum;
        })();

        return numericKey % this.M;
    };

    set(key: string, value: V): void {
        const pairs = this.hashMap[this.getKeyHash(key)];

        if (pairs === undefined) {
            this.hashMap[this.getKeyHash(key)] = [[key, value]];
            return;
        }

        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i][0] === key) {
                pairs[i][1] = value;
                return;
            }
        }

        pairs.push([key, value]);
        return;     
    }

    get(key: string): V | null {
        const pairs = this.hashMap[this.getKeyHash(key)];

        if (pairs === undefined) return null;
        
        for(let line of pairs) {
            if (line[0] === key) return line[1];
        }

        return null;
            
    }

    delete(key: string): boolean {
        const pairs = this.hashMap[this.getKeyHash(key)];

        if (pairs === undefined) return false;

        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i][0] === key) {
                pairs.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    clear(): void {
        this.hashMap = [];
    }

}