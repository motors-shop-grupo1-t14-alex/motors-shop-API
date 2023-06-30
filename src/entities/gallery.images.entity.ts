import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Advert } from "./adverts.entity";

@Entity("gallery_images")
class GalleryImage {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 255 })
    url_image : string 

    @ManyToOne(() => Advert, { onDelete: 'CASCADE' })
    @JoinColumn()
    advert: Advert | number
}

export default GalleryImage