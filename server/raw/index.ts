import express, { Application } from 'express'
import mongoose from 'mongoose'
import { ResumeRouter } from './routes/ResumeRouter'
import dotenv from 'dotenv'

dotenv.config()
const app: Application = express()
mongoose.connect(process.env.DATABASE_ACCESS as string).then(()=>console.log('data is flowing')).catch(err => console.error(err.message))

app.use( '/resume', ResumeRouter )

app.listen(process.env.PORT || 5500,() => {
  console.log('connected at 5.5k')
})