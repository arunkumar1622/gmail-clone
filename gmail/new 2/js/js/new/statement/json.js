var a ={
    firstName: "vinayak",
    lastName: "vishnu",
    Dob:22,
    graduate:"yes",
};
console.log(JSON.stringify(a));//{"firstName":"vinayak","lastName":"vishnu","Dob":22,"graduate":"yes"}
//Parse
b = '["arul","prasanth","vinayak","vishnu"]';
c = JSON.parse(b);
console.log(c[2]); // parse

//stringify

d = ["surya","arul","cherry","tom"];
console.log(JSON.stringify(d));//["surya","arul","cherry","tom"]

