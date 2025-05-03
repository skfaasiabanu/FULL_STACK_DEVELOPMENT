// let button=document.querySelector("button");

// button.onclick=function()
// {console.log("button was clicked");
// }

// function sayHello()
// {
//     alert("hello");
// }

// button.ondblclick=sayHello;

// let btn=document.querySelectorAll("button");
// for(btns of btn){
// btns.onclick=sayHello;
// }
// function sayHello()
// {
//     alert("heelo");
// }


// let btn=document.querySelectorAll("button");

// for(btns of btn)
// {
//     btns.onmouseenter=function()
//         {
//            console.log("button are hovered");
//         }
    
// }

let buttons=document.querySelectorAll("button");
for(btn of buttons)
{
    btn.addEventListener("click",function()
{
    console.log("button clicked");
});
 btn.addEventListener("dblclick",function(){
    console.log("double clicked");
 });
}