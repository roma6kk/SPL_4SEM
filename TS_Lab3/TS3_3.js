var Cachee = /** @class */ (function () {
    function Cachee() {
        this.cache = new Map();
    }
    Cachee.prototype.add = function (key, value, ttl) {
        var expiration = Date.now() + ttl;
        this.cache.set(key, { value: value, expiration: expiration });
    };
    Cachee.prototype.get = function (key) {
        var entry = this.cache.get(key);
        if (!entry) {
            return null;
        }
        if (Date.now() > entry.expiration) {
            this.cache.delete(key);
            return null;
        }
        return entry.value;
    };
    Cachee.prototype.clearExpired = function () {
        var now = Date.now();
        for (var _i = 0, _a = this.cache.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], entry = _b[1];
            if (now > entry.expiration) {
                this.cache.delete(key);
            }
        }
    };
    return Cachee;
}());
var cache = new Cachee();
cache.add("price", 100, 5000);
console.log(cache.get("price")); // 100
setTimeout(function () { return console.log(cache.get("price")); }, 6000); // null
