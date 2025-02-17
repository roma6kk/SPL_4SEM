    function moveArr(arr : number[], k : number)
    {
    if(arr.length === 0) return arr;
    k = k % arr.length;
    if (k === 0) return arr;
    
    const boof1 = arr.slice(-k);
    const boof2 = arr.slice(0, arr.length - k); 
    return [...boof1, ...boof2];
    }

    let nums: number[] = [1,2,3,4,5,6,7]
    let k : number = 3;

    console.log(moveArr(nums,k))
