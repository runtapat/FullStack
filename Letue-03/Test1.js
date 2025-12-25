const functure = ['Table','Chairs','Couch']

functure.forEach(item => {
    for (char of item){
        console.log(char);
    }})

for (let item of functure){
    for (let char of item){
        console.log(char,"2");
    }
}
