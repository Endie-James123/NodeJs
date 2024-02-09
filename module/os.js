const pcOs = require("os");
const checkOs = pcOs.version()
module.exports = { checkOs }; 
const path = require('path')
const checkPath = path.parse(__filename)
module.exports = {checkPath}