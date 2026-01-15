function promiseTimeout(ms){
    return new Promise((resolv,reject) =>{
        setTimeout(resolv, ms);
    })
}

async function run(){
    console.log("Start!!");

    await promiseTimeout(2000)
    console.log("Stop!!");
}

run();
