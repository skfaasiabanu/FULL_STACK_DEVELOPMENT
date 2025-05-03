// let heroes=[["ironman","superman","spiderman"],["wonderwoman","thor","hulkl"]];
// for(let i=0;i<=heroes.length;i++)
// {
    // for(let j=0;j<=heroes.length;j++)
    // {
        // console.log(heroes[i][j]);
    // }
// }

let students=[["aman",95],["shardha",56],["faasia",89]];
for(let k=0;k<students.length;k++)
{
    console.log(`info of student ${k}`);
    for(let t=0;t<students[k].length;t++)
    {
        
        console.log(students[k][t]);
    }
}

//for-of loop
let fruits=["mango","apple","banana","mango"];
for(fruit of fruits)
{
    console.log(fruit);
}

for(leeter of "apnacollege")
{
    console.log(leeter);
}

//nested for of loop
let heroes=[["superman","thor","hulk"],["spiderman","krish","bala"]];
for(a of heroes)
{
    for(b of a)
    {
        console.log(b);
    }
}