const express = require('express')
const app = express()
const {resolve} = require('path')

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