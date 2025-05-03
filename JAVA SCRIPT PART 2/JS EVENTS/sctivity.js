// let button=document.querySelector("button");
// let h3=document.querySelector("h3");
// button.addEventListener("click",function(){
//       h3.innerText=getrandomColor();
//       let div=document.querySelector("div");
//       div.style.backgroundColor=getrandomColor();
// });

// function getrandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     // let color=`rgb(${red},${green},${blue})';
//     // return color;
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }


// my text editor
let input=document.querySelector("input");
let p=document.querySelector("p");
input.addEventListener("input",function()
{
    p.innerText=input.value;
});