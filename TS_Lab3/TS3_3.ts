class Cachee<T>{

private cache: Map<string, { value: T; expiration: number }>;

constructor() {
      this.cache = new Map();
    }   
    
public add(key : string, value: T, ttl : number)
{
    const expiration = Date.now() + ttl;
    this.cache.set(key, { value, expiration });
}

public get(key: string) : T | null {

    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiration) {
      this.cache.delete(key); // Удаляем просроченный элемент
      return null;
    }

    return entry.value;}

public clearExpired()
{
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiration) {
        this.cache.delete(key);
      }
    }
}
}

const cache = new Cachee<number>();
cache.add("price",100,5000);
console.log(cache.get("price")); // 100
setTimeout(() => console.log(cache.get("price")), 6000) // null