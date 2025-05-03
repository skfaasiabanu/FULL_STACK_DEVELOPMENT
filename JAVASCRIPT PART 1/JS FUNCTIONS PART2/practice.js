//arrow function returns square of n
let square=(n)=>n**2;
console.log(square(2));

let id=setInterval(()=>{console.log("Hello Wotld");},2000);

setTimeout(()=>
{
    clearInterval(id);
    console.log("printed 5 times");
},10000);