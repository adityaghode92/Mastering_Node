
const path = require('path');


console.log(path.dirname("E:/Mastering Node/NodeJs/4_Path_Module.js"));
console.log(path.basename("E:/Mastering Node/NodeJs/4_Path_Module.js"));
console.log(path.extname("E:/Mastering Node/NodeJs/4_Path_Module.js"));

//IMP
const mypath = path.parse("E:/Mastering Node/NodeJs/4_Path_Module.js");
console.log(mypath);

console.log(`root is : ${mypath.root}`);