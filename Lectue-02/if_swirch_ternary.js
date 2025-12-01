const statuss = 200;
if (statuss === 200){
    console.log("_OK");
}
else if (statuss === 400){
    console.log("Error1");

}
else {
    console.log("Unknow");
}

switch (statuss){
    case 200:
        break;
    case 400:
        console.log("Error2");
        break;
    default:
        console.log("Unknown");

}
const message = (statuss === 200)?'OK' :  'Error!';
console.log(message);