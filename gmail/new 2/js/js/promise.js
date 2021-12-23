const p = new Promise((resolve,reject) => {
   setTimeout(()=>{
        reject("failure")
   },3000);
})
p.then(console.log).catch(console.log)



function myDisplayer(some) {
    console.log(some);
}
  
let k = new Promise(function(myResolve,myReject){
    let i = 1;
    if(i==1){
        myResolve("yes");
    }else{
        myReject("error");
    }
});
k.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );