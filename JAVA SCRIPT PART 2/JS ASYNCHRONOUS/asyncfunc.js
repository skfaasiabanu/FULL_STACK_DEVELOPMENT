async function greet()
{   throw "error ocuured";
    console.log("asynchronous function1");
}

greet().then((result)=>
{
    console.log(result);
    console.log("promise resolved");
})
.catch((error)=>
{
    console.log(error);
    console.log("promise rejected");
})