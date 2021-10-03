const {readFile,writeFile}=require("fs")
readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log(result)

})
writeFile('./second.txt', 'correct answer', (err) => {
    if (err) {
        console.log(err)
        return
    }
console.log("done with this task")

})