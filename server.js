const e = require('express')
const express = require('express') // get express
const app = express()// got express and stored in app, so app is esentially espress
const PORT = 8000


let rappers = {
'21 savage':{
    'age':29,
    'birthName':'Sheyaa',
    'birthLocation':'London',
},
'dr drey':{
    'age':40,
    'birthName':'dayfus',
    'birthLocation':'NYC',
},
'dylan':{
    'age':23,
    'birthName':'dylan',
    'birthLocation':'dylan',
}

}

app.get('/',(request, response)=>{// heard get request and send file as response
    response.sendFile(__dirname + "/index.html") // finds file where ever the server.js is located

}) //gets the landing page

app.get('/api/:rapperName',(request,response)=>{ // : means its a query param. get params  rapper name from objectç

const rappersName =request.params.rapperName.toLowerCase()
//  //gets the json file

if(rappers[rappersName]){
    response.json(rappers[rappersName])
}else{
    response.json(rappers['dylan'])
}
//if rappername exists inside of savage eg 'dylan'
})
app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`)
})