import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User from "./users.entity";

@Entity("adresses")
class Address {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 8 })
    cep: string 

    @Column({ length: 2 })
    uf: string 

    @Column({ length: 50 })
    city: string 

    @Column({ length: 255 })
    street: string 

    @Column({ length: 10 })
    number: string 

    @Column({ type: "text", nullable: true})
    complement : string 

    @OneToOne(() => User)
    @JoinColumn()
    user: User | number
}

export default Address