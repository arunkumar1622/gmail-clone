let n = "vinayak vishnu";
console.log(n);
//String length
console.log(n.length);
//Escape character double codes
a = "hey there i am \"learning\" javascript";
console.log(a);
// Ec single quotes
b = "hey there i am \'learning\' javascript";
console.log(b);
// insert a blackslash
c = "hey there i am \f learning javascript ";
console.log(c);
//string slice method
let number = "vinayak vishnu subramani thangavel";
console.log(number.slice(15,24)); //subramani
console.log(number.slice(-19,-10));// subramani
console.log(number.slice(14));    //subramani thangavel
console.log(number.substr(4,10)); // yak vishnu
console.log(number.substring(7,15)); // vishnu

//String replace
string_name = "vinayak vikram";
console.log(string_name.replace("vikram","vishnu"));  //vinayak vishnu

//string replace
string_name2=" vinayak VISHNU";
console.log(string_name2.replace(/VISHNU/i,"vikram"));

//string global repplace
string_name3= "vinayak and arul are close friend arul is so emotional";
console.log(string_name3.replace(/arul/g,"prasanth"));

//toUpperCase();

case_name = "vinayak vishnu";
console.log(case_name.toUpperCase());//VINAYAK VISHNU
//toLowerCase()

lower_name = " VINAYAK VISHNU";
console.log(lower_name.toLowerCase());//vinayak vishnu

//
upper_name = "hey there i am waiting for you";
k = /w/;
console.log(k.test(upper_name));
