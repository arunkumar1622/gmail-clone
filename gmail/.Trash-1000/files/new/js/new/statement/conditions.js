//if else condition
let a = 5;
let b = 6;
if (a > b) {
    console.log("a is greater than b")
}
else { 
    console.log("b is greater the a");
}

//if hour is 12am(0) to  1pm(13) gives good morning
//else if hour is 1pm(13) to 5pm(17) gives good afternoon
//else hour is after 5pm(17) to 12am(0) gives good evening

let hours = new Date().getHours();

if (hours >= 0 && hours <= 13){
    console.log("goog moring");
}else if (hours >= 0 && hours <= 17){
    console.log("good afternoon");
}else {
    console.log("good evening");
}                                   // good evening

//switch case

let grade = "m";

switch(grade){
    case "A":
        console.log("higher Grade");
        break;
    case "B":
        console.log("second grade");
        break;
    case "c":
        console.log("third grade");
        break;
    case "U":
        console.log("failed");
        break;
    default:
        console.log("all clear");
}

//amount 10k buy android mobile
//amount is >60k buys i phone mobile
//given amount is > 5 && <10 buy basic mobile

let mobile = 3 ;

switch(true){
    case (mobile > 10):
        console.log("to buy a android mobile");
        break;
    case (mobile > 60):
        console.log("to buy a i phone");
        break;
    case (mobile < 5):
        console.log("to buy a basic mobile");
        break;
    default:
        console.log("dont buy a mobile")
}

//loop
for (let i = 6; i < 0; i++) {
  console.log('Walking east one step');
}
  
let i = 10;

while(i < 9){

}