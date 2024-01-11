import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Fixer')
export class Fixer {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;
 
    @Column('int',{
        nullable: true
    })
    edad: number;

    @Column({
        nullable: true
    })
    distrito: string;

}
