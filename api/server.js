const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiroute = require('./routes/DataRoute')
const app = express()
const POST = 9000;

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/public', express.static('public'))
app.use('/api', apiroute)
mongoose.connect('mongodb+srv://nguyenthanhan:0201172001An@cluster0.i3jnxby.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
if(!db){
    console.log("Error connecting MongoDB")
}else{
    console.log("MongoDB connected successfully!")
}

app.get('/',  function(req ,res ) {
    res.send("We are on home")
})

app.listen(POST, function(){
    console.log(`The server is running on ${POST}`)
})