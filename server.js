const express = require('express')
const app = express()
const {resolve} = require('path')
var cors = require('cors')

app.use ('/',
express. static(
resolve(
__dirname,
'./dist'
)))

app
.listen(process.env.PORT || 3000, (err) => {
if (err) { return console.log(err) }
console.log("Tudo funcionando direitinho")
})


app.use(cors())

app.post('search', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.post('searchserie', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://movies-lib-eta.vercel.app/')
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
