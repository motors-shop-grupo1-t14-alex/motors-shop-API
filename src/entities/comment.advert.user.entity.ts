import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { Advert } from "./adverts.entity";
import User from "./users.entity";

@Entity("comment_advert_users")
class CommentAdvertUser {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "text" })
    comment: string;

    @CreateDateColumn({
        type: "timestamp",
    })
    created_at: string | Date;

    @UpdateDateColumn({
        type: "timestamp",
    })
    updated_at: string | Date;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User | number;

    @ManyToOne(() => Advert, { onDelete: "CASCADE" })
    @JoinColumn()
    advert: Advert | number;
}

export default CommentAdvertUser;
