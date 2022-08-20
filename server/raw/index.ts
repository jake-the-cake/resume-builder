import express, { Application } from 'express'
import mongoose from 'mongoose'
import { ResumeRouter } from './routes/ResumeRouter'
import dotenv from 'dotenv'
import { AuthRouter } from './routes/AuthRouter'
import cors from 'cors' 

dotenv.config()
const app: Application = express()
mongoose.connect(process.env.DATABASE_ACCESS as string).then(()=>console.log('data is flowing')).catch(err => console.error(err.message))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use( '/resume', ResumeRouter )
app.use( '/auth', AuthRouter )

app.listen(process.env.PORT || 5500, () => {
  console.log('connected at 5.5k')
})