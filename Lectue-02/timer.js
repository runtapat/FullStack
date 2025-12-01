const startTime = Date.now();

function somehevy(){
    let result = 0;
    const endTime = Date.now();

    const duration = endTime - startTime;
    console.log(`ฟังก์ชั่นใช้เวลาทำงาน: ${duration} มิลลิวินาที`)
}
console.log(somehevy())