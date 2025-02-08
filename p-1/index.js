import express from "express";
import mongose from "mongoose";
import {Todo} from "./modules/todo.js";

const app = express()
const port = 3000

import path from "path"
import { fileURLToPath } from 'url';
// These two lines are necessary to mimic __dirname functionality
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'views')));



let con = await mongose.connect("mongodb://localhost:27017/todo")

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/create',async (req, res) => {
  res.send("hello")
  await Todo.deleteMany({}); //Since Mongoose operations are asynchronous, you should handle them properly using async/await or .then().

  for (let i = 0; i < 10; i++) {
    const todo = new Todo(
      {
        title: "hey tofo",
        desc: "description of todo",
        isDone: false
      }
    )
    todo.save();
  }
  console.log("hey")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})