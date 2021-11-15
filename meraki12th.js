let a=require("readline-sync")
let b=a.questionInt("enter the number :")
if (b%5==0 && b%15==0){
    console.log(b,"divisible by both(5 or 15)");
}
else{
    console.log("not divisible by both");
}