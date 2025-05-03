let para=document.createElement('p');
para.innerText="Hi! iam red";
document.querySelector("body").append(para);
para.classList.add("red");

let h3=document.createElement('h3');
h3.innerText="Hi! iam blue";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div=document.createElement('div');   
div.classList.add("box");
let h1=document.createElement("h1");
h1.innerText="im in a div";
let p=document.createElement("p");
p.innerText="me too!";
div.append(h1);
div.append(p);
document.querySelector("body").append(div)