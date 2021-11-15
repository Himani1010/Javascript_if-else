var x=require("readline-sync")
let a=x.questionInt("enter the number :")
var y=require("readline-sync")
let b=y.questionInt("enter the number :")
if (b>a){
    console.log(b, "is greater then",a);
}
else if(a>b){
    console.log(a, "is greater then",b);
}
else{
    console.log(a,"equal to",b);
}