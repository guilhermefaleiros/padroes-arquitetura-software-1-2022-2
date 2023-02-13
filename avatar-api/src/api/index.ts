import express from 'express'
import 'reflect-metadata'
import { createRouter } from './handlers'
import cors from 'cors'
import AppDataSource from '@adapter/database/pg-data-source'

const PORT = 3001

AppDataSource.initialize()
  .then(() => {
    const app = express()

    const router = createRouter()

    app.use(cors())
    app.use('/api', router)

    app.listen(PORT, () => {
      console.log(`[avatar-api] Server is running on port ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
