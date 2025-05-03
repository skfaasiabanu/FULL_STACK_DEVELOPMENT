let num=45;
if(num%10==0)
{

    console.log("good");
}
else{
    console.log("bad");
}

let name1=prompt("enter name");
let age2=prompt("enter age");
alert(`${name1} is ${age2} years old`)

let character="apple";
if((character[0]==="A" || character[0]==="a") && character.length>5)
{
    console.log("golden");
}
else{
    console.log("not");
}


let n1=10;
let n2=20;
let n3=30;
if(n1>n2 && n1>n3)
{
    console.log("n1 is greater");
}
else if(n2>n1 && n2>n3)
{
    console.log("n2 is greater");
}
else{
    console.log("n3 is greater");
}

let n4=32;
let n5=47852;
if(n4%10==n5%10)
{
    console.log("same last digit");
}