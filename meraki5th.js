let a=require("readline-sync")
let b=a.questionInt("enter the number:")
if (10>b){
    console.log("number is less than 10")
}
else if(20>b && 10<b){
    console.log("number is less than 20")
}
else{
    console.log("greater than 20")
}