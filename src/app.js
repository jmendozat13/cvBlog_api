import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import { connect } from 'mongoose'
import cors from 'cors'
import { join } from 'path'
import 'dotenv/config'
import indexRoute from './routes/index'
import profileRoute from './routes/profile'
import experienceRoute from './routes/experience'
import experienceSectionRoute from './routes/experienceSection'

const app = express()
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'))

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.use(indexRoute)
app.use('/api/profile/', profileRoute)
app.use('/api/experience/', experienceRoute)
app.use('/api/experiencesection/', experienceSectionRoute)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send('Ups!')
})

export default app;