import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', router)

// Testing purpose
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Working successfully')
  next()
})

export default app
