var Kitten = /** @class */ (function () {
    function Kitten() {
    }
    return Kitten;
}());
var kit1 = { color: "black" };
var kit2 = { color: "white" };
var kitarr = [kit1, kit2];
var kitarr2 = kitarr.filter(function (kit) { return kit.color == "white"; });
console.log(kitarr2);
