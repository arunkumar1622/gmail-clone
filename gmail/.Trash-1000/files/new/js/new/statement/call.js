//callback
function callback(){
  console.log("call back function");
}

function higherOrder(fn){
  console.log(" i  am calling back");
  fn();
  console.log("calling back is invoked");

}
higherOrder(callback);

//settimeout

setTimeout(myName,5000);
function myName(){
    console.log("I am vinayak vinay");
}

//setinterval

let count = 0;
const d = setInterva(function(name){
    count++;
    if(count > 10){
        clearInterval(d);
    }
    console.log("vinayak",name)
},2000 ,"vinay")