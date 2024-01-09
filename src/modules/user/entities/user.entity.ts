import { Column, Entity, PrimaryColumn } from "typeorm";

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

    @Column()
    logo: string;
    
    @Column()
    instagram: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}

