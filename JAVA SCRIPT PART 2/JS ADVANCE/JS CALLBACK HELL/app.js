// // function saveData(data)
// // {
// //     let internetSpeed=Math.floor(Math.random()*10)+1;
// //     if(internetSpeed>4){
// //     console.log("your data saved");
// //     }
// //     else{
// //         console.log("internet slow");
// //     }
// // }

// //here after data passed i need functions then

// // function saveData(data,sucess,failure)
// // {
// //     let internetSpeed=Math.floor(Math.random()*10)+1;
// //     if(internetSpeed>4){
// //     sucess();
// //     }
// //     else{
// //         failure();
// //     }
// // }

// // saveData("faasia",()=>
// // {
// //     console.log("your data saved");
// //     //if sucessfull completed i want to send next data
// //     saveData("babu",()=>{
// //         console.log("your data saved");
// //     },()=>{
// //         console.log("internet slow");
// //     });
// // },
// // ()=>
// // {
// //     console.log("internet slow");
// // }
// // );


// // //using promises
// function saveData(data)
// {   return new Promise((resolve,reject)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//     resolve("success: data saved");
//     }
//     else{
//         reject("failure: internet failed");
//     }
// });
    
// }

// //console.log(saveData("faasia"));

// //IF SUCCESS THE TASK TO BE PERFORMED
// // saveData("faasia").then(()=>{
// //     console.log("promise resolved"); 
// // })
// // .catch(()=>{
// //     console.log("promised rejected");
// // });

// //promise chaining
// // saveData("faasia").then(()=>{
// //     console.log("promise resolve:data1 saved");
// //     return saveData("babu");
// // })
// // .then(()=>{
// //     console.log("promised resolve:data2 saved");
// // }
// // )
// // .catch(()=>
// // {
// //     console.log("promise rejeted");
// // });

// //result and error
// saveData("faasia").then((result)=>{
//     console.log("promise resolve:data1 saved and result is",result);
//     return saveData("babu");
// })
// .then((result)=>{
//     console.log("promised resolve:data2 saved and result is",result);
// }
// )
// .catch((error)=>
// {
//     console.log("promise rejeted and error is",error);
// });