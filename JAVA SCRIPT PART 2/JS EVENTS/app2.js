//mouse events
// let div=document.querySelector("div");
// div.addEventListener("mouseenter",function(){
//     console.log("mouse entered");
// });

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this);
//     this.style.backgroundColor="pink";
// });


//keyborad events
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event)
// {    console.log(event);
//     console.log("key pressed");
// });

// if we see a game

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event)
// {

//     let key=event.key;
//     let code=event.code;
//     //Arrowup,ArrowDown//arrowleft//arrowright
//     if(code=="ArrowUp")
//     {
//         console.log("character moved forward");
//     }
//     else if(code=="ArrowDown")
//         {
//             console.log("character moved backward");
//         } 
//         else if(code=="ArrowLeft")
//             {
//                 console.log("character moved left");
//             } 
//             else if(code=="ArrowRight")
//                 {
//                     console.log("character moved right");
//                 } 
// });

// //form events
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event)
// {
//     event.preventDefault();
//     //extracting data
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);    
//     console.log(pass.value);
//     alert(`form submitted as ${user.value} as user and password is ${pass.value}`);
// })    

//more events

// //change event
// let user=document.querySelector("#user");
// user.addEventListener("change",function()
// {
//     console.log(user.value);
// })

//input event

let user=document.querySelector("#user");
user.addEventListener("input",function()
{
    console.log(user.value);
});