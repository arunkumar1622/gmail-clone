//promise resolve reject
const p1 = new Promise((resolve,reject) => {
    setInterval(() => {
        reject("failure")
    },3000);
})
p1.then(console.log).catch(console.log)//failure

const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("success")
    },2000);
})
p.then(console.log)//success

