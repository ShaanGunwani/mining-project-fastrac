import { Router } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"

const router = Router()

router.post("/", async (req,res)=>{

const repo = AppDataSource.getRepository(User)

const user = repo.create(req.body)

await repo.save(user)

res.json(user)

})

router.get("/", async (req,res)=>{

const repo = AppDataSource.getRepository(User)

const users = await repo.find()

res.json(users)

})

export default router