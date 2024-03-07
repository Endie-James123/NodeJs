const pcOs = require("os");
//To check windows version
const checkOs = pcOs.version()
// To check the system's total memory
let totalMemory = pcOs.totalmem();
// To check the system's free memory
let freeMemory = pcOs.freemem();
console.log(`Total memory: ${totalMemory} free memory: ${freeMemory}`); 
