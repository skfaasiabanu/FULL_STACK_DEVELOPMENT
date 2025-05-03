//multiple function as argument

function multipleGreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}

let greet12f=function()
{
    console.log("hello");
}

multipleGreet(greet12f,5);


//returns a function

// function oodEvenTest(request)
// {
//     if(request=="odd")
//     {
//         return function odd(n)
//         {
//             console.log(n%2!=0);
//         }
//     }
//     else if(request=="even")
//     {
//         return function even(n)
//         {
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("wrong request");
//     }
// }

// let test=oodEvenTest("odd");
// test(3);


function oodEvenTest(request)
{
    if(request=="odd")
    {
        let odd=function(n)
        {
            console.log(n%2!=0);
        }
        return odd;
    }
    else if(request=="even")
    {
        let even= function(n)
        {
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
}

let test=oodEvenTest("odd");
test(3);