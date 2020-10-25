var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var fetch = require('node-fetch')

const dotenv = require('dotenv');
dotenv.config();

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))


//console.log(JSON.stringify(mockAPIResponse))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})


const getSentiment = async (req,r)=>{

  let formText = req.body.text
  const baseURL ="https://api.meaningcloud.com/sentiment-2.1?";

  const res = await  fetch(`${baseURL}key=${process.env.API_KEY}&txt=${formText}&lang=en`);
  try {

    const data = await res.json();
    console.log(data)

    r.send(data);
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

app.post('/sentiment', function(req,res){
  getSentiment(req,res);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
