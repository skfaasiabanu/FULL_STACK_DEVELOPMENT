function min(...args)
{
    console.log(args.reduce((min,ele)=>
    {
        if(min>ele)
        {
            return ele;
        }
        else{
            return min;
        }
    }));
}

