const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mainRoute = require('./routes/home')
const contactsRoute = require('./routes/contacts')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

const hbs = exphbs.create({ defaultLayout: 'main', extname: 'hbs' })

// layout
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// parse application/x-www-form-urlencoded and application/json
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.use('/', mainRoute)
app.use('/contacts', contactsRoute)

function start() {
  app.listen(PORT, () => console.log('Server is listening on port: ' + PORT))
}

start()