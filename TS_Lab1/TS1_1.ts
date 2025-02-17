function CreatePhoneNumber(arr: number[])
{
    if(arr.length != 10)
        console.log("Массив должен состоять из 10 цифр");
    else
    {
        let PN = '';
        for(let i = 0; i < 10; i++)
        {
            if(arr[i] >=0 && arr[i] <=10)
            {
                if(i == 0)
                    PN += '('
                if(i == 3)
                    PN += ')'
                if(i == 6)
                    PN += '-'
                PN += arr[i]
            }
            else
            {
                PN = ''
                console.log("Элементы массива должны содержать только цифры")
            }
        }
        return PN;
    };
}
const arr : number[] = [1,2,3,4,5,6,7,8,9,0];
console.log(CreatePhoneNumber(arr));
