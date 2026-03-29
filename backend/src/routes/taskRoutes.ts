import { Router } from "express"
import { AppDataSource } from "../data-source"
import { Task } from "../entities/Task"

const router = Router()

router.post("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Task)

const task = repo.create(req.body)

await repo.save(task)

res.json(task)

})

router.get("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Task)

const tasks = await repo.find()

res.json(tasks)

})

export default router