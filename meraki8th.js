let water=require("readline-sync")
let water1=water.questionInt("enter the water :")
if (water1<1){
    console.log("needs to be filled");
}
else if(water1>=1 && water1<=10){
    console.log("No need to fill");
}
else{
    console.log("overflow");
}