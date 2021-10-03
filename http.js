let http =require('http')
const server =http.createServer((req,res)=>{
if(req.url=='/first'){
    res.write("good job")
    res.end()
}

}).listen(5555) 
