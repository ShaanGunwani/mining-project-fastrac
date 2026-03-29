import express from "express"
import { AppDataSource } from "./data-source"

import userRoutes from "./routes/userRoutes"
import unitRoutes from "./routes/unitRoutes"
import taskRoutes from "./routes/taskRoutes"
import ritaseRoutes from "./routes/ritaseRoutes"

const app = express()

app.use(express.json())

AppDataSource.initialize().then(()=>{

console.log("Database connected")

app.use("/users",userRoutes)
app.use("/units",unitRoutes)
app.use("/tasks",taskRoutes)
app.use("/ritase",ritaseRoutes)

app.listen(5000,()=>{

console.log("Server running on port 5000")

})

})

// import express from "express"
// import { AppDataSource } from "./data-source"
// import { User } from "./entities/User"
// import { Unit } from "./entities/Unit"
// import { Ritase } from "./entities/Ritase"
// import { Location } from "./entities/Location"

// const app = express()
// app.use(express.json())

// AppDataSource.initialize().then(async () => {

//  console.log("Database connected")

//  const userRepo = AppDataSource.getRepository(User)
//  const unitRepo = AppDataSource.getRepository(Unit)
//  const ritaseRepo = AppDataSource.getRepository(Ritase)

//  app.get("/", (req,res)=>{
//  res.send(`
//    <h1>Fleet Management System API</h1>

//    <h2>Backend Service Status</h2>
//    <p>Server running successfully.</p>

//    <h3>Available Modules</h3>
//    <ul>
//      <li>User Management</li>
//      <li>Unit Management</li>
//      <li>Ritase Tracking</li>
//      <li>Task Monitoring</li>
//    </ul>

//    <h3>API Endpoints</h3>
//    <ul>
//      <li>GET /users</li>
//      <li>POST /users</li>
//      <li>POST /units</li>
//      <li>POST /ritase</li>
//      <li>GET /ritase</li>
//    </ul>

//    <p>Backend built using Node.js, Express, and TypeORM.</p>
//  `)
// })

//  app.post("/users", async (req,res)=>{
//    const user = userRepo.create(req.body)
//    await userRepo.save(user)
//    res.json(user)
//  })

//  app.get("/users", async (req,res)=>{
//    const users = await userRepo.find()
//    res.json(users)
//  })

//  app.post("/units", async (req,res)=>{
//    const unit = unitRepo.create(req.body)
//    await unitRepo.save(unit)
//    res.json(unit)
//  })

//  app.post("/locations", async (req,res)=>{
//   const locationRepo = AppDataSource.getRepository(Location)
//   const location = locationRepo.create(req.body)
//   await locationRepo.save(location)
//   res.json(location)
// })

// app.get("/locations", async (req,res)=>{
//   const locationRepo = AppDataSource.getRepository(Location)
//   const locations = await locationRepo.find()
//   res.json(locations)
// })

//  app.post("/ritase", async (req,res)=>{
//    const ritase = ritaseRepo.create(req.body)
//    await ritaseRepo.save(ritase)
//    res.json(ritase)
//  })

//  app.get("/ritase", async (req,res)=>{
//    const data = await ritaseRepo.find()
//    res.json(data)
//  })

//  app.listen(5000, ()=>{
//    console.log("Server running on port 5000")
//  })

// })