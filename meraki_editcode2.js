let a=require("readline-sync")
let b=a.questionInt("enter the number :")
if (b%3==0 && b%7==0){
    console.log("Chacolate");
}
else if (b%7==0){
    console.log("choco");
}
else if (b%3==0){
    console.log("late");
}
else{
    console.log("Not divisible by 3 , 7");
}