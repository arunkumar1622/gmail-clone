//object values

const obj= {applicant:"Arun",
role:"software trainee",
learning:"javascript",
regNo:31,
};
const values  = Object.values(obj);
console.log(values);

//freeze the object
const user = {
    username: 'kumar',
    password: 'arun2200'
};
const newUser = Object.freeze(user);

newUser.password = 'wvihdvb';
newUser.active = true;
console.log(newUser);
 
//object create
const job = {
    position: "software trainee",
    type: 'hourly',
    isAvailable: true};

const Arun=Object.create(job);
console.log(vinayak.position);

//object key

const employee = {applicationName:"surya",
appNo:90,
appStatus:"waiting",
appRoll:"overthinking",
};

const emp_key = Object.keys(employee);
console.log(emp_key); // ["appNo","appstatus"]

//object values
const emp_value = Object.values(employee);
console.log(emp_value); // datatype, [""]

//object entries
const emp_entries = Object.entries(employee);
console.log(emp_entries); 

//object assign


const  name = {
    Name: "surya",
    appN0: 22,
    appPayRoll: 10000,
    experience: 2,
};

const details ={
    eyeSight: "close",
    power:250,
};

const d = Object.assign(name,details);
console.log(d); // merging the object

//this is keyword
const person = {
    firstName: "arun",
    lastName: "kumar",
    id: 5566,
    naming: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.naming()); 

//this keyword

student_name = {
        naming:"xxxx",
        schooling:"yyyy",
        Dob:22-08-2000,
        hobbie:"overthonking",
        hello: function(){
            return this.hobbie;
        },
};
console.log(student_name.hello());

//call and apply

var num = {k: 10 , h: 20 };
function add(c,d){
    return this.k+this.h + c + d;
}
console.log(add.call(num,50,60));

//apply
var name_2 = {
    first_letter:"arun",
    last_name:"kumar",
};
function sub(dob,age){
    return this.first_letter+" "+this.last_name+" "+dob+" "+age;
}
console.log(sub.apply(name_2,["may22","twentytwo"]));

//JSON
let code = '"\u2028\u2029"'
JSON.parse(code)  // evaluates to "\u2028\u2029" in all engines
eval(code)




