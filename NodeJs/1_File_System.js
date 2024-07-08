const fs = require("fs");

// Write to the file
fs.writeFileSync("read.txt", "this this practice hour 1");

// Overwrite the file
fs.writeFileSync("read.txt", "this this practice hour 2 ");

// Append to the file
fs.appendFileSync("read.txt", "this this practice hour 3");

// Read the file
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data.toString());

// Rename the file
fs.renameSync("read.txt", "readWrite.txt");

//delete the file 
fs.unlinkSync("readWrite.txt");
