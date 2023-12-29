import express from 'express'
import morgan from 'morgan'
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))

const app = express()

app.set('pkg', pkg)


app.use(morgan('dev'))
app.use(express.json()) // <- understand json format

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

export default app

