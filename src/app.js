import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import main from './pages/main.js'
import connectionController from './controllers/connectionController.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(main())
})

app.post('/action/connection', connectionController)
app.get('/action/describe', connectionController)
app.get('/connectionForm', connectionController)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
