const promise = new Promise((resolve, reject) => {
    const res = false;
    if (res) {
        resolve("resolved");
    }else{
        reject(Error("FAtal Error"));
    }
});


promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
    
)