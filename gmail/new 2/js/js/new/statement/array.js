number1 = [10,20,30,40];
let e = " ";
number1.forEach(myfunction);

console.log(e);
function myfunction(array_value){
    e += array_value+" ";
    
}                                       // 10 20 30 40

number2 = [2,4,6,8];
number_3 = number2.map(myValue);
console.log(number_3);


function myValue(value, index, array){
    return value * 2 ;
}                                       //[4, 8,12, 16]

number5 = [5,10,52,62];
number_n = number5.filter(myArr);
console.log(number_n);

function myArr(value, index, array){
    return value > 5;
}                                        //10,52,62

//

    