import express from 'express'
import { CmsData } from './mock/cmsData'
import { ProductData } from './mock/productData'

var cors = require('cors')
var app = express()

app.use(cors())
const port = 4000

app.get('/cmsData', (_req, res) => {
  res.send(CmsData)
})

app.get('/products', (_req, res) => {
  res.send(ProductData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
