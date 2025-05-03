// let array=[2,1,3];
// let sum=0;
// let arrayAverage=(array)=>{
//     for(let i=0;i<array.length;i++)
//     {
//         sum=sum+array[i];
//         return Math.floor((sum)/array.length);
//     }
// };

// console.log(arrayAverage(array));

// //even or not 
// let isEven=(n)=>{
//     if(n%2==0)
//     {
//         return "even";
//     }
//     else{
//         return  "odd";
//     } 
// }

// console.log(isEven(5));

// const object={
//     message:"hello",
//     logMessage()
//     {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);


let length=4;
function call()
{
    console.log(this.length);
}

const object={
    length:5,
    method(callback)
    {
        call();
    },
};
object.method(call,1,2);
