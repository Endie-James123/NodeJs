const fileSystem = require('fs')

//Creating a file
const createFile = fileSystem.writeFile('./newFile.txt','New text file created',(err)=>{
    if (err) throw err
    console.log('file created successfully');
})


//Reading a file
const readFile = fileSystem.readFile('./newFile.txt','utf-8',(err, data)=>{
    if (err) throw err 
    console.log(data);
})
module.exports = {createFile,readFile}