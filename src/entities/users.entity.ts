import { getRounds, hashSync } from "bcryptjs";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, OneToMany, OneToOne } from "typeorm";
import { Advert } from "./adverts.entity";
import { Address } from "./addresses.entity";

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

    @Column({ length: 11, unique: true })
    cellphone: string 

    @Column({ type: "date" })
    birth_date: string 

    @Column({ type: "text", nullable: true })
    description: string | null

    @Column({ type: "boolean", default: false })
    is_seller: boolean
    
    @Column({ type: "boolean", default: false })
    is_admin: boolean

    @CreateDateColumn({ type: "date" })
    created_at: string | Date

    @UpdateDateColumn({ type: "date" })
    updated_at: string | Date 

    @OneToMany(() => Advert, advert => advert.user, {cascade: true})
    adverts: Advert[]

    @OneToOne(() => Address, address => address.user)
    address: Address | number

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

    @Column({type: "varchar", nullable: true})
    reset_password: string | null
}

export default User
