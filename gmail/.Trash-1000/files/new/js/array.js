//creating a array
const a = ["vinaya","vishnu","subramani"];
console.log(a);
const b=["vishnu","vinay","vikram"];
c=b[1];
console.log(c);

//changing the array
d=["vinayak","vishnu","vikram"];
d[2]="subramani";
console.log(d);

//accessing the full array
e=["dhoni","is","a","captain"];
console.log(e);

//length property in array
j=["i","am","there","for","you"];
console.log(j[0]);
v=["I","vinay","vishnu"];
console.log(v[v.length-1]);

//array looping
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for (let i = 0; i < fLen; i++) {
console.log(fruits[i]);
}  

//push method to insert array 
k=["i","j","k","l"];
k.push("z");
console.log(k);

//lenght method to insert array
h=["vinayak","vishnu","conduct"];
h[h.length]="vikram";
console.log(h);
g=["vinay","there","us","for"];
g.toString();
console.log(g);

//join array
u=["i","am","from","indian","country"];
console.log(u.join("="));
u.pop();
u.push("country");
console.log(u);
u.shift("i");
console.log(u);
u.unshift("tamilnadu");
console.log(u);

// index number
r=["red","blue","green","yellow"];
r[4]="white";
console.log(r);

//length property
r[r.length]="sandel";
console.log(r);

//deleting element
delete r[3];
console.log(r);

//splice method
r.splice(3, 1,"violet","brown");
console.log(r)
v=["vinay","vishnu","timing","keep up"];
v.splice(2,2,"very","sharp");
console.log(v);

//concat
a=["arul","surya","vinayak"];
b=["enili","clarke","arya"];

