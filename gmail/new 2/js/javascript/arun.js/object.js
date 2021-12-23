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

newUser.password = 'arun2200';
newUser.active = true;
console.log(newUser);
 
//object create
const job = {
    position: "software trainee",
    type: 'hourly',
    isAvailable: true};

const Arun=Object.create(job);
console.log(Arun.position);

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

