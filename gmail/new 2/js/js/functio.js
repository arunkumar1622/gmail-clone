function callback(){
    console.log("call back function");
}

function higherOrder(fn){
    console.log(" i  am calling back");
    fn();
    console.log("calling back is invoked");

}
higherOrder(callback);

function greet(name){
    console.log("welcome you " + name);
}
greet("vinayak");

async function myDisplay(){
    let myPromise = new Promise(function(myResolve,myReject){
            setTimeout(function(){ myResolve("hey hi there");},4000);  
    });
myPromise.then(function(value){
    console.log(value);
});
}




