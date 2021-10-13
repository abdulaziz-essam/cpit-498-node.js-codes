//first example
//l1
console.log("Synchronous")
//l2
setTimeout(() =>{
    console.log("timeout 2")
} , 0)

Promise.resolve().then(() =>console.log("Promise"))

console.log("Synchronous 4")

// second example
Promise.resolve(()=>{
    consoe.log("first task")
}).then(() =>console.log("username"))
.then(() =>console.log("password"))
.then(() =>console.log("id")).catch((err) =>console.log(err))

console.log("second task completed")


 