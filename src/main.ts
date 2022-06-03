import express from 'express'
import morgan from 'morgan'
import path from 'path'
import connectDB from './db'
import router from './routes'
import clientRouter from './routes/clients'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

void connectDB()

// Routes
app.use(router)
app.use('/client', clientRouter)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
