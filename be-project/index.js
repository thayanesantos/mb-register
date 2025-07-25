const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello Back-end Developer!')
})

app.listen(port, () => {
    console.log(`App back-end MB Project listening on port ${port}`)
})