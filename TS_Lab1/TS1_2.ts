class Challenge {
    static solution(number: number) {
       if(number <= 0)
        return 0;
       let sum : number = 0
       for(let i = 3; i < number; i++)
       {
       if(i % 3 === 0 || i % 5 === 0)
       {
        sum += i;
       }
       }
       return sum;
       
      }
    }
console.log(Challenge.solution(10));
