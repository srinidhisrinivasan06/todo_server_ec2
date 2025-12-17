import { get } from "mongoose";
import { addTodo } from "../Controller/todoController.js";
import { getTodo } from "../Controller/todoController.js";
import { updateToDo as UpdateTodo } from "../Controller/todoController.js";
import { deleteTodo } from "../Controller/todoController.js";
import express from 'express'
const route=express.Router()

route.post('/addtodo',addTodo);
route.get('/gettodo',getTodo);
route.put('/updatetodo/:id',UpdateTodo);
route.delete('/deletetodo/:id',deleteTodo);

export default route
