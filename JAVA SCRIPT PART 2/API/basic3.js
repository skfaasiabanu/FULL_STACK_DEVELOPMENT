//axios
// let btn=document.querySelector("button");

// btn.addEventListener("click",async ()=>
// {
//     let fact=await getFact();
//     let p=document.querySelector("p");
//     p.innerText=fact;
// })
// let url="https://catfact.ninja/fact";

// async function getFact()
// {try{
//     let res=await axios.get(url);
//     return res.data.fact;
// }
// catch(err)
// {
//     return err;
// }   

// }


 let btn2=document.querySelector("button");

 btn2.addEventListener("click",async ()=>
{
    let fact=await getFact();
    let img=document.querySelector("img");
    img.src=fact;
})
let url="https://dog.ceo/api/breeds/image/random";

async function getFact()
{
    try{
    let res=await axios.get(url);
    return res.data.message;
    }
catch(err)
{
    return err;
}   

}

