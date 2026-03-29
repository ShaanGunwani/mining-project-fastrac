import { Router } from "express"
import { AppDataSource } from "../data-source"
import { Ritase } from "../entities/Ritase"

const router = Router()

router.post("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Ritase)

const ritase = repo.create(req.body)

await repo.save(ritase)

res.json(ritase)

})

router.get("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Ritase)

const data = await repo.find()

res.json(data)

})

export default router