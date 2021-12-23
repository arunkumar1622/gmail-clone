async function myFn(){
    return 1
}
console.log(myFn())

async function myFun() {
    return new Promise((resolve,reject) => setTimeout(() => {
        resolve("success")
    },1000))
}

async function awaitfun(){
    const output = await myFun();

    console.log(output)
}
awaitfun()

