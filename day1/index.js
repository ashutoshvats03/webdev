const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) => {
  let siteName="Hakuna matata"
  res.render('index',{siteName : siteName})
})

app.listen(port, () => {
  console.log(`Example app list ening on port ${port}`)
})