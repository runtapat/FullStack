

function who(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("😭")
        },200);
    });
}

function what(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("CN");

        },300)
    })
}
function where(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("loo");

        },5000)
    })
}
async function msg(){
    const a = await who();
    const b = await what();
    const c = await where();
    console.log(`Message: ${a} ${b} ${c}`);
}
console.log('We are looking for: ');
msg();
console.log("Hell");

