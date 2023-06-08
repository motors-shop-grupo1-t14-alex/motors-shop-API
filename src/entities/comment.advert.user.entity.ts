import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Advert } from "./adverts.entity";
import User from "./users.entity";

@Entity("comment_advert_users")
class CommentAdvertUser {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "text" })
    comment: string 

    @CreateDateColumn({ type: "date" })
    created_at: string | Date

    @UpdateDateColumn({ type: "date" })
    updated_at: string | Date 

    @ManyToOne(() => User)
    @JoinColumn()
    user: User | number

    @ManyToOne(() => Advert)
    @JoinColumn()
    advert: Advert | number
}

export default CommentAdvertUser
