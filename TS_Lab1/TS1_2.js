var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number <= 0)
            return 0;
        var sum = 0;
        for (var i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
