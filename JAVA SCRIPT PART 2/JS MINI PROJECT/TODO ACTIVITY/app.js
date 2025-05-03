let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
button.addEventListener("click", function() {
    
        let li = document.createElement("li");
        li.innerText = input.value;
        let del=document.createElement("button");
        del.innerText="delete";
        del.classList.add("delete1");
        ul.appendChild(li);
        li.append(del);
        input.value = "";
});

 let delbtn=document.querySelectorAll(".delete");
 for(btn of delbtn){
 btn.addEventListener("click",function()
 { 
    let par=this.parentElement;
    par.remove();
       
 });
}
//here it is not possible because of event delefgation
// let delbtn1=document.querySelectorAll(".delete1");
//  for(btn of delbtn1){
//  btn.addEventListener("click",function()
//  { 
//     let par=this.previousElementSibling;
//     par.remove();
       
//  });
// }


ul.addEventListener("click",function(event)
{
   if(event.target.nodeName="BUTTON")
   {
      let parent=event.target.parentElement;
      parent.remove();
   }
});