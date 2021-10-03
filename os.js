const os =require("os");
// The OS module provides information about the computer's operating system.
const user=os.userInfo();
console.log("uptime is "+os.uptime())
console.log(user)
console.log(os.type());
console.log(os.freemem())


