import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import User from "./users.entity";

export enum FuelType {
    FLEX = "Flex",
    HYBRID = "Híbrido",
    ELECTRIC = "Elétrico"
}

@Entity("adverts")
class Advert {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 127 })
    brand : string 

    @Column({ length: 255 })
    model: string 

    @Column({ type: "integer" })
    year: number 

    @Column({ type: "enum", enum: FuelType, default: FuelType.FLEX })
    fuel_type: FuelType 

    @Column({ length: 50 })
    mileage: string 

    @Column({ length: 20 })
    color: string 

    @Column({ type: "decimal" })
    fipe_price: number 

    @Column({ type: "decimal" })
    price: number

    @Column({ type: "text" })
    description: string

    @Column({ length: 255 })
    cover_image: string

    @Column({ type: "boolean", default: true})
    is_published : boolean

    @CreateDateColumn({ type: "date" })
    created_at: string | Date

    @DeleteDateColumn({ type: "date", nullable: true })
    deleted_at?: string | Date | undefined | null

    @UpdateDateColumn({ type: "date" })
    updated_at: string | Date 

    @ManyToOne(() => User)
    @JoinColumn()
    user: User | number

}

export default Advert
