import { Router } from "express"
import { AppDataSource } from "../data-source"
import { Unit } from "../entities/Unit"

const router = Router()

router.post("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Unit)

const unit = repo.create(req.body)

await repo.save(unit)

res.json(unit)

})

router.get("/", async (req,res)=>{

const repo = AppDataSource.getRepository(Unit)

const units = await repo.find()

res.json(units)

})

export default router