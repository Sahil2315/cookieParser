let express = require('express')
let app = express()
let path = require('path')
let cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

// let USERNAME = 'Sahil2315'
// let PASSWORD = '12345'

app.post('/login', (req,res) => {
    console.log(req.body)
    if(req.body.username == "Sahil2315" && req.body.password == "12345"){
        res.cookie("Name", "Sahil Nigam")
        res.send({"login":"successful"})
    }else{
        res.send({"login": "failure"})
    }
})

let auth1 = (req, res, next) => {
    if(req.cookies.Name == 'Sahil Nigam'){
        next()
    }
    else[
        res.sendStatus(401)
    ]
}

app.get('/user',auth1, (req,res) => {
    res.sendFile(path.join(__dirname, "logged.html"))
})

app.get('/getDetails',auth1, (req, res) => {
    res.sendFile(path.join(__dirname, "secret.html"))
})

app.listen(5000, ()=> {
    console.log("Server Running on Port 5000")
})