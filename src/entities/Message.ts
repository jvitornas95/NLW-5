import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Users } from './Users';

@Entity('messages')
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    adminId: string;

    @Column()
    text: string;

    @JoinColumn({ name: 'userId'})
    @ManyToOne( () => Users)
    User: Users;

    @Column()
    userId: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){

        if(!this.id){
            this.id = uuid();
        }

    }

}

export { Message };