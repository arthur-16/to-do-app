import { Router } from "express";
import * as controllers from "../controllers/toDos.js"

const router = Router()

router.get("/todos", controllers.getToDos)
router.get("/todos/:id", controllers.getToDo)
router.get("/todos/update/:id", controllers.updateToDo)
router.post("/todos/", controllers.createToDo)
router.delete("/todos/:id", controllers.deleteToDo)



export default router