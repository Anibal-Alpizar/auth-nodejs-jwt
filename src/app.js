import express from 'express'
import morgan from 'morgan'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))

const app = express()

app.set('pkg', pkg)


app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})
export default app

