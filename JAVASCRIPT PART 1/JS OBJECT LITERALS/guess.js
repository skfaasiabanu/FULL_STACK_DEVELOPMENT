const max=prompt("enter a maximum number");


//random number 1 to max
// let step1=Math.random();
// let step2=step1*max;
// let step3=Math.floor(step2);
// let step4=step3+1;
// console.log(step4);
const random=Math.floor(Math.random()*max)+1;

//guessing the random number
let guess=prompt("enter ur guess number");

while(true)
{
    if(guess=="quit")
    {
        prompt("quit from guessing game");
        break;
    }
    if(guess == random)
    {
       prompt("you are right",random);
        break;
    }
    else if(guess < random)
    {
         prompt("your guess is smaller, please try again");  
            
    }
    else{
        guess=prompt("your guess is greater , please try again");
    }
}