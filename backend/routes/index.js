import { Router } from "express"
import toDoRoutes from "../routes/toDo.js"


const router = Router()

router.get("/", (req, res) => res.send("This is the API root!"))

router.use("/", toDoRoutes)


export default router;