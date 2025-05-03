// //headers traversing

// let url="https://icanhazdadjoke.com/";
// //if response is of the xml format then we use headers
// async function getJokes()
// {
//     try{
//         const head={headers:{Accept:"application/json"}};
//         let res=await axios.get(url,head);
//         console.log(res.data.joke);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }


// getJokes();

//query strings

let url="http://universities.hipolabs.com/search?name=";
let button=document.querySelector("button");

button.addEventListener("click", async ()=>
{
    let country=document.querySelector("input").value;
    let colleges=await getColleges(country);
    show(colleges);
});

function show(colleges)
{
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges)
    {
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getColleges(country)
{
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(err)
    {
       return err;
    }
}