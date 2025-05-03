// // let jsonres='{"message":"https:\/\/images.dog.ceo\/breeds\/pyrenees\/n02111500_6835.jpg","status":"success"}';
// // console.log(JSON.parse(jsonres));

// // //json object
// // let student=
// // {
// //     name:"skfaasia",
// //     age:20,
// // };

// // console.log(JSON.stringify(student));


// let url="https://catfact.ninja/fact";
// fetch(url).then(response=>
//     {
//         // console.log(response);
//         // // console.log(response.json());
//         // response.json().then(data=>
//         // {
//         //     console.log(data);
//         // }
//         // )
//         return response.json();
//     }
// )
// .then(data=>
// {
//     console.log("data1=",data);
//     // console.log(data.fact);
//     return fetch(url);
// }
// )
// .then(response=>{
//     return response.json();
// })
// .then(data2=>
// {
//     console.log("data2=",data2);
// }
// )
// .catch(error=>{
//     console.log(error);
// }

// );

//async/await for our fetch of an url
let url="https://catfact.ninja/fact";
async function getFact()
{try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}
catch(err)
{
    console.log(err);
}
}

console.log("bye");