async function myfunction(){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve(1)
    },1000)
    )
}

async function awaitmyfunction(){
    const v1 = await myfunction()
    const v2 = await myfunction(v1)
    const v3 = await myfunction(v2)
    const v4 = await myfunction(v3)

    console.log(v4)
}

async function incrementOne(res){
    return new Promise((resolve)=>setTimeout(()=>{
        resolve(res + 1)
    },2000))
}
awaitmyfunction()