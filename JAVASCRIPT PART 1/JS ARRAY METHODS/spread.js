let arr=[1,2,3,4,5];
console.log(Math.min(...arr));

console.log(...arr);

console.log(..."faasia");

let odd=[1,3,5];
let even=[2,4,6];
let num=[...odd,...even];
console.log(num);

let obj=
{
    name:"faasia",
    marks:20,
};
let dataObj={...obj,id:22};
console.log(dataObj);

let arrobj={...arr};
console.log(arrobj);