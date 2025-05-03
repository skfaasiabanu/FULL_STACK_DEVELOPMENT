function outside()
{
    let x=10;
    function inner()
    {
       console.log(x);
    }
    inner();
}

// outside();


//tricky question
let greet="hello";
function outside()
{
    let greet="asallam";
    console.log(greet);
    function inside()
    {
        console.log(greet);
    }
}

console.log(greet);
outside();