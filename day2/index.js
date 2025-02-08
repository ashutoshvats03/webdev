import express from "express";
import mongose from "mongoose";
import { Todo } from "./modules/todo.js";

let con = await mongose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 3001;




app.get('/', (req, res) => {
    const todo = new Todo({title:"hey tofo",desc:"description of todo",isDone:false})
    todo.save();
    res.send('Hello World!');
})

app.get('/a', async(req, res) => {
    const todo = await Todo.findOne({})

    res.json({title:todo.title , desc:todo.desc}) //if not signify todo then big probolem because of big data in json
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})