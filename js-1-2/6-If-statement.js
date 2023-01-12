//? ticket app
/*
    * age < 5    FREE
    * age 5-12   £5
    * age 12-65  £20
    * age > 65   FREE
*/

const age = 66;

if(age <= 5){
    console.log("free");
}else if(age <= 12){
    console.log("£5");
}else if(age <= 65){
    console.log("£20");
}else{
    console.log("free 2");
}