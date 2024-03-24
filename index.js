
// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/demo');
//   console.log("db connected")
// }

// const userSchema = new mongoose.Schema({
//   name: String,
//   LastName: String
// });

// const User = mongoose.model('User', userSchema);

// const server = express();
// server.use(cors());
// server.use(bodyParser.json());

// server.get('/demo', async (req,res)=>{
//     // res.send("hello")
//     const docs = await User.find({});
//     res.json(docs);
// })
// server.post('/demo', async (req,res)=>{
//     const user = await new User();
//     user.name = req.body.name;
//     user.LastName = req.body.LastName;
//     const doc = await user.save();
//     console.log(doc);
//     // console.log(req.body);
//     res.send(doc);
// })
// server.listen(8080, ()=>{
//     console.log("Server is running")
// })

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require("./routes/usersRouter");
const watchlistRouter = require("./routes/watchlistRouter");
const likesRouter = require("./routes/likesRouter");
const cors = require("cors")
dotenv.config();
const db = require("./config/db")
app.use(cors());
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api', likesRouter);
app.use('/api', watchlistRouter);



app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 4000;
app.listen(Port,()=>{
  console.log(`server started on port ${Port}`);
})

app.get('/path',(req,res)=>{
  res.send("Hello")
})