const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000

app.use(express.static(__dirname));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/index.html')))

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
