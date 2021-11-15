let a=require("readline-sync")
let b=a.questionInt("enter the age :")
if (b>=5){
    console.log(" You can go to school");
}
if(b>=18){
    console.log("You can vote in elections");
}
if (b>=21){
    console.log(("You can drive a car"));
}
if (b>=24){
    console.log("You can marry");
}
if (b>=25){
    console.log(("You can legally drink"));
}