//get values
console.log(post["content"]);
console.log(post.tags);

//keys are always strings
let object={
    1:"faasia",
    2:"babu",
    3:"rizu",
    4:"ridu",
}

//add/update

let studentf={
    name:"faa",
    age:23,
    marks:12,
    city:"delhi",
}
studentf.city="mumbai";
studentf.gender="female";
studentf.marks="A";
console.log(studentf);

//delete
delete studentf.marks;
console.log(studentf);