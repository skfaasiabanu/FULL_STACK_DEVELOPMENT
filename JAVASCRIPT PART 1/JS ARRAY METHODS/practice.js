let arr10=[1,2,3,4,5,,6];

let res=arr10.every((ele)=>
{
    ele%10==0;
});
console.log(res);


let arr11=[1,2,3,4,5];
let min=arr11.reduce((min,ele)=>
{
    if(min>ele)
    {
        return ele;
    }
    else{
        return min;
    }
});
console.log(min);