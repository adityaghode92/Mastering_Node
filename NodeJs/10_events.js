const EventEmmiter = require('events');

const event = new EventEmmiter();


event.on("click",(code,message)=>{
    console.log(`status code : ${code} and message is : ${message}`);
});

console.log("hey there");

event.emit("click",200,"ok");

