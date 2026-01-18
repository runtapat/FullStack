let values1 = ['Apple',1,false,2,true]
let values2 = ['Fries',2,true,'Apple']
let values3 = ['Mars',9,'Apple',2,true]

values1.forEach(item1 => {
    values2.forEach(item2 => {
        values3.forEach(item3 => {
            if (item1 === item2 && item2 === item3){
                console.log([item1])
            }
        }   
        )
    })
})    

for (let val1 of values1){
    for (let val2 of values2){
        for (let val3 of values3){
            if (val1 === val2 && val2 === val3){
                console.log([val1])
}
        }
    }
}
