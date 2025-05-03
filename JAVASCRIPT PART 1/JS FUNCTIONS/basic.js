function printNames()
{
    let names=["faasia","babu","rizu","ridu"];
    for(let i=0;i<names.length;i++)
    {
        console.log(names[i]);
    }

}

printNames();

//print a poem
function printPoem()
{
    console.log("twinkle twinkle little star ");
}
printPoem();

//print a number between 1 to 6

function printDice()
{
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

printDice();

//function arguments

function printDetails(name,age,marks)
{
    console.log(name);
    console.log(age);
    console.log(marks);
}

printDetails("faasia",21,100);

//average
function findAverage(a,b,c)
{
    let ave=(a+b+c)/3;
    console.log(ave);
}

findAverage(2,3,4);

//mul table

function printTable(n)
{
    for(let i=1;i<=10;i++)
    {
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

printTable(7);


//returning a value from a function
function sum(a,b)
{
    return a+b;
}

console.log(sum(sum(1,2)));


//sum of 1 to n
let sum1=0;
function printSum(n)
{
    for(let z=1;z<=n;z++)
    {
       sum1=sum1+z;
    }   
    return sum1;
}

console.log(printSum(5));


//concatenation of all strings in an array

let arr=["faasia","banu","raheem"];
function getConcat(array)
{   let concat="";
    for(let i=0;i<array.length;i++)
    {
       concat=concat+array[i];
    }
    return concat;
}

console.log(getConcat(arr));