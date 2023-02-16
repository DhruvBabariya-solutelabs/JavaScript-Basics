let a = 4 ;
console.log(a);
console.log(this);

function mul(a,b){

    let ans = a*b;
    console.log(ans);
    console.log(this);

}

mul(4,5);
let ans = {

    name : "Dhruv",
    age : 23,
     x : function sum(a,b){

        let sum = a+b;
        console.log(sum);
        console.log(this);
    }
}
ans.x(3,4);

let ladder ={
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showstep(){
        console.log(this.step);
        return this;
    }
}

ladder.up().up().down().showstep().up().up().showstep();