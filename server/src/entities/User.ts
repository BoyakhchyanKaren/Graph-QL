import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar")
    user_name:string;

    @Column("varchar")
    user_email:string;

    @Column("varchar")
    password:string;

    @Column("int8")
    phone_number:number;
};