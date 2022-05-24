import { Router } from "express";
import * as controllers from "../controllers/toDos.js"

const router = Router()

router.get("/todos", controllers.getToDos)
router.get("/todos/:id", controllers.getToDo)
router.put("/todos/:id", controllers.updateToDo)
router.post("/todos/", controllers.createToDo)



export default router