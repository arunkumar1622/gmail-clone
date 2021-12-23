j=new Date();
console.log(j.getMilliseconds());
const fruits =[
    {id:1, rollNo:1, name:"vinayak"},
    {id:2, rollNo:2, name:"vishnu"},
    {id:3, rollNo:3, name:"surya"},
]

let result = fruits.find(function(fruits){
 return fruits.name=== "surya"
})

console.log(result);

setTimeout(a,2000);
function a(){
    console.log("I am vinayak");

}
setInterval(b,3000);
function b(){
    let a = new Date();
    console.log=(a.getHours()+ ":"+
    a.getMinutes()+ ":"+
    a.getSeconds());
}
