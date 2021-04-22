import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

import { v4 as uuid } from 'uuid'

@Entity("Users")
class Users{

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){

        if(!this.id){ 

            this.id = uuid();

        }

    }

}

export { Users }