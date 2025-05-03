const student=
{
    namef:"faasia",
    eng:98,
    math:100,
    phy:97,
    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(this);
        console.log(`${this.namef} got average = ${avg}`);
    }
}

console.log(student.getAvg());


//no object then window object is get accessed

function getsum()
{
    console.log(this);
}

window.console.log(getsum());