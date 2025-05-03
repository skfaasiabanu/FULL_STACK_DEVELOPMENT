let h1=document.querySelector("h1");

function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>
    {
          setTimeout(()=>
        {
            h1.style.color=color;
            resolve("color change");
        },delay);
    });
}

changeColor("red",1000).then(()=>{
    console.log("red color was changed");
    return changeColor("hotpink",1000);
})
.then(()=>
{
    console.log("hotpink color was changed");
    return changeColor("aqua",1000);
})

.then(()=>
{
    console.log("aqua color was changed");
});