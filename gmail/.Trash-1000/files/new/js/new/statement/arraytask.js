function sum(arr){
    var a = 0 ;
    for(var i = 0; i < arr.length; i++){
        a = a + arr[i];
    }
    console.log(a);
}
sum([2,4,6,8,10,12]);

function vin(arr){
    var b = 0 ;
    for(var i = 0; i < arr.length; i++){
        b += arr[i];
    }
    console.log(b);
}
sum([1,2,3,4,5,6,7,8,9,10]);

let MarkList1 = [ 
    {'name': "raju", 'score': 25, 'subject': "maths"},
    {'name': "raju", 'score': 30, 'subject': "science"},
    {'name': "raju", 'score': 15, 'subject': "biology"}
 ];
 function sub(arr){
 let v = 0;
 for(i = 0; i < arr.length; i++){
    v+=arr[i].score;
 }
 console.log(v);
 }
 sub(MarkList1);

let MarkList2 = [
    {'name': "vinayak", 'score': 70, 'subject': "maths"},
    {'name': "vinayak", 'score': 70, 'subject': "science"},
    {'name': "vinayak", 'score': 100, 'subject': "biology"}
];
function add(arr){
let k = 0;
for(i = 0; i < arr.length; i++){
    k+=arr[i].score;
}
console.log(k);
}
add(MarkList2);

let MarkList3=[
    {'name':"ramesh",'score':90,'subject':"math"},
    {'name':"ramesh",'score':90,'subject':"social"},
    {'name':"ramesh",'score':90,'subject':"maths"}
];
function multi(arr){
let f = 0;
for(i = 0; i < arr.length; i++){
    f+=arr[i].score;
}
console.log(f);
}
multi(MarkList3);

let Marklist4 = [
    {'name': "vikram", 'score': 80, 'subject': "maths"},
    {'name': "vikram", 'score': 40, 'subject': "science"},
    {'name': "vikram", 'score': 75, 'subject': "biology"},
    {'name': "vishnu", 'score': 60,  'subject': "maths"},
    {'name': "vishnu", 'score': 90, 'subject': "science"},
    {'name': "vishnu", 'score': 67, 'subject': "biology"}
];

function task(arr){
    let h = arr[2];
    for(i = 0; i < arr.length; i++){
        if(Marklist4[i].name === 'vikram'){
            h+=Marklist4[i].score
            count+=1;
        console.log(h);
        }    

    else if(Marklist4[i].name === 'vishnu'){
        h1+=Marklist4[i].score
        count1+=1;
    }
    console.log(h1)
}
task(Marklist4) 

var myObj = [{name1:"value1"},{name2:"value2"}];
function lit(arr){
    let h = 0;
    for(i = 0; i< arr.length; i++){
        h+=arr[i].score;
    }
    console.log(lit);
}