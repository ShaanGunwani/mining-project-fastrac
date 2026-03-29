import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Ritase {

@PrimaryGeneratedColumn()
id: number

@Column()
taskId: number

@Column()
unitId: number

@Column()
operator: string

@Column()
shift: string

@Column()
ritaseTime: string

}