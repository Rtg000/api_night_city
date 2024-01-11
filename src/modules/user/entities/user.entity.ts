import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

// @Entity('user')
@Entity({
    name: 'user'
})
export class User {

    @PrimaryColumn('uuid',{
        name: 'id'
    })
    id: string;

    @Column('varchar',{
        name: 'email',
        nullable: false,
        unique: true,
        length: 150
    })
    email: string;

    @Column('varchar',{
        name: 'username',
        nullable: false,
        unique: true,
        length: 150
    })
    username: string;

    @Column('varchar',{
        name: 'password',
        nullable: false,
        unique: false,
        length: 150
    })
    password: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('varchar',{
        array: true,

    })
    roles: string[];

    @Column('varchar',{
        name: 'logo',
        nullable: true,
        unique: false,
        length: 150
    })
    logo: string; // ruta public/images/
    
    @Column('varchar',{
        name: 'instagram',
        nullable: true,
        unique: false,
        length: 150
    })
    instagram: string;

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date;

    @CreateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

}

