const names = ['Justin','Sarah','Christopher']

names.forEach(name => {
    console.log(name);
    
});

for (let name of names){
    console.log(name,"2")

}

function MyForEach(name){
    console.log(name,'3');
}
names.forEach(MyForEach);