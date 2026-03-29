import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Unit } from "./entities/Unit"
import { Task } from "./entities/Task"
import { Ritase } from "./entities/Ritase"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "mining.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Unit, Task, Ritase],
})

// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { User } from "./entities/User"
// import { Unit } from "./entities/Unit"
// import { Ritase } from "./entities/Ritase"
// import { Location } from "./entities/Location"


// export const AppDataSource = new DataSource({
//     type: "sqlite",
//     database: "database.sqlite",
//     synchronize: true,
//     logging: false,
//     entities: [User, Unit, Ritase, Location],
// })