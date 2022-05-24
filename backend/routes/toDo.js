import { Router } from "express";
import * as controllers from "../controllers/toDos.js"

const router = Router()

router.get("/todos", controllers.getToDos)



export default router