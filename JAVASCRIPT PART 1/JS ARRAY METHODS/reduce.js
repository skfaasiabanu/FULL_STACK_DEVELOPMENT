//sum of array elements
let arr5=[1,2,3,4,5];
let finalValue=arr5.reduce((res,ele) =>
{
    console.log(res);
    return res+ele;
});

console.log(finalValue);


//finding maximum in an array

let maximum=arr5.reduce((max,ele)=>
{
    if(ele>max)
    {
        return ele;
    }
    else{
        return max;
    }
});

console.log(maximum);