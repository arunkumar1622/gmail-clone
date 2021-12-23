//assignment equal to
assign = 20;
console.log(assign == 20);//True

//equal value and equal type
value = 20;
console.log(value === 30);//false

//not equal to
a = 40;
b = 30;
a += b;
console.log(a);// truez
a -= 50;
console.log(a);
a *= 20;
console.log(a);
a /= 40;
console.log(a);
a **= 2;
console.log(a);

//greater than 
number_1 = 30;
number_2 = 50;
number_3 = number_1 > number_2;
console.log(number_3);                       // false

//less than equal to
b = 50;
c = 30;
d = b<c;
console.log(d);                              //false

//greater than equal to
numb1 = 10;
numb2 = 30;
numb3 = numb2 >= numb1;
console.log(numb3);                            //true

//less than equal to
console.log(numb2 <= numb1);                    //false

//types of operator
console.log(typeof("vinayak"));
console.log(typeof(1234567890));
console.log(typeof(["vinayak","vishnu","vikram"]));
console.log(typeof(true));

//Function

function greetUser(firstName,lastName){
    let name = "hello"+" "+firstName+" "+lastName+" "+ "learning";
    console.log(name);
}
greetUser("vinay","vishnu");

// function

numberk(10,20);

function numberk(k,q){
    console.log( k * q );
}

//function

function add(numbera,numberb){
    console.log(numbera + numberb);
}
add(20,20);



