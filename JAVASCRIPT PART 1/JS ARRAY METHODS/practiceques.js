let nums=[1,2,3,4,5];
const square=nums.map((ele)=>
{
    return ele**2;
});

console.log(square);

const sum=square.reduce((sum,ele)=>
{
    return sum+ele;
});

console.log(sum);

let avg=sum/nums.length;
console.log(avg);


const newArray=nums.map((ele)=>
{
    return ele+5;
})
console.log(newArray);

let string=["faasia","banu"];
let newArray1=string.map((ele)=>
{
    return ele.toUpperCase();
});

console.log(newArray1);
