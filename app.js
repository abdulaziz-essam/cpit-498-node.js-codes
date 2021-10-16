const  express = require('express')
const app = express()
const port = 7777
var bodyParser = require('body-parser')
app.use(bodyParser.json())
// get data from server
app.get('/', (req, res) => res.send('Hello World!'))
app.use
//post data to the server
app.post('/name', function (req, res) {
    const name=req.body.name
    console.log(name)
  res.send('POST request to the homepage')
})


app.listen(port, () => console.log(`Example app listening on port port!`))