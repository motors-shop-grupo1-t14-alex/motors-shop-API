import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import User from "./users.entity";
import GalleryImage from "./gallery.images.entity";

// enum FuelType {
//     FLEX = "Flex",
//     HYBRID = "Híbrido",
//     ELECTRIC = "Elétrico"
// }

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

    @Column({ length: 8 })
    fuel_type: string

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

    @UpdateDateColumn({ type: "date" })
    updated_at: string | Date 

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User | number

    @OneToMany(() => GalleryImage, gallery_image => gallery_image.advert, {cascade: true})
    gallery_images: GalleryImage[]

}

export { Advert } 
    
