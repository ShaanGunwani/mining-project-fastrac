import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Task {

@PrimaryGeneratedColumn()
id: number

@Column()
taskName: string

@Column()
category: string

@Column()
dueDate: string

@Column()
status: string

}