require('dotenv').config();
require('express-async-errors')
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect')
const userRouter = require('./routes/user')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/users', userRouter)


const port = process.env.PORT

const start = async ()=> {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, ()=> console.log(`Your app is listening on port ${port}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()