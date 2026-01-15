function promise_(ms){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve, ms);
    });
}

promise_(2000).then(() =>{
    console.log("Done!");
    return promise_(1000);
})
.then(() =>{
    console.log("Also Done!");
    return Promise.reject(42);
})
.then((result) =>{ 
    console.log(result);

})
.catch(() =>{
    console.log("Error!");
    
});