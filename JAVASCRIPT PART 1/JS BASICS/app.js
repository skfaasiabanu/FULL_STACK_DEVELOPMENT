console.log("hello world");
let a=10;
let b=5;
console.log("sum is",(a+b));
let pencilPrice=10;
let eraserPrice=20;
console.log(`the total price is ${pencilPrice+eraserPrice} Rupees`);
// backtick usage
// operators
let a1=10;
console.log(a1++);
console.log(a1);
console.log(++a1);
console.log(a1);
// if conditional statement
let age=20;
let str="faa";
if(age>=18)
{
    console.log("you can vote");
}
if(age>=20)
{
    console.log("you are in your 20's");
    console.log(5 * str);
}
// traffic light code
let color="red";
if(color=="red")
{
    console.log("stop");
}
if(color=="yellow")
{
    console.log("get ready to go");
}
if(color=="green")
{
    console.log("go");
}

//popcorn
let size="XL";
if(size==="XL")
{
    console.log("price is Rs. 250");
}
else if(size==="L")
{
        console.log("price is Rs. 200");
}
else
{
    console.log("price is Rs. 150");
}

///logical operators
let string1="apple"
if(string1[0]=="a" && string1.length>3)
{
    console.log("string is good");
}
else{
    console.log("string is not good");
}

//truty and falsy values
if(a)
{
console.log("truthy value");
}
else{
    console.log("faslsy value");
}

//message
console.error("it is error msg");
console.warn("this is warn msg");
alert("something went wrong");
let first=prompt("enter first name");
let last=prompt("enter last name");
console.log("welcome",first,last);
alert("welcome",first,last);

let num=45;
if(num%10==0)
{

    console.log("good");
}
else{
    console.log("bad");
}
