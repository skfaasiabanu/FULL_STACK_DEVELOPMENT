let todo=[];

let req=prompt("enter your request");

while(true)
{
    if(req ==="quit")
    {
        console.log("you have quit todo app");
        break;
    }

    if(req ==="list")
    {
        console.log("here is your list of tasks");
        for(task of todo)
        {
            console.log(task);
        }
    }

    else if(req ==="add")
    {
        let item=prompt("please enter your task to add to list");
        todo.push(item);
        alert("task is added");
    }

    else if(req ==="delete")
    {
        let value=prompt("please enter item to be delted");
        let index=todo.indexOf(value);
        todo.splice(index,1);
        console.log("task deleted");
    }

    req=prompt("enter your request");
}