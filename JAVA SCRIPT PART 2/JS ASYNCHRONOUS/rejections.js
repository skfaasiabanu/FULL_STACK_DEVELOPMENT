async function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>
    {    setTimeout(()=>{

        let num=Math.floor(Math.random()*10)+1;
        if(num>1)
        {
            console.log(num);
            reject("error occured");
        }
        let h1=document.querySelector("h1");
        h1.style.color=color;
        resolve("color change");
    },delay);
    
    });
}

async function demo()
{    try{
    await changeColor("red",1000);
    await changeColor("hotpink",1000);
    await changeColor("aqua",1000);
}
catch{
    let a=10;
    console.log(a);
}
}