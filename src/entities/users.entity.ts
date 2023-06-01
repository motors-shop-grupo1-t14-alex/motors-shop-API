import { getRounds, hashSync } from "bcryptjs";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 127 })
    name: string 

    @Column({ length: 127, unique: true })
    email: string

    @Column({ length:255 })
    password: string

    @Column({ length: 11, unique: true })
    cpf: string 

    @Column({ length: 11 })
    cellphone: string 

    @Column({ type: "date" })
    birth_date: string 

    @Column({ type: "text", nullable: true })
    description : string 

    @Column({ type: "boolean", default: false })
    is_seller : boolean
    
    @Column({ type: "boolean", default: false })
    is_admin : boolean

    @CreateDateColumn({ type: "date" })
    created_at: string | Date

    @UpdateDateColumn({ type: "date" })
    updatedAt: string | Date 

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: string | Date | undefined | null

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}

export default User