require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(routes)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})