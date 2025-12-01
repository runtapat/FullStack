function func_createLogEntry(message){
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');
    const eventId = Math.random().toString(16).substring(2,10).toUpperCase()

    const logMessage = message.toUpperCase()

    return `[${timestamp}] [${eventId}] - ${logMessage}`

}
const log = func_createLogEntry("User login successful")
console.log(log)