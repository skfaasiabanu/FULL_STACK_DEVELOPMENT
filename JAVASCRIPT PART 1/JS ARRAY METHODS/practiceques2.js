function doubleAndReturnArgs(array,...args)
{
    let double=args.map((ele)=>
    {
        return ele*2;
    });

    let newArray3=[...array,...double];

    return newArray3;
}

let array=[1,2,3,4,5];

console.log(doubleAndReturnArgs(array,6,7,8,9,10));

function mergeObjects(object1,object2)
{
    let newobj={...object1,...object2};
    return newobj;
}

let object1={
    name:"skfaasia",
    marks:90,
};
let object2={
    name2:"babu",
    marks2:99,
};

console.log(mergeObjects(object1,object2));