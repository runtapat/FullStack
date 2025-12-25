const num = [1,2,3,4]

const sum = num.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
});

console.log(`The sum is : ${sum}`);