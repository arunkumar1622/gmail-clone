let str="The rain in SPAIN stays mainly in the plain";
b=str.match(/ain/g);
console.log(b);
//string.include which is used to find return true if string contain spectified value
a= "hello there i am kohli";
b=a.includes("there");
console.log(b);
c="India won hockey cup after years";
console.log(c.startsWith("India"));
//other startsWith method return false
d="I am vinayak working in nexton top";
e=d.startsWith("vinayak");
console.log(e);
e="I am using my mobile";
f=e.startsWith("using",5);
console.log(f);
//endWith method 
j="vinayak vinay";
m=j.endsWith("vinay");
console.log(m);
//another time
k="vinayak vishnu";
v=k.endsWith("vishnu",8);
console.log(v);
//js back-tics Syntax
q=`vinayak vishnu`;
console.log(q);
//  quotes inside the string
p=`vinayak vishnu"software engineer"`;
console.log(p);
//multiple string it is used to insert the multiple string
z=`vinayak vishnu is a football player when he was studying "schooling"`;
console.log(z);

