for(let i=1;i<=5;i++)
{
    console.log(i);
}

let j=1;
while(j<=5)
{
    console.log(j);
    j++;
}

//odd numbers 1 to 15
for(let s=1;s<=15;s++)
{
    if(s%2!=0)
    {
        console.log(s);
    }
}

//even numbers 2 to 10
for(let l=2;l<=10;l++)
{
    if(l%2==0)
    {
        console.log(l);
    }
}

//infinity loop
//for(let g=1;;g++)
// {
    // console.log(g);
// }

//multiplication table of 5

let n=prompt("enter n value");
for(let t=1;t<=10;t++)
{
    console.log(`${n} x ${t} = ${n*t}`);
}

//nested loops
for(let q=1;q<=3;q++)
{
    for(let w=1;w<=3;w++)
    {
        console.log(w);
    }
}

//favourite movie
let favourite_movie="AVENGERS";
let guess=prompt("guess your facourite movie");

if(guess==favourite_movie)
{
    alert("congrats");
}
else
{
    while((guess!=favourite_movie) && (guess!="quit"))
        {
           
            guess=prompt(" WRONG GUESS-> guess your favourite movie");
        }
}

//break keyword
let zx=1;
while(zx<=5)
{
    if(zx==3)
    {
        console.log("break with 3");
        break;
    }
    console.log(zx);
}

//LOOPS WITH ARRAYS
let fruits=["mango","banaana","grapes"];
for(let bn =0;bn<=fruits.length;bn++)
{
    console.log(fruits[bn]);
}