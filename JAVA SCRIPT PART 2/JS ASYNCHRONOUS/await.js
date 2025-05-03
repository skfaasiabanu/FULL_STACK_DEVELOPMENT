// function getNum()
// {
    
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             //optional
//             resolve("promise resolved");
//             reject("promise unsuccessful");
//         },10000);
//     });
// }

// // async function demo()
// // {
// //     getNum().then((result)=>
// //     {
// //         console.log(result);
// //         console.log("number came");
// //     })
// //     .catch((error)=>
// //     {
// //         console.log(error);
// //         console.log("number not came");
// //     });
// // }

// async function demo(){
//     //await helpful to get a number after every 1 sec
//     await getNum();
//     await getNum();
// }


//now this can be implemented for clor change ques

async function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>
    {    setTimeout(()=>{

        let h1=document.querySelector("h1");
        h1.style.color=color;
        resolve("color change");
        reject("color not change");
    },delay);
    
    });
}

async function demo()
{
    await changeColor("red",1000);
    await changeColor("hotpink",1000);
    await changeColor("aqua",1000);
}