const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000
const cors = require('cors')

app.use(cors())

app.use(express.static(__dirname));

app.get('/webdev', (req, res, next) => res.sendFile(path.join(__dirname, '/webdev.html')))
app.get('/animations', (req, res, next) => res.sendFile(path.join(__dirname, '/animations.html')))
app.get('/archviz', (req, res, next) => res.sendFile(path.join(__dirname, '/archviz.html')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/index.html')))
app.get('/360', (req, res, next) => res.sendFile(path.join(__dirname, '/src/img/NY_750_10TH_CONFERENCE_360.jpg')))

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
