let array=[8,9,1,2,10];
let num=5;
let arr1=[];
function getLarger(array,num)
{
    for(let i=0;i<=array.length;i++)
    {
        if(array[i]>num)
        {
            arr1.push(array[i]);
        }
    }
    return arr1;
}

console.log(getLarger(array,num));


//unique characters from a string

let str12f="abcdabcdefgggh";
let strnew="";
function getString(str12f,strnew)
{
for(let z=0;z<str12f.length;z++)
{
    if(!(strnew.includes(str12f[z])))
    {
        strnew=strnew+str12f[z];
    }
}
return strnew;
}


console.log(getString(str12f,strnew));

let country=["australia","germany","united states of america"];

let answer=country[0];
function getCountry(country)
{
      for(let jk=1;jk<country.length;jk++)
      {
        if(country[jk].length>answer.length)
        {
            answer=country[jk];
        }
      }
      return answer;
}

console.log(getCountry(country));

let arg="faasia";
let count=0;
function getVowelCount(arg)
{
   for(let gf=0;gf<arg.length;gf++)
   {
    if(arg[gf]=='a' || arg[gf]=='e' || arg[gf]=='i' ||arg[gf]=='o' ||arg[gf]=='u')
    {
        count=count+1;
    }
   }
   return count;
}
console.log(getVowelCount(arg));

//start and end range

let start=100;
let end=200;

function generateRandom(start,end)
{
    let diff=end-start;

    return Math.floor(Math.random()*diff)+start;
}

console.log(generateRandom(start,end));