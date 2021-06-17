const express = require('express')
app = express()
 
app.use(express.static('public'))


var server = app.listen(3000, (req, res) => {
    console.log("Server has started port 3000")
})