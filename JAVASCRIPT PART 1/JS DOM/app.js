let parObj=document.querySelector("p");
console.log(parObj.innerText);

parObj.innerHTML=`<u> ${parObj.innerText} </u>`;


let links=document.querySelectorAll(".box a");

for(let i=0;i<links.length;i++)
{
    links[i].style.color="yellow";
}