let arr=[1,2,3,4,5,6,2,3]
let num=2
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    {
        arr.splice(i,1);
    }
}

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//number of digits
let number=287152;
let copy=number;
let count=0;
while(copy>0)
{
 count++;
 copy=Math.floor(copy/10);
}

console.log(count);

//sum of digits
let numb=287152;

let copy2=numb;
let sum=0;
let digit;
while(copy2>0)
{
  digit=copy2%10;
  sum=sum+digit;
  copy2=Math.floor(copy2/10);
}

console.log(sum);


//factorial numbers

let n=prompt("enter number");
let res=1;
for(let k=1;k<=n;k++)
{
    res=res*k;
}
console.log(res);

//largest number in array
let arr2=[1,6,3,2,5,7]
let largest=arr2[0];
for(let j=0;j<arr2.length;j++)
{
    if(largest<arr2[j])
    {
        largest=arr2[j];
    }
}

console.log(largest);
