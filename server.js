

const express = require('express')
const request = require('request');
const path = require('path')
const urllib=require('urllib')
const api = require('./routes/api.js')


var router = express.Router();
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))//well find the index
app.use('/', api)
const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
    console.log(`“Server is up and running smoothly”`)

})



app.get(`/sanity`, function (request, response) {
    response.send(`ok`)
})










/*const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]*/


/*app.get(`/priceCheck/:name`, function (request, response) {
    response.send(`${request.params.name}`)
})

app.get(`/buy/:name`, function (request, response) {
    store.map(str=>{
        if(str.name==`${request.params.name}`){
            str.inventory--;
        }
    })
    response.send(store)   
})*/
