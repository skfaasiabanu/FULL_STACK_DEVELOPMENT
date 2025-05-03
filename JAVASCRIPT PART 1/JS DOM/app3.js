let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
button.setAttribute("placeholder","username");
button.setAttribute("id","btn");


button.classList.add("btn");
let h1=document.createElement("h1");
h1.innerText="DOM practice";
h1.classList.add("h1");
document.querySelector("body").append(h1);

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
// p.classList.add("span");
document.querySelector("body").append(p);
