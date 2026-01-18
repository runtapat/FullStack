function promiseTimeout(ms){
    return new Promise((resolv,reject) =>{
        setTimeout(resolv, ms);
    })
}

async function longRunningOperation() {
    return 42
    
}
async function run(){
    console.log("Start!!");

    await promiseTimeout(3000)
    const repone = longRunningOperation();
    console.log("REPONES",repone);
    
    console.log("Stop!!");
}
console.log("Before run()");


run();
console.log("after run()");
