import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import Advert from "./adverts.entity"
import User from "./users.entity"

@Entity("comment_advert_users")
class CommentAdvertUser {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "text" })
    comment: string 

    @ManyToOne(() => User)
    @JoinColumn()
    user: User | number

    @ManyToOne(() => Advert)
    @JoinColumn()
    advert: Advert | number
}

export default CommentAdvertUser



// src\migrations

// src\data-source.ts