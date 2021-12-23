var array = [{ name1: "value1"}, { name2: "value2" }];
function add(arr){
for(i = 0; i<arr.length;i++){
    console.log(JSON.stringify(arr[i]));
}
}
add(array);
//access the array
var arr = [{key:'11',value:'1100',$$hashkey:'00X'},{key:'22',value:'2200',$$hashkey:'018'}];
var xxx_2 = Object.values(arr);
console.log(xxx_2);

var myobj = {
    a:2,
    b:{
       c:3
    }
};
var xxx_1 = Object.values(myobj);
console.log(JSON.stringify(xxx_1));