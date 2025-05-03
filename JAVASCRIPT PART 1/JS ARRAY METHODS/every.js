let arr4=[1,2,3,4,5];
//i need a array full even

console.log(arr4.every((el)=>
{
    el%2==0;
}));

//some 
console.log(arr4.some((ele)=>
{
    ele%2==0;
}));