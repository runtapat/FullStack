function criticalCode(){
    throw "thow error";
}

function logError(theException){
    console.log(theException);
}


console.log("\n*************Try..Catch************\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an Error");
    
    logError(ex);
}

console.log("\n***********End of Program***********\n");
try{
    throw "An exception occurred";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n ***** Try..Catch..Finally **********************\n");

try{
    criticalCode();
} catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that alway will run");

    
}
function hello(){
    console.log("\n ***** Throwing Custom Error ***** \n");
}
